# Visor-Chat
> A chat client serving as a gateway into the ultimate experience in financial advisory 
View a high-level [architecture diagram](https://www.draw.io/#Haarboleda1%2FMessage-System%2Fmaster%2FMessaging-System.xml) here.
## Installation
> Note: Both need to be running in order for the app to work.

_install and configure api_
1. `$ git clone https://github.com/aarboleda1/Visor-Chat.git`
2. `$ cd ./Visor-Chat`
3. `$ cd ./chat-api` 
4. `$ npm install`
5. `$ npm run compile` compile resources into lib/app.js
6. `$ npm run dev` start server

_install and configure front-end client_
1. `$ cd ./chat-client`
2. `$ npm install`
3. `$ npm start`



## Getting Started
+ This repository is broken down into 2 a backend and front end repository
+ Both need to be running in order for the app to work
+ 


## To do 
**Frontend**

- [ ] Make chat client collapsable
- [ ] Implement a list of different rooms. A new 'room' should appear every time a client logs into the application. 
    - They should be able to view past conversations had with previous employees or chatbot

**Backend**
- [ ] Incorporate Natural Language Processor to act as gateway into application
