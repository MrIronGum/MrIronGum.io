console.log('its working')

/*Save the theme */
let theme = localStorage.getItem("theme")

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

/*Making sure that Java knows when button clicked*/
for (var i =0; themeDots.length>i; i++){
    themeDots[i].addEventListener('click', function(){
        /*using data-mode to check what button is clicked*/
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        /*triggering setTheme with each loop*/
        setTheme(mode)
    })
}

function setTheme(mode){
    if (mode == 'light'){
        document.getElementById('theme-style').href = ""
    }

    if (mode == 'blue'){
        document.getElementById('theme-style').href = "blue.css"
    }

    if (mode == 'green'){
        document.getElementById('theme-style').href = "green.css"
    }

    if (mode == 'purple'){
        document.getElementById('theme-style').href = "purple.css"
    }

        localStorage.setItem('theme', mode)
}