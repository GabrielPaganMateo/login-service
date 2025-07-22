
class User {

    firstName;
    lastName;
    image;

    constructor(response) {
        this.firstName = response.firstName;
        this.lastName = response.lastName;
        this.image = response.image;
    }
}

export default User;