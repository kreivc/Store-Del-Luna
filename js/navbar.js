
window.addEventListener("resize", function() {
     if (window.matchMedia("(max-width: 600px)").matches) {
          document.getElementById("sidebar").style.display = "none";
     }
})


function showSidebar(){
     document.getElementById("sidebar").style.display = "block";
}

function closeSidebar(){
     document.getElementById("sidebar").style.display = "none";
}