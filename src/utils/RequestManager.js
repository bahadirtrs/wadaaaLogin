import { BASE_URL } from "./constants"
const TIMEOUT_IN_MS = 18000;

const RequestManager = async options => {
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(reject, TIMEOUT_IN_MS, 'timeout')
    });
    
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    
    if (options.header == 'form') {
        myHeaders.append("Content-Type", "multipart/form-data");
    } else {
        myHeaders.append("Content-Type", "application/json");
    }

    var requestOptions = {
        method: options.method,
        body:options.body,
        headers: myHeaders,
    };
    var statusCode = null;

    var fetchPromise = new Promise((resolve, reject) => {
		fetch(BASE_URL + options.url, requestOptions)
            .then(response => {
                statusCode = response.status;
                return response.json();
            })
        .then((res) => {resolve(res)})
        .catch((err) => {reject(err)})
    });

    Promise.race([ fetchPromise, timeoutPromise ])
    .then(result => {options.response(result, statusCode)})
    .catch(error => {options.response(error, 408)})
}



export default RequestManager;