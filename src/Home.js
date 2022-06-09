import React from "react";
import { Navbar, Form, Button} from "react-bootstrap";
import GetNewUrl from "./scripts/GetNewUrl";


const Home = () => {

    const [serviceResponse, setServiceResponse] = React.useState('')

    const startUrlShortService = async () => {
        const userUrl = document.getElementById('urlInput').value;
        setServiceResponse(await GetNewUrl(userUrl))
    }

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <h1 style={{ color: "white", textAlign: "center" }}>Shrink</h1>
            </Navbar>
            <Form.Label htmlFor="urlInput">URL</Form.Label>
            <Form.Control
                type="text"
                id="urlInput"
                aria-describedby="urlTextBox"
            />
            <Button variant="primary" onClick={startUrlShortService}>Get New Url</Button>
            {serviceResponse}
        </div>
    );
};

export default Home;