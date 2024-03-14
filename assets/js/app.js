const menuIcon = document.querySelector("#menuIcon");
const adminWrapper = document.querySelector("#adminWrapper");
const shadow = document.querySelector("#shadow");
const sidebarCloseBtn = document.querySelector("#sidebarCloseBtn");



menuIcon.addEventListener("click", handleSidebarToggle);
shadow.addEventListener("click", handleSidebarToggle);
sidebarCloseBtn.addEventListener("click", handleSidebarToggle);


function handleSidebarToggle(){
    adminWrapper.classList.toggle("sidebar-active");
    shadow.classList.toggle("active");
}


































