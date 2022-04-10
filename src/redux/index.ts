import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "./user"
import categoriesListReducer from "./categoriesList"
import categoryReducer from "./categoryPage"
import transactionReducer from "./transaction";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    user: userReducer,
    transaction: transactionReducer,
    categoriesList: categoriesListReducer,
    category: categoryReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
