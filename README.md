## Nuxt.js and Firestore Chat System
This is a simple chat system built with Nuxt.js and Firestore. It allows users to send and receive messages in real-time.

## Prerequisites
Before you begin, make sure you have the following installed:
```
Node.js
NPM or Yarn
Firebase CLI
```

You also need to create a Firebase project and enable Firestore. See the Firebase documentation for instructions on how to do this.

## Installation
Clone the repository:
```
https://github.com/jonasnoynayfullspeed/my-chat-app.git
```

Install the dependencies:
```
npm install firebase@9.0.2 @firebase/firestore@0.28.3 vuefire@latest
```

Start the development server:
```
npm run dev
```

Open your browser and go to http://localhost:3000. You should see the chat system.


## Build
To build the chat system to Firebase hosting, follow these steps:

Build the production version of the app:
```
npm run build
```

(Optional) deploy the app:
```
npm run deploy
```

This will deploy the app to Firebase hosting.

## It uses the following technologies:
- Nuxt.js
- Firestore
- Vue.js