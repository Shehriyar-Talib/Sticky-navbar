window.addEventListener("scroll",function(){
    
    var navbar = document.getElementById("menu");
    
    if(window.pageYOffset >=320){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
})