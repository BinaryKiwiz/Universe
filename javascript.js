console.log("Loading Variables");
CurrentTheme = 1;

console.log("Measuring Screen Resolution");
ScreenWidth = window.screen.width;
ScreenHeight = window.screen.height;
console.log("Screen Width: " + ScreenWidth);
console.log("Screen Height: " + ScreenHeight);

console.log("Positioning Objects");
document.getElementById("ThemeButton").style.right = ScreenWidth / 136 + "px";
document.getElementById("ThemeButton").style.top = ScreenHeight / 77 +"px";
document.getElementById("Title").style.left = ScreenWidth / 2.1 +"px";
document.getElementById("OptionsContent").style.top = (ScreenHeight / 768) * -6 +"px";
document.getElementById("OptionsContent").style.left = (ScreenWidth / 1366) * 1352 +"px";

console.log("Loading ChangeTheme()");
function ChangeTheme(){
  if(CurrentTheme == 1){
    console.log("Changing Theme to Dark");
    document.getElementById("body").style.background = "rgb(0, 0, 0)";
    document.getElementById("ThemeButton").style.background = "rgb(0, 0, 0)";
    document.getElementById("ThemeButton").style.color = "rgb(255, 255, 255)";
    document.getElementById("OptionsButton").style.color = "rgb(255, 255, 255)";
    document.getElementById("OptionsButton").style.background = "rgb(0, 0, 0)";
    document.getElementById("Title").style.color = "rgb(255, 255, 255)";
    CurrentTheme = 0;
  }
  else if(CurrentTheme == 0){
    console.log("Changing Theme to Light");
    document.getElementById("body").style.background = "rgb(255, 255, 255)";
    document.getElementById("ThemeButton").style.background = "rgb(255, 255, 255)";
    document.getElementById("ThemeButton").style.color = "rgb(0, 0, 0)";
    document.getElementById("OptionsButton").style.color = "rgb(0, 0, 0)";
    document.getElementById("OptionsButton").style.background = "rgb(255, 255, 255)";
    document.getElementById("Title").style.color = "rgb(0, 0, 0)";
    CurrentTheme = 1;
  }
}
