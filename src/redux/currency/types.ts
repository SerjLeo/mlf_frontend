export type CurrencyLabel = '$'| '€' | '₺' | '₽'

export type Currency = {
  id: number
  name: CurrencyLabel
}

export type CurrencyState = {
  currencies: Currency[]
  loading: boolean
}

export enum CurrencyActionTypes {
  GET_CURRENCY_LIST = 'GET_CURRENCY_LIST',
  CURRENCY_LOADING = 'CURRENCY_LOADING'
}

type GetCurrencies = {
  type: CurrencyActionTypes.GET_CURRENCY_LIST
  payload: { currencies: Currency[] }
}

type CurrencyLoading = {
  type: CurrencyActionTypes.CURRENCY_LOADING
}

export type CurrencyActions = GetCurrencies | CurrencyLoading