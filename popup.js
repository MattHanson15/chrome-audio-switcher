chrome.tabs.query({
currentWindow: true}, 
function(tabs) {
	for (var i = 0; i < tabs.length; i++) {
		if(tabs[i].mutedInfo.muted){
			document.getElementsByClassName("btn-group")[0].innerHTML
			+= "<button id='muted'>" + (i + 1).toString() + "</button>"	
		}
		else {
			document.getElementsByClassName("btn-group")[0].innerHTML
			+= "<button>" + (i + 1).toString() + "</button>"	
		}
			
	}
});

document.addEventListener('DOMContentLoaded', function() {
	wrapper = document.getElementsByClassName("btn-group")[0]
    wrapper.addEventListener('click', function(event){
		index = parseInt(event.target.innerHTML) - 1;
		chrome.tabs.query({
			currentWindow: true}, 
			function(tabs) {
				for (var i = 0; i < tabs.length; i++) {
					if( index == i ) { 
						chrome.tabs.update(tabs[i].id, {"muted": false}, function(tabs){});
					}
					else {
						chrome.tabs.update(tabs[i].id, {"muted": true}, function(tabs) {});
					}
				}
			}
		
		);
		location.reload();
	});
});