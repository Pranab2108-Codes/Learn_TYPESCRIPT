type Employee = {

  name: string;
  startDate: Date;

};

interface Manager {

  name: string;
  department: string;

}

type TechLead = Employee & Manager;     /* Here we can say this type can also hold multiple data type, means it can hold type, interface and ...etc as data type. */


const t: TechLead = {                   /* So as per intersection here the t should contains all the data that has been mentioned in both Employee and in Manager, even if any one data get miss then it will throw an error unlike union. */

  name: "Pranab",
  startDate: new Date(),
  department: "Software Engineering"

}
console.log(t);