(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){$=function(id){return document.getElementById(id)};var isSafari=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&navigator.userAgent.indexOf("CriOS")==-1&&navigator.userAgent.indexOf("FxiOS")==-1;window.mobileCheck=function(){let check=false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check=true})(navigator.userAgent||navigator.vendor||window.opera);return check};window.mobileAndTabletCheck=function(){let check=false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check=true})(navigator.userAgent||navigator.vendor||window.opera);return check};function isFromHomeScreen(){const params=new URLSearchParams(window.location.search);return params.has("from")}function randomInteger(min,max){return Math.floor(Math.random()*(max-min+1)+min)}information={};information.showAlert=function(){let contents=`
		<p onclick="openMailToDeveloper()">Thank you for using this website. If you wish to submit feedback, comment or report an error click <strong>here</strong>.</p>
		<p onclick="openURL('https://jasonfleischer.github.io/website/');">Information about the developer can be found <strong>here</strong>.</p>`;alert.show("Information",contents)};information.dismissAlert=function(){alert.dismiss()};openURL=function(url){window.open(url,"_blank")};openMailToDeveloper=function(){var subject="Synth Website Feedback";subject=subject.replaceAll(" ","%20");openURL("mailto:jason_fleischer@hotmail.ca?Subject="+subject)};alert={};alert.init=function(){$("alert_container").addEventListener("click",function(event){alert.dismiss()});$("dismiss_alert_button").addEventListener("click",function(event){alert.dismiss()});$("alert").addEventListener("click",function(event){event.stopPropagation();return false})};alert.show=function(title,contents){$("alert_title").innerHTML=title;$("alert_contents").innerHTML=contents;$("alert_container").style.display="block"};alert.dismiss=function(){$("alert_container").style.display="none"};kofi=function(){window.open("https://ko-fi.com/jasonfleischer","_blank")};info=function(){information.showAlert()};dismissInfo=function(){information.dismissAlert()};init=function(){alert.init();var isSafariMobile=window.mobileAndTabletCheck()&&isSafari;if(isSafariMobile&&!isFromHomeScreen()){install.showAlert()}};var install={};let prompt;let app_name="music-apps";if("serviceWorker"in navigator){navigator.serviceWorker.register("/"+app_name+"/service_worker.js",{scope:"/"+app_name+"/"}).then(function(reg){if(reg.installing){console.log(app_name+": Service worker installing")}else if(reg.waiting){console.log(app_name+": Service worker installed")}else if(reg.active){console.log(app_name+": Service worker active")}}).catch(function(error){console.log("Registration failed with "+error)})}else{console.log("Service worker not available")}window.onload=function(){init()};window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();prompt=e;if(window.mobileAndTabletCheck()){install.showAlert(function(){prompt.prompt()})}});window.addEventListener("appinstalled",async function(e){alert.dismiss()});install.showAlert=function(install_action){let contents=`
		<p>Install this app on your device to easily access it anytime. Installing this app will result in better performance, improved fullscreen experience, and usage without an internet connection.</p>
		<br/>
	`;var isSafariMobile=window.mobileAndTabletCheck()&&isSafari;if(isSafariMobile){contents+=`
			<div id="ios_install_instructions">
				<p>1. Tap on <img src="img/export.png" alt="export"/></p>
				<p>2. Select 'Add to Home Screen'</p>
			</div>`}else{contents+='<button id="install">Install</button>'}alert.show("Install App",contents);if(!isSafariMobile){let installButton=document.getElementById("install");installButton.addEventListener("click",install_action)}};const CACHE_NAME="v1";const APP_NAME="music-apps";const CACHE=["/"+APP_NAME+"/index.html","/"+APP_NAME+"/css/bundle.css","/"+APP_NAME+"/js/bundle.js"];self.addEventListener("install",function(event){console.log(APP_NAME+": install");event.waitUntil(caches.open(CACHE_NAME).then(function(cache){return cache.addAll(CACHE)}))});self.addEventListener("fetch",function(event){console.log(APP_NAME+": fetch");event.respondWith(caches.open(CACHE_NAME).then(function(cache){return cache.match(event.request).then(function(response){return response||fetch(event.request).then(function(response){cache.put(event.request,response.clone());return response})})}))});self.addEventListener("activate",function activator(event){console.log(APP_NAME+": activate");event.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.filter(function(key){return key.indexOf(CACHE_NAME)!==0}).map(function(key){return caches.delete(key)}))}))})},{}]},{},[1]);