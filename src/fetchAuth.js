import ErrorEnum from "./ErrorEnum";

function postUser({username, password}) {
    const fetchResponse = fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({'username' : username, 'password' : password})
    }).then((response) => {
        if (response.ok){
            if (response.status === 200) {
                return response.json();
            }
        } else if (response.status == 400) {
            return ErrorEnum.INVALID;
        } else {
            return ErrorEnum.ERROR;
        }
    }).then((value) => {
        return value;
    }).catch((error) => {
        console.log(error);
        return ErrorEnum.FAILURE
    });
    return fetchResponse;
}

export { postUser };