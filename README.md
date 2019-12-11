# Swaap

### You can find the deployed project at https://staging.swaap.co

## Contributors

### The contributors for Swaap.

**Bobby Hall**
[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)[ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)

**Tyler Quinn**
[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)[ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)

**Jonathan Picazo**
[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)[ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)

**Zachary Peasley**
[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)[ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)

**Jarvise Billups-Brown**
[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)[ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)

**Emily Arias**
[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)[ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)

**Marlon Raskin**
[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)[ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)

**Tyler Nishida**
[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)[ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)

**Michael Redig**
[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)[ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)

## Project Overview

#### Trello Board: 
https://trello.com/b/Jh8cS46t/conference-contacts

#### Product Canvas: 
https://www.notion.so/Conference-Contacts-1fa5dafff4964d9d99e07d98dadb8615

#### Design Files:
https://www.figma.com/file/CkvwWMzxcI4lI4udHm8QiH/Labs18_Conference-Contacts%2C-Emily%2CTylerr?node-id=877%3A72346

# Project Description

A way for people to gather, collect and stay in contact with people that you meet.

To make the social and connecting aspect of events effortless, seamless and fun to do. To give courage and ability to less outgoing people to connect and network more comfortably. To unify the social and personal networking aspect of events and put that in the hands of participants instead of vendors.

## Key Features

- Give users the ability to connect with each other     through the app.
- Get and Store contacts in a fast and simple way.
- The ability to message contacts.
- Find out where you met the contacts.

## Tech Stack

Front end built using:

- React
- Auth0
- Reach Router
- Apollo
- Tailwind css

Front end deployed to `Netlify` and built using:
### React

https://www.apollographql.com/

- ReactJS is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. It's used for handling view layer for web and mobile apps. React also allows us to create reusable UI components.

### Auth0 

https://auth0.com/

- Auth0 provides authentication and authorization as a service. We are here to give developers and companies the building blocks they need to secure their applications without having to become security experts.

### Reach Router 

https://reach.tech/router

- The structure of Reach Router is really simple. Routers select a child to render based on the child's path. You as the developer simply specify your desired slug (a slug is the part of a URL which identifies a page using human-readable keywords).

### Apollo 

https://www.apollographql.com/

- The Apollo platform is an implementation of GraphQL that can transfer data between the cloud (server) to the UI of your app. In fact, Apollo builds its environment in such a way that we can use it to handle GraphQL on the client as well as the server side of the application. 

### Tailwind css

https://tailwindcss.com/

- Tailwind is a collection of low-level utility classes. They can be used like lego bricks to build any kind of component. The collection covers the most important CSS properties, but it can be easily extended in a variety of ways. With Tailwind, customization isn’t pain in the neck anymore. The framework has great documentation, covering every class utility in detail and showing the ways it can be customized. All modern browsers, and IE11+, are supported.

## Extensions

Please install these VS Code extensions in order to run the application: 

**❗️Important: Requires VS Code 1.36 or newer**

- JavaScript and TypeScript Nightly

# Available Scripts 

in the project directory, you can run: 

### `npm start`

Runs the app in development mode. 
open http://localhost:3000 to view in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches test runner, and runs tests.

### `npm build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm eject`

Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# APIs

## Auth0 authentication API 

Auth0 provides authentication and authorization as a service.

https://auth0.com/

You can connect any application (written in any language or on any stack) to Auth0 and define the identity providers you want to use (how you want your users to log in).

## Environment Variables

In order for the app to function correctly, you must set up your own environment variables. There should be a .env file containing the following:

#### Variables:

REACT_APP_AUTH0_DOMAIN - 
   Domain at which the application is set accordingly with Auth0, for proper authentication.
   
REACT_APP_AUTH0_CLIENT_ID -
   Unique ID provided by Auth0 to be used with the applicaiton.
REACT_APP_APOLLO_URI -
   The location at which the application's backend server is located.
REACT_APP_CLOUDINARY_NAME -
   The name of the cloud, being used on Cloudinary.
REACT_APP_CLOUDINARY_PRESET -
   The preset of the cloud, being used on Cloudinary.
   


# Testing

## Cypress

We use cypress to for end to end tests on the frontend.

https://www.cypress.io/

Writing end-to-end tests takes a lot of different tools to work together. With Cypress you get multiple tools in one.

Cypress provides in browser end to end testing and works with any framework all in the browser.

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

## Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

## Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

For details on the IOS version of our project see https://github.com/Lambda-School-Labs/conference-contacts-ios

For details on the backend of our project see https://github.com/Lambda-School-Labs/conference-contacts-be
