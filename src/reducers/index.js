//Central export station for all of our reducers functions;
//these will be passed to combineReducers()
//Name in the file will be keys in Redux store

/*

Redux store will look like this:
{
    counterValue: whateverFunctionReducerYouGrabbedFrom
}
*/
export{default as counterValue} from "../store/utilities/counterValue"