import { API_BASE_URL } from "./app-config"

export function call(api, method, body) {

    const options = {
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        url: API_BASE_URL + api,
        method: method,
    };
    
    if(body) {
        options.body = JSON.stringify(body);
    }

    return fetch(options.url, options).then((response) => 
        response.json().then((json) => {
            if(!response.ok) {
                // response ok가 아니면 정상응답을 받은것이 아님
                return Promise.reject(json);
            }      
            return json;
        })
    );
}