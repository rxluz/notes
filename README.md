## Overview

This is a PWA React application built with Create React App, Hooks, Redux. Follows [Airbnb's Javascript style guide](https://github.com/airbnb/javascript).

Heavily inspired from [Egghead.io - How to Write an Open Source JavaScript Library](https://egghead.io/courses/how-to-write-an-open-source-javascript-library).

## Project resources

[List of presentational components](https://rxluz.github.io/notes/storybook/?path=/story/card--card) <br />
[Ideas](https://rxluz.github.io/notes/storybook/?path=/story/card--card) <br />
[Inspiration board](https://rxluz.github.io/notes/storybook/?path=/story/card--card) <br />
[Mockups](https://rxluz.github.io/notes/storybook/?path=/story/card--card) <br />

## Main features and tools

| Item                   | Description                                                                                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Modern JS              | Compatible with ES6+                                                                                                                                                                                                            |
| Code Linting           | JavaScript code linting is done using ESLint - a pluggable linter tool for identifying and reporting on patterns in JavaScript. Uses ESLint with eslint-config-airbnb, which tries to follow the Airbnb JavaScript style guide. |
| Jest                   | Library test                                                                                                                                                                                                                    |
| React                  | Uses react with hooks                                                                                                                                                                                                           |
| Redux                  | Uses redux connected with react and redux-thunk, also uses redux persist to save the user data                                                                                                                                  |
| PWA                    | This application could be used offline and installed both in desktop and mobile                                                                                                                                                 |
| SASS                   | CSS created using SASS following the BEM Methodology                                                                                                                                                                            |
| Code spliting          | Automatic code minify and spliting                                                                                                                                                                                              |
| Storybook              | List all presentational components                                                                                                                                                                                              |
| Accessibility          | Application uses keyboard shortcuts to allow a better navigation                                                                                                                                                                |
| Dark mode              | Application automatic detects when the browser is in dark mode and apply it to the layout                                                                                                                                       |
| Multi-language support | Allow to add new languages using PoEdit files                                                                                                                                                                                   |
| Atomic commits         | Commits following the angular commit message conventions                                                                                                                                                                        |
| Prettier               | Automatic code formatting                                                                                                                                                                                                       |

## Shortcuts

| shortcut         | action                           |
| ---------------- | -------------------------------- |
| alt / option + n | create a new note                |
| alt / option + p | settings                         |
| alt / option + h | help page                        |
| alt / option + s | search note                      |
| alt / option + a | list all notes                   |
| shift + enter    | save this note and add a new one |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run translation:extract`

Extracts all the translations strings from js files and put them in a poedit (.pot) template file. [Read more](https://medium.com/front-end-weekly/3-improving-the-translations-in-your-code-dabdd1356679).

### `npm run translation:import`

Import all the translations available from poedit (.mo) translations file

### Deployment

### `npm run deploy`

Publish the static files in gh-pages branch, also publishes the storybook in gh-page, it's available in the /storybook page. [Example](https://notes.rxluz.dev/storybook).

### Acknowledgments

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />
Illustrations by [Ivan Haidutski](https://dribbble.com/Ivan_Haidutski).<br />
[Google Fonts](https://fonts.google.com/).<br />
[Favicon.io](https://favicon.io/favicon-generator/).<br />
[Github pages](https://pages.github.com/).<br />
[React](https://reactjs.org/).<br />
[Redux](https://redux.js.org/).<br />
[React-Redux](https://react-redux.js.org/).<br />
[Redux Thunk](https://github.com/reduxjs/redux-thunk).<br />
[Redux Router](https://reacttraining.com/react-router/web/guides/quick-start).<br />
[React tippy](https://www.npmjs.com/package/react-tippy).<br />
[Redux i18n](https://github.com/APSL/redux-i18n).<br />
[React icons](https://react-icons.github.io/).<br />
[Redux persist](https://github.com/rt2zz/redux-persist).<br />
[Storybook](https://storybook.js.org/).<br />
[BEM CSS](http://getbem.com/introduction/).<br />

## Known technical debts

- Review the BEM classes names [Know more](https://seesparkbox.com/foundry/bem_by_example)
- Improve the tests quality
- Remove useless css classes
- Allow custom icons in IconTextSwitch
- Improve iconTextSwitch accessibility
- Improve colourSwitch accessibility
- Fix wording errors
- Fix broken tests
- Remove double components names in sass
- Improve HTML semantic
- [Stop using import in SASS](https://github.com/sass/sass/blob/master/accepted/module-system.md#timeline)
- Create unit tests in utils functions
- Use the empty function util
- Stop using array key as react key elements
- Chip chipdisplay class name
- rename the no-javascript tag
- create a feature table in readme
- create tests in stateless interfaces
- replace the translation system to a new one that don't use the old context api
- rename interfaces to pages
- Organize the imports order (absolute imports first)
- Start using proptypes in interfaces
- Improve the search results (better string filter
- Highlight the search terms
- Publish the shortcuts
- Publish to github
- Fix storybook errors OK
- Check layout mobile OK
- Check texts in small screens
- Fix the dark mode checkbox
- Return 404 in edit mode
- On delete return to main screen OK
- Fix the remove in edit mode OK
- On close in add mode delete the note in add mode OK
- Dont display the drafts in the main list OK
- Display the pinned notes first OK
- Don't display shortcuts in mobile mode OK
- Remove fist clear button in mobile mode OK
- Improve the mobile padding and alignment OK
- Change the float button colour OK
- Make the shortcuts work!
- Make the settings add new note by default works
- Create a portuguese version and a switcher?
- Attach the docs created
- Add the search signal when the search is active
- Check if possible embebed images
- Verify what happens when the user add many tags
- The previous tags are displaying in new notes
- Create note undo?
- Handle with invalid notes in edit mode
