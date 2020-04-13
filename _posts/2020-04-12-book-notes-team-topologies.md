---
title:  'Book Notes — Team Topologies: Organizing Business and Technology Teams for Fast Flow'
date: '2020-04-12'
---

**Title:** [Team Topologies: Organizing Business and Technology Teams for Fast Flow by Matthew Skelton and Manuel Pais](https://www.amazon.com/Team-Topologies-Organizing-Business-Technology/dp/1942788819)  
**ISBN:** 1942788819  
**Date Read:** April 2020  
**Recommended:** 10/10

When I read non-fiction books I highlight salient points. I then export these notes to act as a point of reference for my future self. I may also share them with colleagues to quickly bring them up to speed with key points. All quotes reference a Kindle “page” location. My biggest take-aways are highlighted.

## Notes
### Part I - Teams as the Means of Delivery
> Teams should be long lived and autonomous, with engaged team members.  
_Location 259_

> Organizations not only need to strive for autonomous teams, they also need to continuously think about and evolve themselves in order to deliver value quickly to customers.  
_Location 271_

> <mark>There is huge value in agreeing to a coherent vocabulary and way of working together across teams to achieve good software delivery.</mark>  
_Location 298_

#### Chapter 1: The Problem with Org Charts
> Organizations need stable teams and effective team patterns and interactions. They need to invest in empowered, skilled teams as the foundation for agility and adaptability.  
_Location 386_

> <mark>We must shift our thinking from treating teams as collections of interchangeable individuals that will succeed as long as they follow the “right” process and use the “right” tools, to treating people and technology as a single human_computer carbon_silicon sociotechnical ecosystem.</mark>  
_Location 392_

> At the same time, we need to ensure that teams are intrinsically motivated and are given a real chance of doing their best work within such a system.  
_Location 394_

> Relying on the org chart as a principal mechanism of splitting the work to be done leads to unrealistic expectations. We need to rely instead on decoupled, long-lived teams that can collaborate effectively to meet the challenge of balancing speed and safety.  
_Location 403_

> <mark>The problem with taking the org chart at face value is that we end up trying to architect people as if they were software, neatly keeping their communication within the accepted lines. But people don’t restrict their communications only to those connected lines on the chart.</mark>  
_Location 405_

![](864DCEAB-C3EA-4989-9586-438FC3566613.png)
_Location 410_

> Decisions based on org-chart structure tend to optimize for only part of the organization, ignoring upstream and downstream effects.  
_Location 418_

> Systems thinking focuses on optimizing for the whole, looking at the overall flow of work, identifying what the largest bottleneck is today, and eliminating it.  
_Location 423_

> Formal structure (the org chart)—facilitates compliance. Informal structure—the “realm of influence” between individuals Value creation structure—how work actually gets done based on inter-personal and inter-team reputation  
_Location 438_

> Instead of a single structure, what is needed is a model that is adaptable to the current situation—one that takes into consideration how teams grow and interact with each other.  
_Location 459_

> <mark>Teams have a finite cognitive capacity that needs to be respected.</mark>  
_Location 482_

> <mark>Team structures must match the required software architecture or risk producing unintended designs.</mark>  
_Location 503_

> <mark>“inverse Conway maneuver” (or reverse Conway maneuver), whereby an organization focuses on organizing team structures to match the architecture they want the system to exhibit rather than expecting teams to follow a mandated architecture design.</mark>  
_Location 506_

> <mark>When cognitive load isn’t considered, teams are spread thin trying to cover an excessive amount of responsibilities and domains. Such a team lacks bandwidth to pursue mastery of their trade and struggles with the costs of switching contexts.</mark>  
_Location 518_

Relevant case-study quote:
> Victims of their own success, sprint planning for the now eight-person-strong team was a mix and match of requests across their stack of responsibilities. Prioritization was hard, and the frequent context switching even throughout a single sprint led to a dip in people’s motivation.  
_Location 523_

#### Chapter 2: Conway’s Law and Why it Matters
> Our research lends support to what is sometimes called the “inverse Conway maneuver,” which states that organizations should evolve their team and organizational structure to achieve the desired architecture. The goal is for your architecture to support the ability of teams to get their work done—from design through to deployment—without requiring high-bandwidth communication between teams.  
_Location 627_

![](2F25792A-EB76-40C7-A3E4-B6BF5BA90AEE.png)
_Location 665_

> Team assignments are the first draft of the architecture.  
_Location 675_

> <mark>Organization design and software design are, in practice, two sides of the same coin, and both need to be undertaken by the same informed group of people.</mark>  
_Location 704_

> “managers should focus their efforts on understanding the causes of unaddressed design interfaces . . . and unpredicted team interactions . . . across modular systems.”  
_Location 718_

> Generally speaking, we need to optimize for fast flow, so stream-aligned teams are preferred.  
_Location 782_

> Fast flow requires restricting communication between teams. Team collaboration is important for gray areas of development, where discovery and expertise is needed to make progress. But in areas where execution prevails—not discovery—communication becomes an unnecessary overhead.  
_Location 798_

> Driskell and Salas found that teams working as a cohesive unit perform far better than collections of individuals for knowledge-rich, problem-solving tasks that require high amounts of information.  
_Location 811_

#### Chapter 3: Team-First Thinking
> Research by Google on their own teams found that who is on the team matters less than the team dynamics;  
_Location 819_

> <mark>Use Small, Long-Lived Teams as the Standard. By team, we mean a stable grouping of five to nine people who work toward a shared goal as a unit. We consider the team to be the smallest entity of delivery within the organization. Therefore, an organization should never assign work to individuals; only to teams.</mark>  
_Location 825_

> Dunbar’s number. Dunbar found fifteen to be the limit of the number of people one person can trust deeply. From those, only around five people can be known and trusted closely.  
_Location 829_

> <mark>Organizations need to maximize trust between people on a team, and that means limiting the number of team members. If trust is missing or reduced due to a larger group of people, speed and safety of delivery will suffer.</mark>  
_Location 834_

> <mark>Teams take time to form and be effective. Typically, a team can take from two weeks to three months or more to become a cohesive unit. There’s a ramp-up period necessary to bring people up to speed, but the communication lines inside the team also increase significantly with every new member. Not only that, but there is an emotional adaptation required both from new and old team members in order to understand and accommodate each other’s points of view and work habits (the “storming” stage of Tuckman’s team-development model).</mark>  
_Location 876_

> <mark>The best approach to team lifespans is to keep the team stable and “flow the work to the team,” as Allan Kelly says in his 2018 book Project Myopia. Teams should be stable but not static, changing only occasionally and when necessary. In high-trust organizations, people may change teams once a year without major detrimental effects on team performance.</mark>  
_Location 886_

> <mark>The danger of allowing multiple teams to change the same system or subsystem is that no one owns either the changes made or the resulting mess. When a single team owns the system or subsystem, and the team has the autonomy to plan their own work, then that team can make sensible decisions about short-term fixes with the knowledge that they will be removing any dirty fixes in the next few weeks. Every part of the software system needs to be owned by exactly one team. This means there should be no shared ownership of components, libraries, or code. Teams may use shared services at runtime, but every running service, application, or subsystem is owned by only one team.</mark>  
_Location 908_

> Outside teams may submit pull requests or suggestions for change to the owning team, but they cannot make changes themselves. The owning team may even trust another team so much that they grant them access to the code for a period of time, but only the original team retains ownership.  
_Location 913_

> Note that team ownership of code should not be a territorial thing. The team takes responsibility for the code and cares for it, but individual team members should not feel like the code is theirs to the exclusion of others. Instead, teams should view themselves as stewards or caretakers as opposed to private owners. Think of code as gardening, not policing.  
_Location 915_

> For teams to work, team members should put the needs of the team above their own. They should:
* Arrive for stand-ups and meetings on time.
* Keep discussions and investigations on track.
* Encourage a focus on team goals.
* Help unblock other team members before starting on new work.
* Mentor new or less experienced team members.
* Avoid “winning” arguments and, instead, agree to explore options.
_Location 921_

> <mark>Looking to reward individual performance in modern organizations tends to drive poor results and damages staff behavior.</mark>  
Location 944

> Organizations should not allow a software subsystem to grow beyond the cognitive load of the team responsible for the software. Cognitive load was characterized in 1988 by psychologist John Sweller as “the total amount of mental effort being used in the working memory.” When measuring cognitive load, what we really care about is the domain complexity—how complex is the problem that we’re trying to solve with software?  
_Location 967_

> To get started, identify distinct domains that each team has to deal with, and classify these domains into simple (most of the work has a clear path of action), complicated (changes need to be analyzed and might require a few iterations on the solution to get it right), or complex (solutions require a lot of experimentation and discovery). You should finetune the resulting classification by comparing pairs of domains across teams: How does domain A stack against domain B? Do they have similar complexity or is one clearly more complex than the other? Does the current domain classification reflect that? The second heuristic is that a single team (considering the golden seven-to-nine team size) should be able to accommodate two to three “simple” domains. The third heuristic is that a team responsible for a complex domain should not have any more domains assigned to them—not even a simple one. The last heuristic is to avoid a single team responsible for two complicated domains.  
_Location 1042_

![](02028CDA-B548-4DB4-8FF6-F6F20444CAF4.png)
_Location 1050_

> <mark>Change the management style by communicating goals and outcomes rather than obsessing over the “how,” what McChrystal calls “Eyes On, Hands Off” in Team of Teams.</mark>  
_Location 1074_

> Team API: an API surrounding each team. An API (application programming interface) is a description and specification for how to interact programmatically with software, so we extend this idea to entire interactions with the team. The team API includes:
* Code: runtime endpoints, libraries, clients, UI, etc. produced by the team
* Versioning: how the team communicates changes to its code and services (e.g., using semantic versioning [SemVer] as a “team promise” not to break things)
* Wiki and documentation: especially how-to guides for the software owned by the team
* Practices and principles: the team’s preferred ways of working
* Communication: the team’s approach to remote communication tools, such as chat tools and video conferencing
* Work information: what the team is working on now, what’s coming next, and overall priorities in the short to medium term
* Other: anything else that other teams need to use to interact with the team
_Location 1102_

> For effective team-first ownership of software, teams need to continuously define, advertise, test, and evolve their team API to ensure that it is fit for purpose for the consumers of that API: other teams.  
_Location 1113_

> <mark>It is important to provide time, space, and money to enable and encourage people from different teams with similar skills and expertise to come together to learn from each other and to develop their professional competencies. (1) a consciously designed physical and virtual environment; and (2) time away from desks at guilds, communities of practice (a group of people who regularly get together on a voluntary basis to collectively learn and share knowledge about a domain of interest, internal tech conferences, etc.</mark>  
_Location 1129_

### Part II - Team Topologies that Work for Flow
> Part II, we investigate a set of static team patterns that have been proven in the industry and the implications of choosing one pattern over another with Conway’s law and organizational context in mind.  
_Location 304_

#### Chapter 4: Static Team Topologies

**Team Anti-Patterns**
> The first anti-pattern is ad hoc team design. The other common anti-pattern is shuffling team members. While there is a sense of higher flexibility and a perceived ability to respond faster to deadlines, the cost of forming new teams and switching context repeatedly gets overlooked (or is unconsciously factored in the project estimates). A computer will perform the same whether it is placed in Room A or Room B, but an engineer placed on Team A may perform very differently than if placed on Team B.  
_Location 1307_

> <mark>Organizations must design teams intentionally by asking these questions: Given our skills, constraints, cultural and engineering maturity, desired software architecture, and business goals, which team topology will help us deliver results faster and safer?</mark>  
_Location 1316_

> <mark>How can we reduce or avoid handovers between teams in the main flow of change? Where should the boundaries be in the software system in order to preserve system viability and encourage rapid flow? How can our teams align to that?</mark>  
_Location 1317_

> There is no “right” topology, but several “bad” topologies for any one organization.  
_Location 1397_

> We consider a feature team to be a cross-functional, cross-component team that can take a customer facing feature from idea all the way to production, making them available to customers and, ideally, monitoring its usage and performance. Are these a pattern or an anti-pattern? As you might have guessed by now, it depends. A cross-functional feature team can bring high value to an organization by delivering cross-component, customer-centric features much faster than multiple component teams making their own changes and synchronizing into a single release. But this can only happen when the feature team is self-sufficient, meaning they are able to deliver features into production without waiting for other teams.  
> The feature team typically needs to touch multiple codebases, which might be owned by different component teams. If the team does not have a high degree of engineering maturity, they might take shortcuts, such as not automating tests for new user workflows or not following the “boy-scout rule” (leaving the code better than they found it). Over time, this leads to a breakdown of trust between teams as technical debt increases and slows down delivery speed.  
_Location 1404_

> Someone still had to keep oversight of the system as a whole and ensure subsystems integrated and interacted according to the desired user experience, performance, and reliability. Therefore, specific roles were created, such as system architects, system owners, or integration leads. Crucially, people in these roles work across the entire project/organization sort of like “communication conduits,” with direct and frequent interaction with feature teams. They support them on cross-subsystem concerns (such as interfaces and integration) to allow them to maintain a regular feature delivery cadence.  
_Location 1421_

> Product teams (identical in purpose and characteristics to a feature team but owning the entire set of features for one or more products). Microsoft has been using product teams since the 1980s. There is increased friction as product teams are pressured to deliver faster, but they are part of a system that does not support the necessary levels of autonomy.  
_Location 1426_

![](2306003A-E210-4D7E-9978-437F45590459.png)
_Location 1511_

> “Visualizing important cross-team information helps communicate across teams.”  
_Location 1535_

> **[There are] three different categories of dependency: knowledge, task, and resource dependencies.**  
_Location 1535_

> <mark>Whichever tool is used, it is important to track the number of dependencies per area, and to establish thresholds and alerts that are meaningful for a particular situation. The number of dependencies should not be allowed to increase unchecked. Instead, such an increase should trigger adjustments in the team design and dependencies.</mark>  
_Location 1539_

#### Chapter 5: The Four Fundamental Team Topologies
* Stream-aligned team
* Enabling team
* Complicated-subsystem team
* Platform team
_Location 1608_

> <mark>Multiple stream-aligned teams are the starting point. but an organization may also have several platform teams, a few enabling teams for different purposes (perhaps one addressing CI/CD and a second addressing infrastructure or architecture), and, if strictly necessary, one or two complicated-subsystem teams.</mark>  
_Location 1620_

> There is no “Ops” team or “support” team in the fundamental topologies, and this is deliberate.  
_Location 1624_

**Stream-Aligned Team**
> <mark>A stream-aligned team is a team aligned to a single, valuable stream of work; this might be a single product or service, a single set of features, a single user journey, or a single user persona. Further, the team is empowered to build and deliver customer or user value as quickly, safely, and independently as possible, without requiring hand-offs to other teams to perform parts of the work.</mark>  
_Location 1634_

> The stream-aligned team is the primary team type in an organization, and the purpose of the other fundamental team topologies is to reduce the burden on the stream-aligned teams.  
_Location 1636_

> The mission of an enabling team, for instance, is to help stream-aligned teams acquire missing capabilities, taking on the effort of research and trials, and setting up successful practices. The mission of a platform team is to reduce the cognitive load of stream-aligned teams by off-loading lower level detailed knowledge (e.g., provisioning, monitoring, or deployment), providing easy-to-consume services around them.  
_Location 1638_

> <mark>A stream-aligned team works on the full spectrum of delivery, they are, by necessity, closer to the customer and able to quickly incorporate feedback from customers while monitoring their software in production.</mark>  
_Location 1641_

> <mark>Whichever kind of stream of changes a stream-aligned team is aligned to, that team is funded in a long-term, sustainable manner as part of a portfolio or program of work, not as a fleeting project.</mark>  
_Location 1648_

> This stands in stark contrast to traditional work allocation, whereby either a large request by a single customer or a set of smaller requests by multiple customers get translated into a project. Once the project is approved and funded, several teams will potentially get involved (e.g., front-end, back-end, and DBA teams) and be required to fit the new work into their existing backlog.  
_Location 1652_

> Generally speaking, each stream-aligned team will require a set of capabilities in order to progress work from its initial (requirements) exploration stages to production. These capabilities include (but are not restricted to):
* Application security
* Commercial and operational viability analysis
* Design and architecture
* Development and coding
* Infrastructure and operability
* Metrics and monitoring
* Product management and ownership
* Testing and quality assurance
* User experience (UX)
_Location 1677_

> Instead, we’re talking about being able, as a team, to understand and act upon the above capabilities. This might mean having a mix of generalists and a few specialists.  
_Location 1683_

> Customers interact not just with a discrete piece of software but with a range of products and devices that all run different kinds of software, from mobile to embedded to voice-led controls. Customers also interact with brands via multiple channels (in person, social media, website, phone), expecting consistent responses and interfaces. In this multi-channel, highly connected context, a “product” can mean very different things, making it hard to understand what the responsibilities of a “product team” are.  
_Location 1695_

> The term “stream aligned” more suited to a wider range of situations than either “product” of “feature,” but “stream aligned” also incorporates and helps to emphasize a sense of flow (because a stream flows). Finally, not all software situations need products or features (especially those focused on providing public services), but all software situations benefit from alignment to flow. A stream-aligned team aims to produce a steady flow of feature delivery.
* A stream-aligned team is quick to course correct based on feedback from the latest changes.
* A stream-aligned team uses an experimental approach to product evolution, expecting to constantly learn and adapt.
* A stream-aligned team has minimal (ideally zero) hand-offs of work to other teams.
* A stream-aligned team is evaluated on the sustainable flow of change it produces (together with some supporting technical and team-health metrics).
* A stream-aligned team must have time and space to address code quality changes (sometimes called “tech debt”) to ensure that changing the code remains safe and easy to do.
* A stream-aligned team proactively and regularly reaches out to the supporting fundamental-topologies teams (complicated subsystem, enabling, and platform).
* Members of a stream-aligned team feel they have achieved or are in the path to achieving “autonomy, mastery, and purpose,” the three key components of engaged knowledge workers, according to Daniel Pink.
_Location 1703_

**Enabling Teams**
> <mark>An enabling team is composed of specialists in a given technical (or product) domain, and they help bridge this capability gap. Such teams cross-cut to the stream-aligned teams and have the required bandwidth to research, try out options, and make informed suggestions on adequate tooling, practices, frameworks, and any of the ecosystem choices around the application stack.</mark>  
_Location 1723_

> Enabling teams have a strongly collaborative nature; they thrive to understand the problems and shortcomings of stream-aligned teams in order to provide effective guidance. Jutta Eckstein calls them “Technical Consulting Teams,” a definition that maps well to what we’d expect a consulting team to provide (guidance, not execution), whether internal or external to the organization.  
_Location 1728_

> Enabling teams actively avoid becoming “ivory towers” of knowledge, dictating technical choices for other teams to follow, while helping teams to understand and comply with organization-wide technology constraints. The end goal of an enabling team is to increase the autonomy of stream-aligned teams by growing their capabilities with a focus on their problems first, not the solutions per se. If an enabling team does its job well, the team that it is helping should no longer need the help from the enabling team after a few weeks or months; there should not be a permanent dependency on an enabling team.  
_Location 1731_

> A single enabling team might map to any of the stream-aligned team capabilities we listed in the previous section (user experience, architecture, testing, and so on), but often they are focused on more specific areas, such as build engineering, continuous delivery, deployments, or test automation for particular client technology (e.g., desktop, mobile, web). For example, the enabling team might set up a walking skeleton of a deployment pipeline or a basic test framework combining automation tools and some initial scenarios and examples.  
_Location 1740_

* An enabling team proactively seeks to understand the needs of stream-aligned teams, establishing regular checkpoints and jointly agreeing when more collaboration is needed.
* An enabling team stays ahead of the curve in keeping abreast of new approaches, tooling, and practices in their area of expertise, well before an actual need is expected from stream-aligned teams. In the past, this has been the mission of architecture or innovation teams, but the focus on enabling other teams creates a better dynamic.
* An enabling team acts as a messenger of both good news (e.g., “There’s a new UI automation framework that can reduce our custom test code by 50%.”) and bad news (e.g., “Javascript framework X, which we’re using extensively, is no longer actively maintained.”). This helps with management of the technology life cycle.
* Occasionally, the enabling team might act as a proxy for external (or internal) services that are currently too difficult for stream-aligned teams to use directly.
* An enabling team promotes learning not only inside the enabling team but across stream-aligned teams, acting as a curator that facilitates appropriate knowledge sharing inside the organization (supporting what Tom DeMarco and Tim Lister call a “key learning function.”
_Location 1750_

> Enabling teams do not exist to fix problems that arise from poor practices, poor prioritization choices, or poor code quality within stream-aligned teams. Stream-aligned teams should expect to work with enabling teams only for short periods of time (weeks or months) in order to increase their capabilities around a new technology, concept, or approach. After the new skills and understanding have been embedded in the stream-aligned team, the enabling team will stop daily interaction with the stream-aligned team, switching their focus to a different team.  
_Location 1787_

**Complicated-Subsystem Teams**
> <mark>Complicated-subsystem team is responsible for building and maintaining a part of the system that depends heavily on specialist knowledge, to the extent that most team members must be specialists in that area of knowledge in order to understand and make changes to the subsystem.</mark>  
_Location 1801_

> The goal of this team is to reduce the cognitive load of stream-aligned teams working on systems that include or use the complicated subsystem. The team handles the subsystem complexity via specific capabilities and expertise that are typically hard to find or grow. We can’t expect to embed the necessary specialists in all the stream-aligned teams that make use of the subsystem; it would not be feasible, cost-effective, or in line with the stream-aligned team’s goals.  
_Location 1803_

> We expect to have only a few complicated-subsystem teams in a Team Topologies–driven organization  
_Location 1812_

* A complicated-subsystem team is mindful of the current stage of development of the subsystem and acts accordingly: high collaboration with stream-aligned teams during early exploration and development phases; reduced interaction and focus on the subsystem interface and feature evolution and usage during later stages, when the subsystem has stabilized.
* With a complicated-subsystem team, delivery speed and quality for the subsystem is clearly higher than if/ when the subsystem was being developed by a stream-aligned team (before the decision to split).
* The complicated-subsystem team correctly prioritizes and delivers upcoming work respecting the needs of the stream-aligned teams that use the complicated subsystem.
_Location 1817_

**Platform Teams**
> <mark>The purpose of a platform team is to enable stream-aligned teams to deliver work with substantial autonomy. The stream-aligned team maintains full ownership of building, running, and fixing their application in production. The platform team provides internal services to reduce the cognitive load that would be required from stream-aligned teams to develop these underlying services.</mark>  
_Location 1824_

> A digital platform is a foundation of self-service APIs, tools, services, knowledge and support which are arranged as a compelling internal product. Autonomous delivery teams can make use of the platform to deliver product features at a higher pace, with reduced coordination.  
_Location 1828_

> The platform team’s knowledge is best made available via self-service capabilities via a web portal and/ or programmable API (as opposed to lengthy instruction manuals) that the stream-aligned teams can easily consume.  
_Location 1831_

> Teams must treat the services they offer as products that are reliable, usable, and fit for purpose, regardless of if they are consumed by internal or external customers. Jutta Eckstein has a suitable recommendation: “Technical-service teams should always regard themselves as pure service providers for the domain teams.”  
_Location 1833_

> Platform teams are expected to focus on providing a smaller number of services of acceptable quality rather than a large number of services with many resilience and quality problems.  
_Location 1839_

> Platform examples at a lower level of the stack could range from provisioning a new server instance to providing tools for access management and security enforcement. A stream-aligned team can then decide to use these patterns without fearing a lack of in-depth skills or effort available to acquire them.  
_Location 1849_

* A platform team uses strong collaboration with stream-aligned teams to understand their needs.
* A platform team relies on fast prototyping techniques and involves stream-aligned team members for fast feedback on what works and what does not.
* A platform team has a strong focus on usability and reliability for their services (treating the platform as a product), and regularly assesses if the services are still fit for purpose and usable.
* A platform team leads by example: using the services they provide internally (when applicable), partnering with stream-aligned teams and enabling teams, and consuming lower level platforms (owned by other platform teams) whenever possible.
* A platform team understands that adoption of internal new services, like new technologies, is not immediate, but instead evolves along an adoption curve.
_Location 1858_

> In a platform, the streams relate to services and products within the platform, which could be things like logging and monitoring services, APIs for creating test environments, facilities for querying resource usage, and so on.  
_Location 1893_

> From the viewpoint of the Dev teams, the platform is a single entity that provides them with a service that they simply consume via an API: However, inside the platform team there are several distinct teams (dealing with network, environments, metrics, etc.) that themselves collaborate with or provide a service to other platform teams.  
_Location 1906_

> we should aim for a thinnest viable platform (TVP) and avoid letting the platform dominate the discourse. This drive to “simplify the developer’s life” (as Conway puts it) 20 and reduce cognitive load (see Chapter 3) is an essential aspect of a good platform. A good test for DevEx is how easy it is to onboard a new Developer to the platform.  
_Location 2007_

> <mark>ark>To help clarify the platform layers in use in your organization, draw the platform layers on a large diagram. This will help to explain to internal platform teams and to teams that use that platform exactly what the platform provides and what it depends on.</mark>  
_Location 2018_

> The users will come to depend on the reliability of the platform and will need an understanding of when new features will appear and when old features will be retired. The platform, therefore, needs a roadmap curated by product-management practitioners, possibly co-created but at least influenced by the needs of users (Dev teams). Members of the platform teams will engage with customers (Dev teams and others) regularly to understand what they need. Feature usage is tracked with metrics and used to shape conversations about prioritization. A platform is not just a collection of features that Dev teams happened to ask for at specific points in the past, but a holistic, well-crafted, consistent thing that takes into account the direction of technology change in the industry as a whole and the changing needs of the organization.  
_Location 2022_

> The most effective pattern for an architecture team is as a part-time enabling team (if one is needed at all). The team being part-time is important: it emphasizes that many decisions should be taken by implementing teams rather than left to the architecture team. Some organizations compose a virtual team from members of other teams. This virtual team meets regularly to discuss and evolve the architecture aspects of the systems. This is akin to the chapter or guild terminology used by Spotify. The architecture team should support the other teams, helping them to be as effective as possible, rather than imposing designs or technology choices on other teams.  
_Location 2114_

> A crucial role of a part-time, architecture-focused enabling team is to discover effective APIs between teams and shape the team-to-team interactions with Conway’s law in mind.  
_Location 2123_

**Chapter 6: Choose Team-First Boundaries**
> <mark>We need to take into account their cognitive capacity, their location, and their interest in the new services.</mark>  
_Location 2168_

**Fracture Planes**
_Location 2255_
* Business Domain Bounded Context
* Regulatory Compliance
* Change Cadence
* Team Location
* Risk
* Performance Isolation
* Technology
	* On splitting via technology types (i.e. front-end vs back-end): However, these common kinds of technology-driven splits typically introduce more constraints and reduce flow of work rather than improve it.
* User Personas

> The effort required to remove dependencies or coupling between features is compensated with a sharper focus on customers’ needs and experience using the system, which should result in higher customer satisfaction and improve the organization’s bottom  
_Location 2338_

### Part III - Evolving Team Interactions for Innovation and Rapid Delivery
> Part III, we deal with ways to evolve the organization design to provide powerful capabilities for innovation and rapid delivery in response to a quickly changing operating context.  
_Location 312_

#### Chapter 7: Team Interaction Modes
> <mark>When considering the relationship between any teams, a key decision is whether to collaborate with another team to achieve an objective or to treat the other team as providing a service</mark>  
_Location 2475_

**The Three Essential Team Interaction Modes**
* Collaboration: working closely together with another team
* X-as-a-Service: consuming or providing something with minimal collaboration
* Facilitating: helping (or being helped by) another team to clear impediments
_Location 2493_

> one team might use two different interaction modes for two different teams with which it works.  
_Location 2496_

> **Formalizing the ways in which teams should interact when building software systems helps to more easily assess the effectiveness of many aspects of software delivery by more explicitly defining interfaces between teams;**  
_Location 2508_

> Interaction modes should become team habits. By expecting and helping to achieve these kinds of team interactions, teams experience increased clarity of purpose, improved team engagement, and reduced frustration with other teams.  
_Location 2513_

**Collaboration: Driver of Innovation and Rapid Discovery but Boundary Blurring**
> The collaboration team mode is suitable where a high degree of adaptability or discovery is needed, particularly when exploring new technologies or techniques.  
_Location 2523_

**X-as-a-Service: Clear Responsibilities with Predictable Delivery but Needs Good Product Management**
> During later phases of systems development and periods where predictable delivery is needed (rather than discovery of new approaches), the X-as-a-Service model works best. By design, innovation across the boundary happens more slowly than with collaboration, precisely because X-as-a-Service has a nice, clean API that has defined the service well.  
_Location 2570_

> This means that for the X-as-a-Service model, there should be a high value gained from some teams being able to ignore low-level details of the service that they consume from another team, allowing them to move quickly without needing to be concerned with implementation details.  
_Location 2590_

> They must make the developer experience (DevEx) highly compelling. The service they provide should be straightforward to use, test, deploy, and/ or debug; and the documentation on how to use it should be clear, well-written, and up to date. Furthermore, the service they provide must be managed in a way that keeps it viable over time: requests for new features from consuming teams are considered but not built just because a team has asked for them.  
_Location 2597_

> Constraint: A team should expect to use the X-as-a-Service interaction with many other teams simultaneously, whether consuming or providing a service. Typical Uses: Stream-aligned teams and complicated-subsystem teams consuming Platform-as-a-Service from a platform team; stream-aligned teams and complicated-subsystem teams consuming a component or library as a service from a complicated-subsystem team.  
_Location 2611_

**Facilitating: Sense and Reduce Gaps in Capabilities**
> The facilitating team interaction mode is suited to situations where one or more teams would benefit from the active help of another team facilitating (or coaching) some aspect of their work. The facilitating interaction mode is the main operating mode of an enabling team (see Chapter 5) and provides support and capabilities to many other teams, helping to enhance the productivity and effectiveness of these teams.  
_Location 2617_

> Expectations should be set with coworkers that the interaction modes and team structures will need to change at least a little as the organization “senses” whether the boundaries chosen are in fact the best boundaries.  
_Location 2726_

> Precisely due to the forces behind Conway’s law, the existing software architecture will initially “push back” against the new team structures.  
_Location 2749_

> To help make the new organizational structure work—and to sense whether the new responsibility boundaries are actually correct—the reverse Conway maneuver should be used with temporary but explicit collaboration modes between the teams building the software, along with one or more enabling teams (and possibly other teams) acting in a facilitating mode. By using temporary, explicit collaboration across the new boundaries and by using a high degree of facilitating for the stream-aligned and complicated-subsystem teams, any problems with the new responsibility boundaries can be quickly identified, giving the team the opportunity to adjust the design earlier, before too much has been built.  
_Location 2750_

> Teams that “logically” own a higher-level component may need to work on the lower layer (platform) for a period of time in order to split out that code, especially if they wrote the too-coupled code in the first place.  
_Location 2758_

> Choose Team Interaction Modes to Reduce Uncertainty and Enhance Flow. Use the Collaboration Mode to Discover Viable X-as-a-Service Interactions  
_Location 2776_

#### Chapter 8: Evolve Team Structures with Organizational Sensing
> We need to design the design rules, not just the organization.

> <mark>Collaboration is expensive. Unnecessary collaboration is particularly expensive, especially as it can mask or hide deficiencies in underlying platforms or capabilities. Any ongoing collaboration activity must, therefore, be justified as valuable discovery, valuable capability building, or valuable deficiency-filling activity.</mark>  
_Location 2844_

> Organizations should aim to move from discovery activities to establish predictable delivery over time as new commodity services and platforms become available.  
_Location 2978_

> The organization must ask itself: “Are we trying to discover things? And how rapidly do we need to discover them?”  
_Location 2982_

**Trigger: Software Has Grown Too Large for One Team Symptoms**
* A startup company grows beyond fifteen people (Dunbar’s number).
* Other teams spend lots of time waiting on a single team to undertake changes.
* Changes to certain components or workflows in the system routinely get assigned to the same people, even when they’re already busy or away.
* Team members complain about lack of system documentation.
_Location 3043_

**Trigger: Delivery Cadence Is Becoming Slower Symptoms**
* Team members qualitatively feel it takes longer to release changes than it used to.
* Team velocity or throughput metrics show a clear downward variation compared to one year ago. (There is always some variation, so make sure it’s not accidental.)
* Team members complain that the delivery process used to be simpler, with fewer steps.
_Location 3059_

**Trigger: Multiple Business Services Rely On a Large Set of Underlying Services Symptoms**
* Stream-aligned teams have limited visibility of end-to-end flow within their service area.
* It becomes difficult to achieve a smooth and rapid flow of change due to the number and complexity of subsystem integrations.
* Attempts to “reuse” an existing set of services and subsystems becomes more and more challenging.
_Location 3077_

#### How to Get Started with Team Topologies
1. Start with the Team First, as an organization ask yourself: What does the team need in order to:
	* Act and operate as an effective team?
	* Own part of the software effectively?
	* Focus on meeting the needs of users?
	* Reduce unnecessary cognitive load?
	* Consume and provide software and information to other teams?
2.  Identify Suitable Streams of Change
Each organization needs to choose a set of change streams that act as “pipes” down which the most important changes flow. Exactly what is chosen for the streams depends on the nature of the organization, but some typical streams might be:
	* Citizen-oriented tasks for government online services: applying for a passport, paying taxes, or registering for a set of healthcare options (task-oriented streams).
	* Business banking products: online money management, automation of bank transactions, invoicing clients (role-oriented streams).
	* Online ticket purchasing: searching for tickets, purchasing tickets, managing “My Account” and refunds (activity streams).
	* Regional products: European market, North American market, Asian market, etc. (geographical streams).
	* Market segment: consumer, small and medium business, enterprise, large corporate (user-type streams).
3. Identify a Thinnest Viable Platform (TVP)
4. Identify Capability Gaps in Team Coaching, Mentoring, Service Management, and Documentation
No serious sports team would consider not employing coaches and trainers, and no serious organization should be without coaches and trainers either.
5. Share and Practice Different Interaction Modes and Explain Principles behind New Ways of Working
Emphasize the humanistic aspects of Team Topologies: the focus on the team, the explicit limits on cognitive load, the reduction in noise and interruptions due to team-fist office space, and a limit on free-for-all communications.
_Location 3315_
