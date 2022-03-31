import React from 'react';
import {Link, Outlet} from "react-router-dom";

const CategoriesList = () => {
    return (
        <div>
            List
            <Link to='1'>to 1</Link>
            <Outlet/>
        </div>
    );
};

export default CategoriesList;
