
async function postUser({username, password}) {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({'username' : username, 'password' : password})
    }).then(async (response) => {
        if (response.ok) {
            const data = await response.json()
            return data.accessToken
        } else {
            throw new Error("Invalid credentials");
        }
    }).catch((error) => {return error.message})
    return response
}

export { postUser };