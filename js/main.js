kofi = function(){
	window.open("https://ko-fi.com/jasonfleischer", "_blank");
}

info = function(){
	information.showAlert();
}
dismissInfo = function(){
	information.dismissAlert();
}

init = function() {

	alert.init();
	setup_keyboard_listeners();

	var isSafariMobile = window.mobileAndTabletCheck() && isSafari;
	if (isSafariMobile && !isFromHomeScreen()){
		install.showAlert();
	}
}

function setup_keyboard_listeners() {
	window.onkeydown = function(e) {
		return e.keyCode !== 32 && e.key !== " ";
	};
	document.addEventListener('keyup', function(event){
		var code = event.code;
		if (code === 'KeyA') {
			openAll()
		} else {
			event.preventDefault();
		}
		function openAll(){
			var sites = ["metronome", "eartrainer", "scales", "synth", "tuner", "just-intonation"];
			for(let i in sites){
				window.open("https://jasonfleischer.github.io/"+sites[i], '_blank');
			}
		}
	})
}

