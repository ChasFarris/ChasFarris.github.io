/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.getElementById('g').style.left = 0;
document.getElementById('b').style.left = 0;
setInterval(function(){
    var rand = Math.round(Math.random() * 20);
    document.getElementById('g').style.left = (parseInt(document.getElementById('g').style.left, 10) + rand) + 'px';
    document.getElementById('b').style.left = rand + 'px';
}, 1000)
