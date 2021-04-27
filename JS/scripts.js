setTimeout(function() { 
    var OpeningLogoDiv = document.getElementById("OpeningLogoDiv");
    OpeningLogoDiv.parentNode.removeChild(OpeningLogoDiv); // Removing the logo Div After Home Page animation (That 2 seconds animation))

    document.getElementById("MainPageContents").style.display = "block"; // Showing the content in home page after animation.
}, 2000); // The code mentioned above this line will run after 2 seconds of logo animation.

function openNav(){
document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}