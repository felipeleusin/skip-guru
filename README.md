# SkipTheDishes Hackathon

This project contains the code for the SkipTheDishes React hackathon project.

Scrolling for food in apps is becoming the new scrolling for series on Netflix, by providing a quiz-like interface we can help our customers to select dishes they like based on their preferences instead of going through huge lists of restaurants.

This is specially useful when you're ordering food for one or two persons.

## Tasks

You can use either NPM or Yarn to run the following tasks:

- start
  - Begins the development server
- build
  - Creates a production build in the /dist folder
- test
  - Runs the test suite
- test:watch
  - Runs the test suite in watch mode

## Technologies used

- React
- Redux
- Reselect
- Emotion (https://emotion.sh)
- Rebass (http://jxnblk.com/rebass)
- Jest / Enzyme

Emotion and Rebass were used for the UI components as they provide a base design system that we can expand on and allows us to build prototypes fast. Afterwards we can update the theme and all components update.

Jest and Enzyme were selected for testing.

## Code organization

The code is structured in the following pattern:

- /pages
  - Provides pages for the react-router. This pages are responsible for fetching data from the UI and are usually connected to a redux reducer
- /reducers
  - Each reducer gets it's own file or folder, depending on the complexity. The actions, selectors, and constants are colocated with the reducer to keep the code together
- /components
  - Contains shared components
