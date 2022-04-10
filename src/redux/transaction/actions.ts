import {Dispatch} from "redux";
import {TransactionsActions} from "./types";
import ApiService from "../../api/ApiService";

export const getTransactionsById = (id: number) => async (dispatch: Dispatch<TransactionsActions>) => {

}

export const createTransaction = (form: any) => async (dispatch: Dispatch<TransactionsActions>) => {
    // dispatch({type: CategoryActionTypes.GET_CATEGORY})
    // const {data, errors} = await ApiService.apiRequest(`/category`, 'POST', form)
    // if(errors) {
    //     dispatch({type: CategoryActionTypes.CATEGORY_ERROR, payload: { error: errors }})
    //     return
    // }
    // dispatch({type: CategoryActionTypes.CATEGORY_SUCCESS, payload: { category: data }})
}

export const updateTransaction = (id: number, form: any) => async (dispatch: Dispatch<TransactionsActions>) => {

}
