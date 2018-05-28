---
layout: post
title: "Elegant Node.js Web Services: Pipelines"
excerpt: This article describes the basics of an organized web service pipeline in Node.js. I’ve also published a companion Github repository that lays out the patterns in practice.
feature-gradient: vanusa
---

As [Joel Spolsky said](http://www.joelonsoftware.com/articles/fog0000000069.html), it’s harder to read code than it is to write it. Functional languages like JavaScript are particularly prone to this. I’ve spent the past year building and maintaining several large Node.js web service codebases. One technique that has proven itself is conceptualizing service calls as function pipelines and organizing the logic accordingly. This has helped keep complexity down, increased readability and avoids the “pyramid of doom.”

This article describes the basics of an organized web service pipeline in Node.js. I’ve also published a [companion Github repository](https://github.com/bromanko/restify-example) that lays out the patterns in practice.

---

### Node.js Web Service Functionality

Out of the box, both [Restify](http://mcavage.me/node-restify/) and [Express](http://expressjs.com/) treat HTTP request/response calls similarly. They create the purest JavaScript representation of their underlying HTTP counterparts. A request comes in, one or more JavaScript functions execute and a response is send to the client.

A well architected Node.js web service/app needs to execute a host of functionality on each request:

* **Request Validation**  
 Ensure the request conforms to the contract specified by your server. Examples include Accept header parsing, CORS/JSONP validation, or throttling.

* **Logging**  
  Attach logging capability to a request and emit request information to attached loggers.

* **Request Transformation**  
  Clean up a web request and convert raw objects to something more usable later in the pipeline. Examples include query string and body body parsing.

* **Authentication**  
  Read request authentication information and match the data against an authentication data store. Accept or reject credentials.

* **Authorization**  
  Verify that the authenticated user (or lack thereof) is allowed to access the resource requested.

* **Business Logic**  
  Perform the functionality required by the specific request. Examples include reading information from a data store or performing an operation.

* **Responding**  
  Packaging appropriate data and transforming it into an acceptable format that conforms the the contract specified by your server (xml, json, csv).

* **Auditing**  
  Logging response information and performing any post-request hooks. This is also a great place to apply developer safeguard behavior in non-production environments.

That’s a lot of functionality! However, breaking each behavior down into a function and executing them as a pipeline leads to an elegant separation of concerns. *(I’ve had the misfortune of working on a codebase where these features were repeated in each method call. That was a maintenance nightmare.)*

---

### An Example

Here’s a walkthrough of a [boilerplate Restify web service](https://github.com/bromanko/restify-example) that provides all of the above behavior. Each of the concerns are separated and managed as discrete pipeline components. *(Much of the implementation is pseudocode. It’s intended to show how the pieces fit, not provide a complete implementation.)*

#### Middleware

The first method by which I attach functionality to our request pipeline is via middleware. Middleware functions are executed once per request in the order they are attached. In both Express and Restify, these middleware are added via the `use` method. Both frameworks come packaged with common middleware that handle several of the aforementioned concerns. In application specific cases you can easily provide your own middleware functions to accomplish common behavior.

#### Out of the Box Middleware

In the Restify example, I leverage several provided middleware to handle most of the basic request concerns.

```javascript
// Request validation
server.use(restify.acceptParser(server.acceptable));

// Logging
server.use(restify.requestLogger());

// Request transformation
server.use(restify.queryParser());
server.use(restify.bodyParser());
```

#### Custom Middleware

Authentication is application-specific in implementation. However, it is still functionality that must be performed on every request. It’s easy enough to create custom middleware to handle concerns such as this in a consistent manner.

```javascript
// Authentication
server.use(authorization.authenticate()); 
```

I also leverage custom middleware to attach convenience methods to the request and response objects. For instance, I created [Jiggler](https://github.com/Heyride/node-jiggler), a framework for customizing the serialization of model objects for REST responses. A custom middleware is added to reduce Jiggler transformation and response to a single line of code.

```javascript
// Some convenience methods for transforming response objects
server.use(representation.responder()); 
```

#### Route Handlers

Once common behavior is added to the pipeline, we can concentrate on the functionality unique to individual endpoints. Express and Restify provide route handler functions to associate a function of code with an HTTP endpoint URL. Here’s a typical implementation.

```javascript
server.get('/', function(req, res, next) {
  res.json({
    version: '0.1'
  });
  return next();
});
```

An often overlooked feature of these methods is the ability for each route registration to instead be passed an array of functions to be executed in order. That’s right — a pipeline embedded directly in each route. Here I attach functionality that is common in behavior, yet is dependent on local arguments. Typical use cases include validating request parameters or loading a model object from a URL key prior to execution of core route logic.

```javascript
// Route with a pipeline of methods
// The first function will ensure required params are passed
// The second function performs our actual business logic
server.get('/tasks', [validation.requireParams('status'),     function(req, res, next) {
  res.json({
    tasks: [
      {
        name: 'Get groceries',
        status: 'Not done'
      },
      {
        name: 'Walk the cat',
        status: 'Not done'
      }
    ]
  });
  return next();
}]);
```

#### Post-Route Middleware

Finally, some behavior needs to execute on every request yet should occur after the unique request business logic has completed. Some examples include audit loggers and developer safeguards. This functionality can be added to our pipeline in an `after` event handler or by adding the middleware via use after all routes have been defined. I prefer the former because it is more explicit.

```javascript
if (CONFIG.server.auditLog) {
  server.on('after', restify.auditLogger({
    log: new Logger(CONFIG.server.auditLog)
  }));
}
```

Developer safeguard middleware is a great way to protect yourself and other developers from easily caught mistakes. For instance, on one project we had a problem 
with slow execution time — particularly slow database queries. I added a post-route middleware to detect execution times above a certain threshold and then return 
a server error if the threshold was exceeded (*in NODE_ENV=development only — just in case*). This forced developers to keep performance in mind while developing.

### Closing Thoughts

I recommend reading through the complete [example codebase](https://github.com/bromanko/restify-example) to get a sense for the patterns in practice. Node.js is a great platform for building complex web services. However,the code complexity that can arise requires a bit of diligence when crafting solutions. Mind the pipeline and keep your concerns separate. Future you will thank you for it when he or she isn’t neck deep in callbacks.
