var footerleft = document.getElementById("footerleft");
var footerright = document.getElementById("footerright");

footerleft.addEventListener("mouseover", footerLeftMouseOver);
footerleft.addEventListener("mouseout", footerLeftMouseOut);

footerright.addEventListener("mouseover", footerRightMouseOver);
footerright.addEventListener("mouseout", footerRightMouseOut)



function footerLeftMouseOver() {
    footerright.style.filter = "blur(4px)";
}

function footerLeftMouseOut() {
    footerright.style.filter = "blur(0)";
}



function footerRightMouseOver() {
    footerleft.style.filter = "blur(4px)";
}

function footerRightMouseOut() {
    footerleft.style.filter = "blur(0)";;
}

