import React from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const Redirect = () => {
    let objectId = useParams();
    let requestUrl = 'http://localhost:8080/geturl/' + objectId.id;
    axios.get(requestUrl).then((response) => {
        window.location.assign(response.data);
    });

    return(
        <p>Redirecting</p>
    )
};

export default Redirect;