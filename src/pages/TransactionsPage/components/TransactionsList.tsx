import React from 'react';
import {Transaction} from "../../../redux/transaction/types";
import styles from "../styles/TransactionsList.module.scss"
import TransactionCard from "./TransactionCard";
type TransactionsListProps = {
    transactions: Transaction[]
    selectedId: number | null
    onClick: (id: number) => void
}

const TransactionsList: React.FC<TransactionsListProps> = ({transactions, selectedId = null, onClick}) => {
    return (
        <div className={styles.transactions__list}>
            {
                transactions.map(transaction => <TransactionCard key={transaction.transaction_id}/>)
            }
        </div>
    );
};

export default TransactionsList;
