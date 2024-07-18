let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
		
scrollContainer.addEventListener("wheel", (evt) => {
	evt.preventDefault();
	scrollContainer.scrollLeft += evt.deltaY;
	scrollContainer.style.scrollBehavior = "auto";
});
		
nextBtn.addEventListener("click", ()=>{
	scrollContainer.style.scrollBehavior = "smooth";
	scrollContainer.scrollLeft += 600;
});
		
backBtn.addEventListener("click", ()=>{
	scrollContainer.style.scrollBehavior = "smooth";
	scrollContainer.scrollLeft -= 600;
});

function openNavbar() {
	document.getElementById("sideNavigationBar").style.width = "50%";
}
function closeNavbar() {
	document.getElementById("sideNavigationBar").style.width = "0%";
}
