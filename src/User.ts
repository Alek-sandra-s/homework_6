export  class User {
    name: string;
    surname: string;
    phoneNumber: string;
    address: string;
    consentGiven: boolean | undefined;

    constructor(name: string, surname: string, phoneNumber: string, address: string, consentGiven?: boolean) {
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.consentGiven = consentGiven;

    }
}