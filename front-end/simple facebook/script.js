var database = {
  username: "Franco",
  password: "sessopiedi",
};


var newsfeed = [
  { username: "francorosa", timeline: "francorosaemafia" },

  { username: "salamella", timeline: "salame dolce" },

  { username: "salmone", timeline: "salmonenero" },
];


function signIn(usr,psw){

  if(usr === database.username && psw === database.password){
    console.log("login successful");}
    else {
      console.log("login failed");
    }

  }
