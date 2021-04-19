setTimeout(function() {
    var OpeningLogoDiv = document.getElementById("OpeningLogoDiv");
    OpeningLogoDiv.parentNode.removeChild(OpeningLogoDiv);
    document.getElementById("MainPageContents").style.display = "block";
}, 2000);