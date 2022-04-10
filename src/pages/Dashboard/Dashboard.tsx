import React from 'react';
import {Link} from "react-router-dom";
import CreateTransactionForm from "../../components/CrateTransactionForm/CreateTransactionForm";

const Dashboard = () => {
    const handleTransactionCreation = (form: unknown) => {
        console.log(form)
    }
    return (
        <div>
            <h2>Dashboard</h2>
            <div>
                <Link to='/categories'>1232131</Link>
            </div>

            <div>
                <CreateTransactionForm onTransactionCreation={handleTransactionCreation}/>
            </div>
        </div>
    );
};

export default Dashboard;
