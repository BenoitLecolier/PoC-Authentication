PoC-Authentication
==================


Startup web application with simple setup to test different kinds of authentication strategy.

**Context:** Backbone/Marionette application using a RoR Rest API

**Requirements:**
- login action returns a token
- token must be sent in each API request
    
**Use cases:**
- Public page is the application default page
- Public page must be always available
- Private page is only available to authenticated user

For now the login form raise a user:signin event wich is handled, for now, in the login_app.js.
For the moment the form content is only loged in the console, and the authentication and authorization must be implemented
