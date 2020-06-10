// Necessities and accessories for constructing our Redux store;
import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

// Individual reducers altogether under an alias;

//Make dummy reducer function here;
//The last output of the reducer function is the state after the action is called
//initially its just default case where state = 0;
function counterValue(state = 0, action){
    switch(action.type){
        default:
            return state;
    }
}
// Construct our Redux store;
//combine reducers takes an object, NOT A FUNCTION
const rootReducer = combineReducers({counterValue});
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(logger));
const store = createStore(rootReducer, middleware); // 2nd arg: middleware;

// Export our store by default, which will be provided to and injected within our entire application;
export default store;