# learn React with Redux

## npm start
## http://localhost:8080/

### functional component: is a function produce JSX

### class component: can aware itself when it is renderred

## State
### Each class based component has its own state object.
### Whenever a component's state changes, the component immediately re-renders.
### And also forces all its children to re-render as well.
### Before we use the state of a component, we need to initialize the state object.
### Each instance of class component has its own copy of state.
#### To init state: super(props); this.state = { k: v };

## In React, when user types, the state changes FIRST, THEN the view will change according to current state.

## Downward Dataflow: Only the most parent component is responsible for fetching data.