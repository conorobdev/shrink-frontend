import axios from "axios"

const GetNewUrl = async (url) => {
    let encodedUrl = encodeURI(url);

    return new Promise(((resolve) => {
        axios.post('http://localhost:8080/store', {
            userUrl: encodedUrl
        }).then((response) => {
            resolve(<p>Success your new url is http://localhost:3000/sk/{response.data}</p>)
        });
    }))
};

export default GetNewUrl;