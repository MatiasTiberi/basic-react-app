import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import axios from 'axios'

export default function Familia() {
    let match = useRouteMatch();

    const [apiData, setApiData] = useState('');

    useEffect(() => {
        axios.get(match.path)
            .then(function (response) {
                console.log(response.data);
                setApiData(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [match])    

    return (
        <div>
            <h1>Familia</h1>
            {apiData}
        </div>
    )
}
