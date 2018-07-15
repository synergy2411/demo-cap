import { User } from "../model/user";

export const USER_DATA : User[] = [{
        firstName : "Bill",
        lastName : "Gates",
        income : 50000,
        dob : new Date("Dec 21, 1964"),
        isWorking : true,
        company : "Microsoft",
        image : "assets/images/bill.jpg",
        votes : 120
},{
    firstName : "Steve",
    lastName : "Jobs",
    income : 0,
    dob : new Date("Jan 2, 1964"),
    isWorking : false,
    company : "Apple",
    image : "assets/images/steve.png",
    votes : 180
},{
    firstName : "Tim B.",
    lastName : "Lee",
    income : 40000,
    dob : new Date("Aug 23, 1964"),
    isWorking : true,
    company : "World Wide Web",
    image : "assets/images/tim.jpg",
    votes : 200
}]