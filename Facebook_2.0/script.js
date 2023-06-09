var database = [
    {
    userName: "Aditya Roy",
    passWord: "Adi123",
},
{
    userName: "Bob",
    passWord: "B123"
},
{
    userName: "Olivia",
    passWord: "O123"
},
{
    userName: "Oggy",
    passWord: "Og123"
}
];

//newsFeed
var newsFeed = [{
    userName: "Bob",
    timeLine: "Hello Bob and welcome",
},{
    userName: "Oggy",
    timeLine: "Hello Oggy and welcome",
},{
    userName: "Olvia",
    timeLine: "Hello Olivia and welcome",
}]

//Prompt
var userName = prompt("Enter your username");
var passWord = prompt("Enter your password");

//SignIn
function signIn(user,pass)
{
    if(validUser(user,pass)){
        console.log(newsFeed);
    }else{
        alert("Wrong username or password");
    }
}


signIn(userName,passWord)


function validUser(user,pass){
    for(var i =0 ;i< database.length;i++)
    {
        if(database[i].userName === user && database[i].passWord === pass)
            return true;
    }
    return false;
}

