- Use State
  // use state is used to create local state variable - Super powerful variable
  // never use a useState inside a condition
- Use Effect
  // if no dependency array => useEffect is called on every render
  // if the dependency array is empty = [] => useEffect is called on initial render (just once)
  // if the dependency array is [foo] => called everytime when [foo] is changed
  // for clean up return a function inside use Effect () => { // clear your subscriptions } // Acts like componentDidUnmount

- Use Router Error
  It is used to error while surfing to an invalid route. It is used to customize the error 

- 2 types of routing
  - Client Side Routing
    No network call takes place
  - Server Side Routing
    Network call takes place and then routes to the page

- React Class based Components
    In React, we write super(props) in the constructor of a class component to call the constructor of the parent class and pass the props to it. This is necessary because React components are essentially classes that extend the React.Component class.
    constructor -> render -> componentDidMount
    - componentDidMount --> DOM UPDATES IN SINGLE BATCH
       - componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
       - This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().
       - You may call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen.
       Use Case:
        To make API calls
    - Parent Child Class LifeCycle using componentDidMount
        Parent constructor -> Parent render -> Child constructor -> Child render -> Child componentDidMount ->  Parent componentDidMount 
- Custom Hooks
   Hooks are utility functions


- Higher order component
     It takes a component and returns a component 
         