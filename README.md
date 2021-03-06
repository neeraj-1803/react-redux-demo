# React Redux Simple Implementation.

### `npx create-react-app .`

### `npm i redux react-redux`

## Redux in a nutshell:

Instead of changing state inside each component we have a global store.
Instead of modifying the states directly inside the component, we import the actions and dispatch the actions with payload(data) if any required.
We use useSelectors to select the reducers from the allReducer or rootReducer.
We use useDispatch to dispatch the action to the reducer function to change the state.
We use createStore to create a common store using combinedReducers
We use combinedReducers to combine the different reducers and give them a key so it can be called using that.
We have a Provider tag that takes in the store and wraps the entire components inside React Render.

Global Store --> All actions are stored.

Actions --> name/ identifier, describe what we want to do. for a function that will lead to change in state, 
doesn't have to be real function name, 
SO for example, in a increment counter, INCREMENT could be the action. It is a simple function that returns an object.

Reducer --> Describes how your action transforms the state to next state. When the above action is called, this will check which state to modify.
Mostly it is a switch based on the action name. createStore()

Dispatch --> To call the action and send it to reducer, so it checks and modifies the required state.
