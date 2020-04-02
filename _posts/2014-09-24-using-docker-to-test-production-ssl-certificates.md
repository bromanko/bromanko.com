---
title: Using Docker to Test Production SSL Certificates
excerpt:
date: '2014-09-24'
---

Whenever I get a shiny new SSL certificate for a production hostname I can’t help but feel some anxiety. Does the certificate have the proper intermediate chain? Does the private key match the certificate? Are the SANs correct?

With Google’s [deprecation of SHA1 certificates](https://konklone.com/post/why-google-is-hurrying-the-web-to-kill-sha-1) I have several services that need to have certificates re-issued and replaced. This felt like a good time to setup a small process I could use to test these certificates prior to putting them on production.

First, I created a simple testing ground for my certificates and apps.
A root folder containing `sites-enabled` and `certs` subfolders.

Next I placed my certificate chain files and private keys in the `certs` folder.
In the `sites-enabled` folder I configured SSL servers for each of the certificates I was trying to test.

Here’s an example that runs http and https listeners and redirects all traffic to the https server.

```
server {
 listen 80;
 server_name bromanko.com www.bromanko.com;

 location / {
   rewrite ^ https://www.bromanko.com$request_uri? permanent;
 }
}

server {
 listen 443;
 server_name bromanko.com www.bromanko.com;

 ssl on;
 ssl_certificate /etc/nginx/certs/www.bromanko.com.crt;
 ssl_certificate_key /etc/nginx/certs/www.bromanko.com.key;
 ssl_client_certificate /etc/nginx/certs/www.bromanko.com.ca;
}
```

With this configuration in place, I pulled down an nginx docker image.

```bash
docker pull dockerfile/nginx
```

Now I was ready to spawn a docker container referring to the configuration files:

```bash
docker run -i -t —rm -p 80:80 -p 443:443 -v /Users/brian/projects/ssl-test/site-enabled/:/etc/nginx/sites-enabled -v /Users/brian/projects/ssl-test/certs/:/etc/nginx/certs dockerfile/nginx nginx
```

The final piece is to test that the new certificate is working.
The easiest solution was to edit my hosts file to resolve `www.bromanko.com`
and `bromanko.com` to the running container.
Since I’m on OSX, this will be the IP of my boot2docker VM.

```
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting. Do not change this entry.
##
127.0.0.1 localhost
255.255.255.255 broadcasthost
::1 localhost
fe80::1%lo0 localhost
192.168.59.103 boot2docker
192.168.59.103 www.bromanko.com
192.168.59.103 bromanko.com 
```

Opening a browser and pointing to `http://bromanko.com` will now resolve to
my boot2docker VM which maps ports 80 and 443 to the running nginx container
with the new certificates in place. I can confirm that the certificate chains are correct, the SANs are working properly all prior to deploying these certificates on production. Peace of mind acquired.
