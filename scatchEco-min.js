var temp=document.createElement("script");temp.src="https://www.gstatic.com/firebasejs/5.5.3/firebase.js";temp.onload=function(){connect()};
function connect(){var a=document.createElement("script");a.innerHTML='  var config = {\n    apiKey: "AIzaSyAy2o-FZGQDiy8orFTCTmJ7b3coUeQaoCc",\n    authDomain: "scratcheco-105a5.firebaseapp.com",\n    databaseURL: "https://scratcheco-105a5.firebaseio.com",\n    projectId: "scratcheco-105a5",\n    storageBucket: "scratcheco-105a5.appspot.com",\n    messagingSenderId: "17817429622"\n  };\n  firebase.initializeApp(config);function set(key,value){firebase.database().ref().child(key).set(value);}firebase.database().ref().on(\'value\', snap => get = snap.val());var dontwait=true;var b = document.createElement("script");\n\t\tb.src = "https://simakyr.github.io/scratchEco/scratchEcoGreen.js";\n\t\tdocument.getElementsByTagName(\'head\')[0].appendChild(b);';document.getElementsByTagName("head")[0].appendChild(a)}
ScratchEcoVersion="0.010";localStorage.setItem("ScratchEcoVersion",ScratchEcoVersion);if(null==localStorage.getItem("ScratchEcot1"))for(var i=1;10!=i;)localStorage.setItem("ScratchEcot"+i,"false"),i++;
if(void 0==document.getElementsByTagName("scratcheco")[0]&&"/scratchEco"==window.location.pathname){var catchmeifyouCANT="onload"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest,catchmeifyouCAN=new catchmeifyouCANT;catchmeifyouCAN.open("GET","https://raw.githubusercontent.com/SimaKyr/scratchEco/master/settingsWebpage/index.html",!0);catchmeifyouCAN.onload=function(){document.open();document.write(this.responseText);document.close()};catchmeifyouCAN.onerror=function(){console.error("Can't get html code!")};
catchmeifyouCAN.send()}document.head.appendChild(temp);if(""!=urlWallpaper){var urlWallpaper=localStorage.getItem("ScratchEcoWallpaperUrl"),elmStyle=document.createElement("style");elmStyle.innerHTML="#view,#pagewrapper,#footer{background-image: url("+urlWallpaper+");}";document.body.appendChild(elmStyle)};
