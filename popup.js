function play(index) {
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
}

chrome.tabs.query({
currentWindow: true}, 
function(tabs) {
	for (var i = 0; i < tabs.length; i++) {
		if(tabs[i].mutedInfo.muted){
			document.getElementsByClassName("btn-group")[0].innerHTML
			+= "<button id='muted'>" + i.toString() + "</button>"	
		}
		else {
			document.getElementsByClassName("btn-group")[0].innerHTML
			+= "<button>" + i.toString() + "</button>"	
		}
			
	}
});

document.addEventListener('DOMContentLoaded', function() {
	wrapper = document.getElementsByClassName("btn-group")[0]
    wrapper.addEventListener('click', function(event){
		index = parseInt(event.target.innerHTML);
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