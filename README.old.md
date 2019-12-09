# Swaap

You can find the deployed project at https://staging.swaap.co

## Contributors

The contributors for the Swaap App

|                                       [Student 1](https://github.com/)                                        |                                       [Student 2](https://github.com/)                                        |                                       [Student 3](https://github.com/)                                        |                                       [Student 4](https://github.com/)                                        |                                       [Student 5](https://github.com/)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/honda0306)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Mister-Corn)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/NandoTheessen)           |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/wvandolah)             |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) |

<br>
<br>

## Project Overview

### Trello Board: 
https://trello.com/b/Jh8cS46t/conference-contacts

### Product Canvas: 
https://www.notion.so/Conference-Contacts-1fa5dafff4964d9d99e07d98dadb8615

### Design Files:
https://www.figma.com/file/CkvwWMzxcI4lI4udHm8QiH/Labs18_Conference-Contacts%2C-Emily%2CTylerr?node-id=877%3A72346

## Project Description

A way for people to gather, collect and stay in contact with people that you meet.

To make the social and connecting aspect of events effortless, seamless and fun to do. To give courage and ability to less outgoing people to connect and network more comfortably. To unify the social and personal networking aspect of events and put that in the hands of participants instead of vendors.

### Key Features

- Give users the ability to connect with each other     through the app.
- Get and Store contacts in a fast and simple way.
- The ability to message contacts.
- Find out where you met the contacts.

### Tech Stack

Front end built using:

- React
- Auth0
- Reach Router
- Apollo
- Graphql
- Tailwind css

Front end deployed to `Netlify` and built using: 

### Apollo 

- The Apollo platform is an implementation of GraphQL that can transfer data between the cloud (server) to the UI of your app. In fact, Apollo builds its environment in such a way that we can use it to handle GraphQL on the client as well as the server side of the application. 

### Prisma 

- Prisma is the perfect tool for building GraphQL servers. The Prisma client is compatible with the Apollo ecosystem, has default support for GraphQL subscriptions and Relay-style pagination, provides end-to-end type safety and comes with a built-in dataloader to solve the N+1 problem.

## APIs

### Auth0 authentication API 

Auth0 provides authentication and authorization as a service.

You can connect any application (written in any language or on any stack) to Auth0 and define the identity providers you want to use (how you want your users to log in).

### Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

#### Variables:

- REACT_APP_APOLLO_URI="This is the backend url"

## Testing

### Cypress

We use cypress to for end to end tests on the frontend.

Writing end-to-end tests takes a lot of different tools to work together. With Cypress you get multiple tools in one.

Cypress provides in browser end to end testing and works with any framework all in the browser.

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

### Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

For details on the IOS version of our project see https://github.com/Lambda-School-Labs/conference-contacts-ios

For details on the backend of our project see https://github.com/Lambda-School-Labs/conference-contacts-be
