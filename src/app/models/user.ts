
export class User {

    constructor(
        public name: string,
        public email: string,
        public passwordHash: string,
        public passwordSalt: string,
        public age: string,
        public sex: string,
        public phoneNumber: string,
        public role: string,
    ){ }    
}