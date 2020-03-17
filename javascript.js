console.log("Loading Variables");
var Info = "You are a quark in an infinite universe";
Quarks = 1;
Protons = 0;
Neutrons = 0;
Electrons = 0;
Gluons = 0;
ReplicationIncrease = 1;
GluonIncrease = 1;
GluonChance = 5;

console.log("Loading RefreshScreen()");
function RefreshScreen(){
  document.getElementById("Quarks").innerHTML = Quarks;
  document.getElementById("Neutrons").innerHTML = Neutrons;
  document.getElementById("Protons").innerHTML = Protons;
  document.getElementById("Gluons").innerHTML = Gluons;
}

console.log("Loading Replicate()");
function Replicate(){
  Quarks += ReplicationIncrease;
  if(Math.floor((Math.random() * GluonChance) + 1) == 1){
    Gluons += GluonIncrease;
  }
  RefreshScreen();
}

console.log("Loading Save()");
function Save(){
  localStorage.setItem("Quarks", Quarks);
  localStorage.setItem("Neutrons", Neutrons);
  localStorage.setItem("Protons", Protons);
  localStorage.setItem("Gluons", Gluons);
}

console.log("Loading LoadSave()");
function LoadSave(){
  if(localStorage.getItem("Quarks") != null){
    Quarks = parseInt(localStorage.getItem("Quarks"));
  }
  if(localStorage.getItem("Gluons") != null){
    Gluons = parseInt(localStorage.getItem("Gluons"));
  }
  if(localStorage.getItem("Protons") != null){
    Protons = parseInt(localStorage.getItem("Protons"));
  }
  if(localStorage.getItem("Neutrons") != null){
    Neutrons = parseInt(localStorage.getItem("Neutrons"));
  }
}

console.log("Loading FuseNeutron()")
function FuseNeutron(){
  
}

console.log("Loading Game Elements");
LoadSave();
RefreshScreen();
