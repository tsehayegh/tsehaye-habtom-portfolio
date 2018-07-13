//Toggle classes for responsiveness
function toggleResponsiveClass() {

		$('#myTopnav').toggleClass('responsive');

  	
}



//display bio;
function displayBio(){
	$('.nav-bio').on('click', function(event) {
		event.preventDefault();
		showHideSections('.bio', '.about, .projects');
	});
}
$(displayBio);

function displayProjects(){
	$('.nav-projects').on('click', function(event) {
		event.preventDefault();
		showHideSections('.projects', '.bio, .about');
	});
}
$(displayProjects);

function displayAbout(){
	$('.nav-about').on('click', function(event) {
		event.preventDefault();
		showHideSections('.about', '.bio, .projects');

	})
}
$(displayAbout);





function showHideSections(sectionToShow, sectionToHide){
	$(sectionToShow).removeClass("hidden");
	$(sectionToHide).addClass("hidden");
	$('.icon').click();
} 
