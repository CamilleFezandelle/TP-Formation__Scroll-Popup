const navBar = document.querySelector('nav');
const picture = document.getElementById('imgImprovise');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closeBtn');

let playOnce = true;

window.addEventListener('scroll', () => {
	let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

	if (window.scrollY > 45) {
		navBar.style.height = '45px';
	} else {
		navBar.style.height = '90px';
	}

	if (scrollValue > 0.45) {
		picture.style.opacity = '1';
		picture.style.transform = 'translateX(0px)';
	}

	if (scrollValue > 0.85 && playOnce) {
		popup.style.opacity = '1';
		popup.style.transform = 'translateX(0px)';
		playOnce = false;
	}
});

closePopup.addEventListener('click', () => {
	popup.style.opacity = '0';
	popup.style.transform = 'translateX(400px)';
});
