![](https://img.shields.io/badge/Microverse-blueviolet)

# Yuriy Chamkoriyski Book-store project

> React & Redux app

![screenshot](./src/bookstore.png)

## Description

This project will lay foundations for my Bookstore website. I will create a React and Redux app. I will structure my files using the "feature folder" approach. I will also set up routing using React Router.

## Requirements:

### Phase 1, initialize project with components
- [x] Initialize React app.
- [x] Add React Redux (`npm install react-redux`).
- [x] Structure your application files using a "feature folder" approach and use the ducks pattern for your Redux files. Your files/folder structure could look like this:<br />
...<br />
/src<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---/components<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---/redux<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--- /books<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| books.js<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--- /categories<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| categories.js<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| configureStore.js<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| index.js<br />
- [x] The building blocks of your app should be set as re-usable components.
- [x] Add [React Router](https://v5.reactrouter.com/web/guides/quick-start) and set two `<Route>`s and `<Link>`s for the app's navigation:
  - [x] Books - the default view
    - [x] Should display the list of books (empty at this point but it should be ready for the data) with the Remove button (no functionality yet).
    - [x] Should have a form for adding a book (no functionality yet).
  - [x] Categories
    - [x] Should display "Under construction" text only.
- [x] Styling is not required at this point.

### Phase 2, create and remove books
- [x] Configuring the Redux Store
- [x] Write book's actions and reducer
- [x] In the React component responsible for adding new books set the data inputs in the local React state (set title and author - NOTE: categories and comments are NOT part of this step). Once your new book object is ready to be submitted to Redux store, dispatch a corresponding action.
- [x] In the React component responsible for removing books - implement that event by dispatching a corresponding action.
- [x] Use the redux-logger to check if your application is working correctly - Open your browser's console and look for the logger messages. Upon every action dispatch, the logger will print:
  - [x] prev state - the state of the whole Redux store before the current action was dispatched.
  - [x] action - the action object that is being dispatched.
  - [x] next state - the state of the Redux store after the current action was dispatched.

### Phase 3, connect to API
- [x] Read the [Bookstore API documentation](https://www.notion.so/Bookstore-API-51ea269061f849118c65c0a53e88a739) to learn how to use the API.
- [x] Refactor your add book and remove book features to persist your changes in the server.
  - [x] You should refactor the redux code of your application using middleware to make async requests to the API.
  - [x] Don't do the changes using only React state.
- [x] Add book and remove book should work in the same way after the refactor.
- [x] No styling is required.

### Phase 4, styling
- [x] You will find all the details of the Bookstore design in [Zeplin](https://app.zeplin.io/project/5b35a9e13227086040f8eb75/screen/5b695e29bb8c844f118f9378).
- [x] Login to Zeplin (hint: you will find the credentials in the [sneak peek](https://github.com/microverseinc/curriculum-react-redux/blob/main/bookstore/sneak_peek.md) of the project)
- [x] Open the project Bookstore CMS.
- [x] Use the information detailed in Zeplin to style the website.
- [x] Your final design should match Zeplin's design.

## Built With

- Major languages: Javascript
- Frameworks: React.js
- Technologies used: Redux, Babel, Jest, webpack
- Tested with: - ESLint (JavaScript linting), Stylelint (style linting)

## Live Demo

- No deployment yet.

### Prerequisites

- Internet connection and browser
- A text editor(preferably Visual Studio Code)
- Browser

### Setup

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

### Usage

- Clone the repository using `git clone https://github.com/Hombre2014/Book-store`
- Change directory into the project folder: `cd book-store`
- Run `npm install`
- Run `npm start`
- A new browser will open automatically with application loaded automatically on port 3000

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Author

👤 **Yuriy Chamkoriyski**

- GitHub: [@Hombre2014](https://github.com/Hombre2014)
- Twitter: [@Chamkoriyski](https://twitter.com/Chamkoriyski)
- LinkedIn: [axebit](https://linkedin.com/in/axebit)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Hombre2014/math-magicians/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments


## 📝 License

This project is [MIT](./license.md) licensed.