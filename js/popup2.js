// JavaScript Document

cookiedata = document.cookie;
if(cookiedata. indexOf("maindiv=done") < 0 ){ //하루가 지났다면 다시 보이고
	document.all['popup'].style.visibility = "visible";
}else{//아직 안지났으면 보이지 않음
	document.all['popup'].style.visibility = "hidden";
}