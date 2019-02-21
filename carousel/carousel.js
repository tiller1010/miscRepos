window.onload=function(){
	const trackContainer=document.querySelector('.carouselTrackContainer');
	trackContainer.style.visiblity='hidden';
	
	const track=document.querySelector('.carouselTrack');
	const slides=Array.from(track.children);
	console.log(slides);
}