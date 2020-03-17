console.log("Loading Variables");
var Info = "You are a quark in an infinite universe";
Quarks = 1;
ReplicationIncrease = 1;

console.log("Loading Functions");
function RefreshScreen(){
  document.getElementById("Quarks").innerHTML = Quarks;
}

function Replicate(){
  Quarks += ReplicationIncrease;
  RefreshScreen();
}

console.log("Loading Game Elements");
RefreshScreen();
