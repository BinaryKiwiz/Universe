console.log("Loading Variables");
var Info = "You are a quark in an infinite universe";
var Quarks = 1;
var Protons = 0;
var Neutrons = 0;
var Electrons = 0;
var Gluons = 0;
var ReplicationIncrease = 1;
var GluonIncrease = 1;
var GluonChance = 5;
var NeutronQuarkCost = 3;
var NeutronGluonCost = 3;
var ProtonQuarkCost = 3;
var ProtonGluonCost = 3;
var NeutronsPerFusion = 1;
var ProtonsPerFusion = 1;
var Hydrogen = 0;
var HydrogenPerFusion = 1;
var Electrons = 0;
var ElectronsPerGen = 1;

console.log("Loading RefreshScreen()");
function RefreshScreen(){
  document.getElementById("Quarks").innerHTML = Quarks;
  document.getElementById("Neutrons").innerHTML = Neutrons;
  document.getElementById("Protons").innerHTML = Protons;
  document.getElementById("Gluons").innerHTML = Gluons;
  document.getElementById("Info").innerHTML = Info;
  document.getElementById("Hydrogen").innerHTML = Hydrogen;
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
  localStorage.setItem("Electrons", Electrons);
  localStorage.setItem("Hydrogen", Hydrogen);
  localStorage.setItem("ElectronsPerGen", ElectronsPerGen);
  localStorage.setItem("ReplicationIncrease", ReplicationIncrease);
  localStorage.setItem("GluonIncrease", GluonChance);
  localStorage.setItem("NeutronQuarkCost", NeutronQuarkCost);
  localStorage.setItem("NeutronGluonCost", NeutronGluonCost);
  localStorage.setItem("ProtonQuarkCost", ProtonQuarkCost);
  localStorage.setItem("ProtonGluonCost", ProtonGluonCost);
  localStorage.setItem("NeutronsPerFusion", NeutronsPerFusion);
  localStorage.setItem("ProtonsPerFusion", ProtonsPerFusion);
  localStorage.setItem("HydrogenPerFusion", HydrogenPerFusion);
  localStorage.setItem("Info", Info);
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
  if(localStorage.getItem("Electrons") != null){
    Electrons = parseInt(localStorage.getItem("Electrons"));
  }
  if(localStorage.getItem("Hydrogen") != null){
    Hydrogen = parseInt(localStorage.getItem("Hydrogen"));
  }
  if(localStorage.getItem("ReplicationIncrease") != null){
    ReplicationIncrease = parseInt(localStorage.getItem("ReplicationIncrease"));
  }
  if(localStorage.getItem("GluonIncrease") != null){
    GluonIncrease = parseInt(localStorage.getItem("GluonIncrease"));
  }
  if(localStorage.getItem("GluonChance") != null){
    GluonChance = parseInt(localStorage.getItem("GluonChance"));
  }
  if(localStorage.getItem("NeutronQuarkCost") != null){
    NeutronQuarkCost = parseInt(localStorage.getItem("NeutronQuarkCost"));
  }
  if(localStorage.getItem("NeutronGluonCost") != null){
    NeutronGluonCost = parseInt(localStorage.getItem("NeutronGluonCost"));
  }
  if(localStorage.getItem("ProtonQuarkCost") != null){
    ProtonQuarkCost = parseInt(localStorage.getItem("ProtonQuarkCost"));
  }
  if(localStorage.getItem("ProtonGluonCost") != null){
    ProtonGluonCost = parseInt(localStorage.getItem("ProtonGluonCost"));
  }
  if(localStorage.getItem("NeutronsPerFusion") != null){
    NeutronsPerFusion = parseInt(localStorage.getItem("NeutronsPerFusion"));
  }
  if(localStorage.getItem("ProtonsPerFusion") != null){
    ProtonsPerFusion = parseInt(localStorage.getItem("ProtonsPerFusion"));
  }
  if(localStorage.getItem("HydrogenPerFusion") != null){
    HydrogenPerFusion = parseInt(localStorage.getItem("HydrogenPerFusion"));
  }
  if(localStorage.getItem("ElectronsPerGen") != null){
    ElectronsPerGen = parseInt(localStorage.getItem("ElectronsPerGen"));
  }
}

console.log("Loading FuseNeutron()")
function FuseNeutron(){
  if(Quarks >= NeutronQuarkCost && Gluons >= NeutronGluonCost){
    Quarks -= NeutronQuarkCost;
    Gluons -= NeutronGluonCost;
    Neutrons += NeutronsPerFusion;
    if(NeutronsPerFusion <= 1){
      Info = "You fused " + String(NeutronQuarkCost) + " Quarks and " + String(NeutronGluonCost) + " Gluons into a Proton";
    }
    if(ProtonsPerFusion >= 1){
      Info = "You fused " + String(NeutronQuarkCost) + " Quarks and " + String(NeutronGluonCost) + " Gluons into " + String(NeutronsPerFusion) + " Proton";
    }
  }
  else{
    Info = "You don't have enough Quarks or Gluons";
  }
  RefreshScreen();
}

console.log("Loading FuseProton()");
function FuseProton(){
  if(Quarks >= ProtonQuarkCost && Gluons >= ProtonGluonCost){
    Quarks -= ProtonQuarkCost;
    Gluons -= ProtonGluonCost;
    Protons += ProtonsPerFusion;
    if(ProtonsPerFusion <= 1){
      Info = "You fused " + String(ProtonQuarkCost) + " Quarks and " + String(ProtonGluonCost) + " Gluons into a Proton";
    }
    if(ProtonsPerFusion >= 1){
      Info = "You fused " + String(ProtonQuarkCost) + " Quarks and " + String(ProtonGluonCost) + " Gluons into " + String(ProtonsPerFusion) + " Proton";
    }
  }
  else{
    Info = "You don't have enough Quarks or Gluons";
  }
  RefreshScreen();
}

function FuseHydrogen(){
  if(Protons >= 1 && Neutrons >= 1 && Electrons >= 1){
    Protons -= 1;
    Neutrons -= 1;
    Electrons -= 1;
    Hydrogen += HydrogenPerFusion;
    Info = "You fused subatomic particles into Hydrogen";
  }
  else{
    Info = "You don't have enough materials";
  }
  RefreshScreen();
}

function GenElectron(){
  Electrons += ElectronsPerGen;
  RefreshScreen();
}

console.log("Loading Game Elements");
LoadSave();
RefreshScreen();
