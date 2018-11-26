function checkboxInject(elem,run){
var input = elem.getElementsByTagName('input')[0];
input.onchange = function() {elem.className = 'facecheckbox facecheckbox' + input.checked;localStorage.setItem('ScratchEco' + input.parentElement.id, !input.checked);}
}
window.onload = function(){
addCheckbox('Disable private messages','t1');
addCheckbox('Remove windows quick information about the user','t2');
addCheckbox('Disable ScratchEco comments','t3');
addCheckbox('Disable pictures in commanders','t4');
addCheckbox('Disable gif avatars','t5');
addCheckbox('Disable curator extension for studio','t6');
addCheckbox('Disable toggle player','t7');
addCheckbox('Disable thumbnail gif button','t8');
addCheckbox('Telemetry ScratchEco','t9');
document.getElementById('v').innerText = 'Version: '+localStorage.getItem('ScratchEcoVersion');
var wU = document.getElementById('wallpapersUrl');
wU.value = localStorage.getItem('ScratchEcoWallpaperUrl');
wU.onchange = function() { localStorage.setItem('ScratchEcoWallpaperUrl',wU.value); }
}
function addCheckbox(name,id){
if(localStorage.getItem('ScratchEco' + id)==null){localStorage.setItem('ScratchEco' + id,true);};
var html = '<div class="facecheckbox" id='+ id +'><input type="checkbox"></div><h1>' + name + '</h1>';
var code = document.createElement('div');
code.innerHTML = html;
code.className = 'switcher';
document.getElementById('switchers').appendChild(code);
var el = document.getElementById(id);
var tm = el.getElementsByTagName('input')[0];
var cl = localStorage.getItem('ScratchEco' + id);
if(cl=='true'){cl='false'}else{cl='true'}
tm.cheched = cl;
el.className = 'facecheckbox facecheckbox' + cl;
checkboxInject(el, onchange);
}
