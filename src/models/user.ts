import { NewsLetterType } from "./newsLetterType";

export class User {
    constructor() {
        this.name = "";
        this.age = "";
        this.email = "";
        this.newsletter = NewsLetterType.Daily;
    }
    name: string;
    age: string;
    email: string;
    newsletter: NewsLetterType;
}