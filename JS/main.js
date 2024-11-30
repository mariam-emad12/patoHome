

  

window.addEventListener("scroll", () => {
  const header = document.querySelector("#header");
  const navItems = document.querySelectorAll(".navItem");
  const icons = document.querySelectorAll(".fa-brands");
 const logo = document.querySelector(".logo");
 const verticalIcon =document.querySelector(".fa-solid");
  if (window.scrollY > 0) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.width = "100%";
    header.style.backgroundColor = "white"; 
    header.style.transform = "translateY(0)";
    header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    verticalIcon.style.color = "black";
     icons.forEach((icon) =>{
        icon.style.color = "black";
     })
    navItems.forEach((item) => {
      item.style.color = "black";
    });
   logo.src = "./Assets/icons/logo2.png";
   
  } else {
    header.style.position = "absolute";
    header.style.backgroundColor = "transparent"; 
    header.style.boxShadow = "none"; 
   
 verticalIcon.style.color = "#fff";
     icons.forEach((icon) =>{
        icon.style.color = "#fff";
     })
     logo.src = "./Assets/icons/logo.png";
    navItems.forEach((item) => {
      item.style.color = "white";
    });
  }
});

const menuButton = document.querySelector(".menu-button-vertical");
const verticalMenu = document.querySelector(".vertical-menu");

menuButton.addEventListener("click" , () =>{
 verticalMenu.style.display = "block";
 
} )
const playVideoBtn = document.querySelector(".play-pause");
playVideoBtn.addEventListener("click" , () =>{
   
})