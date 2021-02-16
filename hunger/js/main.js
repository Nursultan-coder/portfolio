let links = document.querySelector('.link'),
	buttonDown = document.querySelector('.buttons-down'),
	about = document.querySelector('.span-about'),
	team = document.querySelector('.span-team'),
	booking = document.querySelector('.span-booking'),
	spes = document.querySelector('.span-spes'),
	menu = document.querySelector('.span-menu'),
	gallery = document.querySelector('.span-gallerie'),
	contact = document.querySelector('.span-contact');


about.addEventListener('click', (event) => {

	document.querySelector('.about').scrollIntoView({block: "start", behavior: "smooth"});
});
team.addEventListener('click', (event) => {
	document.querySelector('.team').scrollIntoView({block: "start", behavior: "smooth"});
});
booking.addEventListener('click', (event) => {
	document.querySelector('.booking').scrollIntoView({block: "start", behavior: "smooth"});
});
spes.addEventListener('click', (event) => {
	document.querySelector('.spes').scrollIntoView({block: "start", behavior: "smooth"});
});
menu.addEventListener('click', (event) => {
	document.querySelector('.menu').scrollIntoView({block: "start", behavior: "smooth"});
});
gallery.addEventListener('click', (event) => {
	document.querySelector('.gallery').scrollIntoView({block: "start", behavior: "smooth"});
});
contact.addEventListener('click', (event) => {
	document.querySelector('.contacts').scrollIntoView({block: "start", behavior: "smooth"});
});
buttonDown.addEventListener('click', (event) => {
	event.preventDefault;

	document.querySelector('.about').scrollIntoView({block: "start", behavior: "smooth"});
});
