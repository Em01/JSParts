/*

What is Node: Node is a Javascript runtime environment. It uses the v8 engine wrapped
in a c++ program which does not run in the environemnt. Instead it gives us capabilities to access
other additional modules such as the file system which can be more powerful. Chrome and node both use the
v8 engine but they provide different runtime environments.

Node is not a framework, its a runtime environment for executing javascript code.

Blocking/Synchronous architecture means that requests happen on individual threads.
When you run out of these threads you have to wait until more become available.

Non-Blocking/Asynchronous architecture means there is one thread but many requests
can happen at the same time. E.G
Event One fires to setup a database
Whilst Event one is being processed Event Two fires
Whilst Event two is being processed Event one sends a message that the database has been setup
The message is placed in the Event Queue which the thread is constantly listening to.
The thread reads the message and processes that event.

Node is not ideal for cpu intensive applications, use for data intensive or realtime apps.
*/
