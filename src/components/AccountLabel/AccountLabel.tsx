import React, { useEffect, useState } from 'react'
import { Account } from '@/redux/account/types'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import styles from './AccountLabel.module.scss'
import PriceSlider from '@components/PriceSlider/PriceSlider'
import { Currency } from '@/redux/currency/types'
import { Balance } from '@/redux/balance/types'
import currency from '@/redux/currency'

type AccountProps = {
	account: Account
	onClick: (event: React.MouseEvent<HTMLElement>) => void
	selectedCurrency?: Currency | null
}

const AccountLabel: React.FC<AccountProps> = ({ account, onClick, selectedCurrency = null }) => {

	if(!account) return null

	const balanceFactory = () => {
		if(selectedCurrency) {
			const exactBalance = account.balances.find(bal => bal.currency_id === selectedCurrency.id)
			return [ exactBalance || {
				amount: 0,
				currency: selectedCurrency.name,
				currency_id: selectedCurrency.id,
				id: 0
			} ]
		}
		return [ ...account.balances ]
	}

	const [ labelBalances, setLabelBalances ] = useState<Balance[]>(balanceFactory)

	useEffect(() => {
		setLabelBalances(balanceFactory())
	}, [ selectedCurrency ])

	return (
		<div onClick={onClick} className={styles.labelWrap}>
			<div className={styles.labelHalo}></div>
			<CreditCardIcon fontSize="large" className={styles.labelIcon}/>
			<div className={styles.content}>
				<div className={styles.title}>{account.name}</div>
				<PriceSlider
					itemClassName={styles.amount}
					height={16}
					slides={labelBalances.map(balance => `${balance.amount} ${balance.currency}`)}
				/>
			</div>
		</div>
	)
}

export default AccountLabel