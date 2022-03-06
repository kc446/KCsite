/* DEVELOPER: Kolleen Caffyn */

// light/dark mode toggle script,

//initializing variables for the sake of keeping things relatively neat
/*const light= 'styles/light.css';
const dark = 'styles/dark.css';

let lotus = 'img/lotus.png';
let glowshroom = 'img/glowshroom.png';

var theme = document.getElementById('theme');
var icon = document.getElementById('favicon');
var logo = document.getElementById('logo');


//setting up themes as a bundled objects

let style={
    theme: document.getElementById('theme');
    icon: document.getElementById('favicon');
    logo: document.getElementById('logo');
}

style.light = {
    theme: 'light';
    icon: 'lotus';
    logo: 'lotus';
}

style.dark = {
    theme: 'dark';
    icon: 'glowshroom';
    logo: 'glowshroom';
}*/

// initializing cookie
/*let themeC = {
    set: function (cname, cvalue, exdays) { //setCookie
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + ";SameSite=Strict" + ";Secure";
    }

    get: function (cname) { //getCookie
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {c = c.substring(1);}
            if (c.indexOf(name) == 0) {return c.substring(name.length, c.length);}
        }
        return "";
    }
}*/

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + ";SameSite=Strict" + ";Secure";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {c = c.substring(1);}
        if (c.indexOf(name) == 0) {return c.substring(name.length, c.length);}
    }
    return "";
}

function checkCookie() {
    const check=document.getElementById('status').checked;

    if (check===true){ //(check===true){
        //themeC.set('theme','dark', 365);
        setCookie("theme", 'dark', 365);
        localStorage.setItem('theme','dark');
        //localStorage.setItem('check', 'true');
    }
    else {
        //themeC.set('theme','light', 365);
        setCookie("theme", 'light', 365);
        localStorage.setItem('theme','light');
        //localStorage.setItem('check', 'false');
    }
}

//initializing variables for the sake of keeping things relatively neat
const light= 'styles/light.css';
const dark = 'styles/dark.css';

let lotus = 'img/lotus.png';
let glowshroom = 'img/glowshroom.png';

function toggleTheme() {

    const theme = document.getElementById('theme');
    const favicon = document.getElementById('favicon');
    const logo = document.getElementById('logo');
    //logo won't work outside the function :|

    let check=checkCookie();

    /*if (check===true){ //(theme && style === light){
        setCookie("theme", 'dark', 365);

        /*localStorage.setItem('theme', dark);
        localStorage.setItem('favicon',glowshroom);
        localStorage.setItem('logo',glowshroom)
    }

    //if (check===false) {
        setCookie("theme", 'light', 365);
        /*localStorage.setItem('theme',light);
        localStorage.setItem('favicon',lotus);
        localStorage.setItem('logo',lotus)
    }*/

    let style = localStorage.getItem('theme'); //getCookie("theme");
    if (style==='dark'){
        theme.href=dark;
        favicon.href=glowshroom;
        logo.src=glowshroom;
    }

    if (style==='light') {
        theme.href=light;
        favicon.href=lotus;
        logo.src=lotus;
    }
    //document.getElementById("theme").textContent = window.localStorage.getItem("theme"); //????
}

/* alt???
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
        $(function(){
            //basic jquery syntax: $([selector]).[action]()
            $('#switch').click(function(){
                $('#theme').attr("href",'styles/dark.css').attr("href",'styles/light.css');
            })
        });
    </script>*/
