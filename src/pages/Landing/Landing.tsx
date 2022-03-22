import React, {useEffect} from 'react';
import ApiService from "../../api/ApiService";

const Landing = () => {
    useEffect(() => {
        ApiService.apiRequest('/ping')
    }, [])

    return (
        <div>
            Here is Landing
        </div>
    );
};

export default Landing;
