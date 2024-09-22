//your JS code here. If required.

const size=document.getElementById("sizeInfo");
size.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
window.addEventListener("resize",()=>{
	size.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
});
