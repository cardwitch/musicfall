


//panel
$(document).ready(function() {
	var w2 = $(window).width();
	var h = $('body').css('height');

	$('mobileWrap').css('width',w2);

	$('.panelBox, .panelWrap').css('height',h);

	//기계마다 width달라서 주는 변수
	var w = $('.panelBox').css('width');
	w = parseInt(w); //단위px가 붙어서 수학계산 안되므로 px빼기 위해 사용

	$('.panelBox').animate({
		right: -w  //각각 기계가 갖고 있는 width폭만큼 왼쪽으로 이동
	},0);

	$(window).resize(function(){
		var w = $('.panelBox').css('width');
		w = parseInt(w);
		$('.panelBox').animate({
			right: -w  //각각 기계가 갖고 있는 width폭만큼 왼쪽으로 이동
		},0);
	});

	//패널아이콘클릭시
	$('.panel').click(function(){
		$('.panelBox').animate({
			right: 0
		},'fast');
	});

	//X버튼 클릭시
	$('.closeBtn').click(function(){
		$('.panelBox').animate({
			right: -w
		},'fast');
	});
});
 
 

 //vSlider

$(document).ready(function() {
	//글자 초기값 - 안보이게 처리
	$('.slider_text').fadeOut(0);


	// 슬라이더를 움직여주는 함수
	function moveSlider(index) { 
		//index매개변수는 이미지의 배열번호, 원버튼의 배열번호, 텍스트묶음의 배열번호
		
		//이미지 한개의 높이 찾기 - 해상도마다 다르므로
		var h = $('.vSlider_image img').height();

		var willMoveLeft = -(index * h); //사진각각의 y좌표
		$('.vSlider_image ').animate({ top: willMoveLeft }, 'slow');

		// 글자보이기
		$('.slider_text').fadeOut(0);
		$('.slider_text').eq(index).fadeIn('fast');

		// control_button에 on클래스를 부여/제거
		$('.vControl_button').removeClass('on');
		$('.vControl_button').eq(index).addClass('on');
	};

	//초기값 지정
	var num = $('.vSlider_image img').size()-1; //문서객체 선택자의 개수를 찾는 메서드
	var basic = Math.round(Math.random() * num); //0~4사이의 랜덤한 숫자로 처리
	moveSlider(basic);


	//원버튼 클릭시
	$('.vControl_button').click(function(){
		var i = $(this).index(); //클릭당한 원버튼의 배열번호를 찾아주는 메서드
		moveSlider(i);
		clearInterval(auto); //버튼클릭시 자동실행이 정지
		$('.playBtn').css('display','block');
		$('.pauseBtn').css('display','none');
	});


	//5초마다 자동변경
	var auto = setInterval(function(){
		if(basic == 2){
			basic = 0;
		}else{
			basic++;
		}
		moveSlider(basic);
	},5000);

	
	
	//play와 pause - 초기에는 play버튼은 보이지 않음
	$('.playBtn').css('display','none');

	$('.pauseBtn').click(function(){
		clearInterval(auto);
		$(this).css('display','none');
		$('.playBtn').css('display','block');
	});

	$('.playBtn').click(function(){
		basic = $('.vControl_panel .on').index();
		auto = setInterval(function(){
			if(basic == 2){
				basic = 0;
			}else{
				basic++;
			}
			moveSlider(basic);
		},5000);
		$(this).css('display','none');
		$('.pauseBtn').css('display','block');
	});
});


//accordion

$(function() {
	$('#accordion > li').hover(
		function () {
			var $this = $(this);
			$this.stop().animate({'width':'195px'},303);
			$('.heading',$this).stop(true,true).fadeOut();
			$('.bgDescription',$this).stop(true,true).slideDown(195);
			$('.description',$this).stop(true,true).fadeIn();
		},
		function () {
			var $this = $(this);
			$this.stop().animate({'width':'21px'},303);
			$('.heading',$this).stop(true,true).fadeIn();
			$('.description',$this).stop(true,true).fadeOut(195);
			$('.bgDescription',$this).stop(true,true).slideUp(303);
		}
	);
});

/*music video */

$(document).ready(function() {
	//글자 초기값 - 안보이게 처리
	$('.slider_text').fadeOut(0);
	$('.slider_image').fadeOut(0);


	// 슬라이더를 움직여주는 함수
	function moveSlider(index) { 
		//index매개변수는 이미지의 배열번호, 원버튼의 배열번호, 텍스트묶음의 배열번호
		
		//사진보이기
		$('.slider_image').fadeOut(0);
		$('.slider_image').eq(index).fadeIn('slow');

		// 글자보이기
		$('.slider_text').fadeOut(0);
		$('.slider_text').eq(index).fadeIn('slow');

		// control_button에 on클래스를 부여/제거
		$('.control_button').removeClass('on');
		$('.control_button').eq(index).addClass('on');
	};

	//초기값 지정
	var num = $('.slider_panel img').size()-1; //문서객체 선택자의 개수를 찾는 메서드
	var basic = Math.round(Math.random() * num); //0~4사이의 랜덤한 숫자로 처리
	moveSlider(basic);

	//원버튼 클릭시
	$('.control_button').click(function(){
		var i = $(this).index(); //클릭당한 원버튼의 배열번호를 찾아주는 메서드
		moveSlider(i);
		clearInterval(auto); //버튼클릭시 자동실행이 정지
		$('.play_btn').css('display','block');
		$('.pause_btn').css('display','none');
	});


	//5초마다 자동변경
	var auto = setInterval(function(){
		if(basic == 2){
			basic = 0;
		}else{
			basic++;
		}
		moveSlider(basic);
	},5000);

	// next버튼처리
	$('.next_btn').click(function() {
		var i = $('.control_panel .on').index();
		if(i == 2){
			i = 0;
		}else{
			i++;
		}
		moveSlider(i);
		clearInterval(auto);
		$('.play_btn').css('display','block');
		$('.pause_btn').css('display','none');
	});

	
	//play와 pause - 초기에는 play버튼은 보이지 않음
	$('.play_btn').css('display','none');

	$('.pause_btn').click(function(){
		clearInterval(auto);
		$(this).css('display','none');
		$('.play_btn').css('display','block');
	});

	$('.play_btn').click(function(){
		basic = $('.control_panel .on').index();
		auto = setInterval(function(){
			if(basic == 2){
				basic = 0;
			}else{
				basic++;
			}
			moveSlider(basic);
		},5000);
		$(this).css('display','none');
		$('.pause_btn').css('display','block');
	});
});

//youtube mv - colorbox
$(document).ready(function(){
	$('.youtube01').colorbox({iframe:true, width:'640px', height:'480px'});
	$('.youtube02').colorbox({iframe:true, width:'640px', height:'480px'});
	$('.youtube03').colorbox({iframe:true, width:'640px', height:'480px'});
});



//오늘하루 보이지 않기 - 제이쿼리 실행
	$(document).ready(function() {
		function setCookie(name, value, expiredays) { //24시간을 계산해서 시간이 지날수록 숫자가 떨어지는 함수선언
			var todayDate = new Date();
			todayDate.setDate( todayDate.getDate() + expiredays );
			document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
		};
		
		function closeWin() { //체크박스를 체크했을때 슬라이드업처리되는 함수선언
			if ( $('#chkbox').prop('checked') == true){
				setCookie( 'maindiv', 'done', 1 ); //24시간 계산 함수 실행	
			}
			$('div#popup').fadeOut('fast');
		};
		
		cookiedata = document.cookie;
		if(cookiedata. indexOf('maindiv=done') < 0 ){ //하루가 지났다면 다시 보이고
			$('div#popup').show();
		}else{//아직 안지났으면 보이지 않음
			$('div#popup').hide();
		}
		
		$('div#popup a').click(function() {
			closeWin(); //클릭했을때 사라지는 함수 실행
		});
	});


/*
	Load more content with jQuery - May 21, 2013
	(c) 2013 @ElmahdiMahmoud
*/   


$(document).ready(function(){
	$('.tab li').first().addClass('on');
	$('.conWrap > div').first().css('display','block');

	$('.tab li a').click(function(){

		//tab
		$('.tab li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.conWrap > div').css('display','none');
		$('.conWrap > div').eq(index).css('display','block');
	});
});

//flexslider
$(window).load(function() {
	$('.flexslider').flexslider();
});

//가사집
$(document).ready(function(){		
		$('dd:not(:first)').css('display','none');
		
		
		$('dl dt').click(function() {
			
			if($('+dd',this).css('display')=='none'){
				$('dd').slideUp('fast');
				$('+dd',this).slideDown('fast');
				$('dt').removeClass('active');
				$(this).addClass('active');
			}else{
				$('dd').slideUp('fast');
				$(this).find('span').removeClass('on');
			}
		});
});

//totop

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});