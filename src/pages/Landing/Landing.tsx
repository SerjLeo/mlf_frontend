import React from 'react';
import {useSelector} from "react-redux";

const Landing = () => {

    const counter = useSelector((state: any) => state.user.counter)

    return (
        <div>
            Here is Landing
            {counter}
        </div>
    );
};

export default Landing;
