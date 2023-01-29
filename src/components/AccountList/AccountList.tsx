import React from 'react'
import { Account } from '@/redux/account/types'
import NoData from '@components/NoData/NoData'
import AccountLabel from '@components/AccountLabel/AccountLabel'
import { Button, IconButton } from '@mui/material'
import styles from './AccountList.module.scss'
import { Currency } from '@/redux/currency/types'

type AccountListProps = {
  accounts: Account[]
  isMoreAvailable: boolean
  isMoreLoading: boolean
  onLoadMore: () => void
  onAccountClick: (event: React.MouseEvent<HTMLElement>, acc: Account) => void
	selectedCurrency?: Currency | null
}
const AccountList: React.FC<AccountListProps> = ({
	accounts,
	onAccountClick,
	isMoreAvailable,
	onLoadMore,
	selectedCurrency = null,
	isMoreLoading
}) => {

	if(!accounts.length) return <NoData/>

	console.log(selectedCurrency)

	return (
		<div className={styles.accListWrap}>
			{
				accounts.map(acc => <AccountLabel
					key={acc.id}
					selectedCurrency={selectedCurrency}
					account={acc}
					onClick={e => onAccountClick(e, acc)}
				/>)
			}
			{ isMoreAvailable && <Button disabled={isMoreLoading} onClick={() => onLoadMore()}>More</Button>}
		</div>
	)
}

export default AccountList