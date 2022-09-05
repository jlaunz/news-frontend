# News Frontend project


## Starting the application

```
$ yarn
$ yarn start
App will listen to port `3000`
```


## Starting the Testing

```
$ yarn test
```

## Overview
`Server Side Rendering`: Next.js is used for SSR.  
`UI Library`: Material UI is used for implementing part of the pages.  
`Testing`: A basic test is included for testing the filtering feature.  
`RichText Rendering`: A module is implemented in `util/richTextRenderer.ts` for displaying article contents.  


### Implemented frontend requirements
- Server Side Rendering pages using data fetched from backend API.
- Displaying articles as cards.
- Each card contains image, headline and intro.
- Intro displays only 80 characters.
- Mobile view is 1 column and desktop view is 3 columns.
- Filtering of articles by section.
- Sorting by date.
- Click card to display an individual article with unique URL.
- Basic Unit Test.
- Using TypeScript.
- Using EsLint.

**Note**: To check the filterig functionality and more endpoints, please start the server and visit `http://localhost:8000/api`


