# Visor-Chat
> A chat client serving as a gateway into the ultimate experience in financial advisory 

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
4. Point your browser to http://localhost:8000/webpack-dev-server/



## Getting Started
+ This repository is broken down into backend and front end repository
+ **Note**: Both the backend and front end client need to workneed to be running in order for the app to work

## AI Bot functionality
> After some time researching and testing out other simple NLP platforms. I chose to use wit.ai for it's community wide accepted practices and easy to use API. Based on what users want, and might typically ask, I would be able to program this bot to handle a wide breadth of questions and answers and also redirect messages to a company wide inbox.
+ Simple commands such as hi, hello, greeting are all picked up
+ Has a lot of potential to learn certain questions and commands, such as: 
  - When are taxes due? 
  - How do I obtain an 1099?

## To do 
**Frontend**

- [ ] Make chat client collapsable
- [ ] Implement a list of different rooms. A new 'room' should appear every time a client logs into the application. 
    - They should be able to view past conversations had with previous employees or chatbot


**Backend**
- [x] Incorporate Natural Language Processor to act as gateway into application
- [ ] Store users conversations for data persistence in a database
- [ ] Improve functionality of chat bot. Basic functionality works right now

## Architecture
![Architecture](/misc/architecture.png?raw=true "Optional Title")
