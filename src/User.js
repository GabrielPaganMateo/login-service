
class User {

    firstName;
    lastName;
    image;
    contact;

    constructor(response) {
        this.firstName = response.firstName;
        this.lastName = response.lastName;
        this.image = response.image;
        this.contact = {"phone" : response.phone, "email" : response.email, "address" : response.address}
    }
}

export default User;