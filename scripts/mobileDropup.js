/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropUp() {
    document.getElementById("dropup-menu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
document.ontouchstart = function(event) {
    if (!event.target.matches('.dropdown-content a')) {
        var dropups = document.getElementsByClassName("dropup-content");
        var i;
        for (i = 0; i < dropups.length; i++) {
            var openDropup = dropups[i];
            if (openDropup.classList.contains('show')) {
                openDropup.classList.remove('show')
            }
        }
    }
}