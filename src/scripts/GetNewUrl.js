import axios from "axios"

const GetNewUrl = async (url) => {
    let encodedUrl = encodeURI(url);
    const Url = "http://localhost:3000/sk/";
    return new Promise(((resolve) => {
        axios.post('http://localhost:8080/store', {
            userUrl: encodedUrl
        }).then((response) => {
            resolve(<p>Success your new url is <a href={Url + response.data}>http://localhost:3000/sk/{response.data}</a></p>)
        });
    }))
};

export default GetNewUrl;