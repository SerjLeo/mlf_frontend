import { Balance } from '../balance/types'

export type Account = {
    id: number
    name: string
    balances: Balance[]
    created_at: string
    updated_at: string

}

export type AccountState = {
    selectedAccount: Account | null
    accounts: Account[]
    page: number
    loading: boolean
    finishLoading: boolean
}

export enum AccountActionTypes {
    ACCOUNT_LIST_LOADING = 'ACCOUNT_LIST_LOADING',
    GET_ACCOUNT_LIST = 'GET_ACCOUNT_LIST',
    CLEAR_ACCOUNT_LIST = 'CLEAR_ACCOUNT_LIST',
    GET_ACCOUNT = 'GET_ACCOUNT'
}

type AccountsLoading = {
    type: AccountActionTypes.ACCOUNT_LIST_LOADING
}

type AccountsListClear = {
    type: AccountActionTypes.CLEAR_ACCOUNT_LIST
}

type GetAccount = {
    type: AccountActionTypes.GET_ACCOUNT
    payload: {
        account: Account
    }
}

type GetAccountList = {
    type: AccountActionTypes.GET_ACCOUNT_LIST
    payload: {
        accounts: Account[]
        page: number
        isFinished: boolean
    }
}



export type AccountActions =
  AccountsLoading |
  AccountsListClear |
  GetAccount |
  GetAccountList