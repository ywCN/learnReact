# learn React with Redux

## npm start
## http://localhost:8080/


## Components
- functional component: is a function produce JSX
- class component: can aware itself when it is renderred

## State
- Each class based component has its own state object.
- Whenever a component's state changes, the component immediately re-renders.
- And also forces all its children to re-render as well.
- Before we use the state of a component, we need to initialize the state object.
- Each instance of class component has its own copy of state.
  - To init state: super(props); this.state = { k: v };
- if we do not need a state, we do the plain functional component.
  - if you don't need to really mess with state or the component lifecycle, and your component is more display-related. It's nicer and more concise to read when you can just export a functional component, rather than writing out a full class component.

## In React, when user types, the state changes FIRST, THEN the view will change according to current state. 
- During this process, no instance of class (objects) are created, so the conctructor will be executed upon creation of object.

## Downward Dataflow: Only the most parent component is responsible for fetching data.








##### I got the search result in this version!!!!