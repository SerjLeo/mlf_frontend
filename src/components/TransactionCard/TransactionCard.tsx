import React from 'react';
import styles from "./TransactionCard.module.scss"
import {Transaction} from "../../redux/transaction/types";

type TransactionCardProps = {
    transaction: Transaction
}

const TransactionCard: React.FC<TransactionCardProps> = ({transaction}) => {
    return (
        <div className={styles.transaction_card__wrap}>
            <div>{transaction.amount}</div>
            <div>{transaction.description}</div>
        </div>
    );
};

export default TransactionCard;
