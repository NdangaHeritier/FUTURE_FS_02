const themeToggleButton=document.querySelector(".theme-toggler-button");

// check for current theme.
const currentTheme= localStorage.getItem("theme-mode");

if(currentTheme=="dark"){
    document.body.classList.add("dark-mode");
}
else{
    document.body.classList.remove("dark-mode");
}

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme-mode","dark");
    }
    else{
        localStorage.setItem("theme-mode","light");
    }
});


const colorToggleButton=document.querySelector(".color-toggler-button");

// check for current theme.
const currentColor= localStorage.getItem("theme-color");

if(currentColor=="blue"){
    document.body.classList.add("blue-theme");
}
else{
    document.body.classList.remove("blue-theme");
}

colorToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("blue-theme");

    if(document.body.classList.contains("blue-theme")){
        localStorage.setItem("theme-color","blue");
    }
    else{
        localStorage.setItem("theme-color","orange");
    }
});