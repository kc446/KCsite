// light/dark mode toggle script, a.k.a. eternal suffering

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

    localStorage.getItem('theme');
    localStorage.getItem('favicon');
    localStorage.getItem('logo');

    const check=document.getElementById('status').checked;

    if (check===true){ //(theme && style === light){ //(style===light){
        theme.href=dark; //theme.setAttribute('href', dark);
        favicon.href=glowshroom;
        logo.src=glowshroom;
        localStorage.setItem('theme', dark);
        localStorage.setItem('favicon',glowshroom);
        localStorage.setItem('logo',glowshroom)
    }

    else {
        theme.href=light;
        favicon.href=lotus;
        logo.src=lotus;
        localStorage.setItem('theme',light);
        localStorage.setItem('favicon',lotus);
        localStorage.setItem('logo',lotus)
    }
    document.getElementById("theme").textContent = window.localStorage.getItem("theme"); //?????
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
