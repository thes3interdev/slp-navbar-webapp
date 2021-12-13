/** grab everything we need */
const mobileMenuButton = document.querySelector('button.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

/** add event listeners */
mobileMenuButton.addEventListener('click', () => {
	mobileMenu.classList.toggle('hidden');
});
