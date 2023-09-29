export const getScrall =() =>{
    window.addEventListener("scroll",function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky",scrollY>100);
     });
}