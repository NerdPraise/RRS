# RRS Assignment

This project contains two urls indicating the two pages requested for.
1. `/article` for article creation
2. `/results` for the results page

### Requirements:
```
node >= v21.5.0
npm >= 10.2.5
```

### How to run project locally

1. Clone project
2. Install all the dependencies `npm i`
3. Run `npm run dev` to start development server
4. Go to ` http://localhost:5173/` to access page
   
#### Project Composition

The codebase is split by modules
1. components -> contains all reusable components and non-contanerised objects
2. pages -> contains all containerised objects. Refers to the view users access.
3. tests -> contains all test cases by pages
   
NB: It is a small project, so I omitted having a distinct API/util file.


#### Test
1. Run `npm run test`
