import { IUser } from './user.interface';

export const USER_DATA : IUser[]  = [{
  firstName: "Bill",
  lastName: "Gates",
  dob: new Date("Dec 21, 1964"),
  income: 50000,
  isWorking: true,
  company: "Microsoft",
  votes: 120,
  image: "assets/images/bill.jpg"
},{
  firstName: "Steve",
  lastName: "Jobs",
  dob: new Date("Aug 2, 1964"),
  income: 0,
  isWorking: false,
  company: "Apple",
  votes: 190,
  image: "assets/images/steve.png"
},{
  firstName: "Tim B.",
  lastName: "Lee",
  dob: new Date("Dec 21, 1964"),
  income: 30000,
  isWorking: true,
  company: "World Wide Web",
  votes: 110,
  image: "assets/images/tim.jpg"
}]
