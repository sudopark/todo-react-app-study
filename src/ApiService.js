import { API_BASE_URL } from "./app-config"

export function call(api, method, body) {

    const options = {
        headers: new Headers({
            "Content-Type": "application/json" 
        }),
        url: API_BASE_URL + api,
        method: method,
    };

    if(body) {
        options.body = JSON.stringify(body);
    }

    return fetch(options.url, options)
        .then((response) => {
            console.log("code => " + response.status, response.ok);
            if(!response.ok) {
                return Promise.reject(response);
            }
            return response.json();
        })
        .catch((error) => {
          console.log(error);
          if(error.status === 403) {
              window.location.href="/login";    // redirect to login   
          }
          return Promise.reject(error);
        });
}
