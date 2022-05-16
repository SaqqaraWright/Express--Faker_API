const express = require("express");//import express so that I can use express features
const { faker } = require('@faker-js/faker'); //import faker library so we can use it to generate fake random date
const app = express();//create my app variable which is an instance of express
const port = 8000; //this specifies what port my api will run in





//create my api endpoints here
// app.get("/api/hello", (req, res)=>{
//     res.json({msg:"Hey World!"});
// })...This was just for testing purposes to make sure that everything was functioning properly before coding.

let users = []; //this allows me to push the users into an empty array

class User{
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.phoneNumber();
        this.password = faker.internet.password()
        // this.companies=[] //to store companies into user class, this was used for the many to many relationship join commented out below
        this.id = users.length
        users.push(this)
    }
}

let companies = []; //this allows me to push the companies into an empty array

class Company{
    constructor(){
        this.id = companies.length
        companies.push(this)
        this.name = faker.company.companyName()
        this.address = {
            streetAddress: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
        // this.users=[] this was used for the many to many relationship join commented out below
    }
}

//routes start here

app.get("/api/users/new", (req, res)=>{
    //create a user
    let newUser = new User();
    //respond with json with info about the user
    res.json(newUser)
})

app.get("/api/companies/new", (req, res)=>{
    let newCompany = new Company();
    res.json(newCompany)
})

app.get("/api/user/company", (req, res)=>{
    let newUser = new User();
    let newCompany = new Company();
    res.json({user:newUser, company: newCompany})
})

//This is how to do a many to many relationship join
// app.get("/api/user/:userid/company/:companyid", (req, res)=>{ 
//     let user = users[req.params.userid];
//     let company = companies[req.params.companyid];
//     user.companies.push(company)
//     company.users.push(user)
//     res.json({user:user, company: company}) //first one before colon is the key the word after the colon is the value
// })






//THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, ()=>console.log(`Listening on port ${port}`));