/* MENU SHOW Y HIDDEN */
const navMenu = document.getElementById("nav-menu"),
	toggleMenu = document.getElementById("nav-toggle"),
	closeMenu = document.getElementById("nav-close");

// show
toggleMenu.addEventListener("click", () => {
	navMenu.classList.toggle("show");
});

//Hide
closeMenu.addEventListener("click", () => {
	navMenu.classList.remove("show");
});

/* REMOVE MENU */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		//console.log(current);

		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active");
		} else {
			document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active");
		}
	});
}
window.addEventListener("scroll", scrollActive);
