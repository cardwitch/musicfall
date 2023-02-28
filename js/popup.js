// JavaScript Document

function setCookie( name, value, expiredays ) { //24시간동안 열리지 않기
	var todayDate = new Date();
		todayDate.setDate( todayDate.getDate() + expiredays );
		document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
	}

function closeWin() { //colseX누르면 닫히기
	if ( document.notice_form.chkbox.checked){
		setCookie( "maindiv", "done", 1 ); //expiredays(만료기간)을 1일로 설정
		
	}
	document.all['popup'].style.visibility = "hidden";
}