import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

let store = createStore(rootReducer);

window.st = store;
export default store;