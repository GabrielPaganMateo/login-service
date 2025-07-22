
async function getUser(auth) {
    try {
        const response = await fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + auth,
            }
        });
        const user = await response.json();
        return user;
    } catch (error) {
        console.log(error)
    }
}

export default getUser;