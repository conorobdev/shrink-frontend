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
                <h1 style={{ color: "white", margin: "0 auto"}}>Shrink</h1>
            </Navbar>
            <Form.Label htmlFor="urlInput" style={{ marginTop: "1%" }}>URL</Form.Label>
            <Form.Control
                type="text"
                id="urlInput"
                aria-describedby="urlTextBox"
                style={{ width: "50%", margin: "0 auto"}}
            />
            <Button variant="primary" onClick={startUrlShortService} style={{ marginTop: "1%", marginBottom: "1%"}}>Get New Url</Button>
            {serviceResponse}
        </div>
    );
};

export default Home;