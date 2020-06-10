// Necessities and accessories for constructing our Redux store;
import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

// Individual reducers altogether under an alias;
import * as reducers from "../reducers"

// Construct our Redux store;
//combine reducers takes an object, NOT A FUNCTION, it takes a key and a value, can look like [can name it anything]key->counterValue:counterValue <-value
const rootReducer = combineReducers({reducers});
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(logger));
const store = createStore(rootReducer, middleware); // 2nd arg: middleware;

// Export our store by default, which will be provided to and injected within our entire application;
export default store;