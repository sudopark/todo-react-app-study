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


export function signin(userDTO) {
    return call("/auth/signin", "POST", userDTO)
    .then((response) => {
        console.log("signin token => " + response.token);
        // 403에러시에 로그인화면 라우팅은 공통로직이라치고 여기서했지만 성공했을때 라우팅하는것 처리도 여기가 맞나??
        if(response.token) {
            // token이 존재하는 경우 todo 화면으로 이동
            window.location.href="/";
        }
    });
}