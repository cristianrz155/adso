/* alert("deseas ver la pagina ") */

let barmenu = document.getElementById("barmenu");
let main_menu = document.getElementById("mainmenu");

barmenu.addEventListener("click",function(){
    if (main_menu.classList.contains("main-menu")){
        main_menu.classList.add("href-item");
        main_menu.classList.remove("main-menu");
    }
    else{
        main_menu.classList.remove("href-item");
        main_menu.classList.add("main-menu");
        
    }
    
});
alert("funciona);"

)
