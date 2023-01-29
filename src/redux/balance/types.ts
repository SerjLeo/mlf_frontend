import { Currency, CurrencyLabel } from '../currency/types'

export type BalanceOfCurrency = {
    currency: Currency
    total: number
    currency_id: number
}

export type Balance = {
    id: number
    amount: number
    currency: CurrencyLabel
    currency_id: number
}

export type BalanceState = {
    totalBalances: BalanceOfCurrency[]
}

export enum BalanceActionTypes {
    GET_TOTAL_BALANCES = 'GET_TOTAL_BALANCES'
}

type GetTotalBalances = {
    type: BalanceActionTypes.GET_TOTAL_BALANCES
    payload: {
        balances: BalanceOfCurrency[]
    }
}

export type BalanceActions = GetTotalBalances