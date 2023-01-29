import React, { useState } from 'react'
import { Autocomplete, ClickAwayListener, Popper, TextField } from '@mui/material'
import AccountLabel from '@components/AccountLabel/AccountLabel'
import { Account } from '@/redux/account/types'
import AccountList from '@components/AccountList/AccountList'
import styles from './AccountSelect.module.scss'
import { Currency } from '@/redux/currency/types'


type AccountSelectProps = {
  accounts: Account[]
  account: Account,
	selectedCurrency?: Currency | null
  onAccountSelect: (acc: Account) => void
}
const AccountSelect: React.FC<AccountSelectProps> = ({
	accounts,
	account,
	selectedCurrency = null,
	onAccountSelect
}) => {

	const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null)
	const [ value, setValue ] = useState<Account>(account)
	const [ pendingValue, setPendingValue ] = useState<Account>(account)

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setPendingValue(value)
		setAnchorEl(event.currentTarget)
	}

	const selectAccount = (event: React.MouseEvent<HTMLElement>, acc: Account) => {
		onAccountSelect(acc)
		handleClose()
	}
	const handleClose = () => {
		setValue(pendingValue)
		if (anchorEl) {
			anchorEl.focus()
		}
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)

	return (
		<div>
			<AccountLabel account={account} selectedCurrency={selectedCurrency} onClick={handleClick}/>
			<Popper open={open} anchorEl={anchorEl} placement="bottom-start" className={styles.poper}>
				<ClickAwayListener onClickAway={handleClose}>
					<div>
						<AccountList
							selectedCurrency={selectedCurrency}
							accounts={accounts}
							onAccountClick={selectAccount}
							onLoadMore={() => {}}
							isMoreAvailable={false}
							isMoreLoading={false}
						/>
					</div>
				</ClickAwayListener>
				{/*<Autocomplete*/}
				{/*	renderInput={params => <TextField {...params} />}*/}
				{/*	size="small"*/}
				{/*	disableClearable*/}
				{/*	options={accounts}*/}
				{/*	getOptionLabel={(option) => option.name}*/}
				{/*/>*/}
			</Popper>

		</div>
	)
}

export default AccountSelect

