// JavaScript Document
function showLocale(objD)
{
	var str,colorhead,colorfoot;
	var yy = objD.getYear();
	if(yy<1900) yy = yy+1900;
	var MM = objD.getMonth()+1;
	if(MM<10) MM = '0' + MM;
	var dd = objD.getDate();
	if(dd<10) dd = '0' + dd;
	var hh = objD.getHours();
	if(hh<10) hh = '0' + hh;
	var mm = objD.getMinutes();
	if(mm<10) mm = '0' + mm;
	var ss = objD.getSeconds();
	if(ss<10) ss = '0' + ss;
	var ww = objD.getDay();
	if  ( ww==0 )  colorhead="<font color=\"#bd362f\">";
	if  ( ww > 0 && ww < 6 )  colorhead="<font color=\"#222\">";
	if  ( ww==6 )  colorhead="<font color=\"#46a546\">";
	if  (ww==0)  ww="星期日";
	if  (ww==1)  ww="星期一";
	if  (ww==2)  ww="星期二";
	if  (ww==3)  ww="星期三";
	if  (ww==4)  ww="星期四";
	if  (ww==5)  ww="星期五";
	if  (ww==6)  ww="星期六";
	colorfoot="</font>"
	str = colorhead + yy + "年"+ MM + "月"+ dd + "日" + hh + ":" + mm + ":" + ss + "  " + ww + colorfoot;
	return(str);
};
function tick()
{
	var today;
	today = new Date();
	document.getElementById("localtime").innerHTML = showLocale(today);
	window.setTimeout("tick()", 1000);
};

// Christmas Banner
var time_garland = 550;
var TIME = 400;

$(document).ready(function(){

	if (window.location.href.indexOf('campaign=display') === -1) {
		$('body').prepend($('#christmas_banner_template').html());
		$('body').css('padding-top', '0px');
		setTimeout(function(){
			christmas_showBanner();
		}, 1000);

		$('.close_btn').click(function(){
			christmas_hideBanner();
		});

		window.setInterval('garlandOn()', time_garland);

		$('.banner_holder').css('display', 'none');
		$('.got-pc').css('display', 'none');
	}
});

function christmas_showBanner(){
	$('#christmas_banner')
		.css({'top':'-60px', 'opacity': 0, 'display':'block'})
		.stop()
		.animate({'top':0, 'opacity':1},300);
}

function christmas_hideBanner(){
	$('#christmas_banner')
		.stop()
		.animate({'top':'-60px', 'opacity':0},300);
		$('body').animate({'margin-top':'-60px'}, 200, function(){
			$('#christmas_banner').css({'top':'-60px', 'opacity': 0, 'display':'block'});
			$('body').animate({'margin-top':'-60px'}, 300);
		});
}

function garlandOn(){
	if ($('.line_gnd').hasClass('line_gnd1')){
		$('.line_gnd').removeClass('line_gnd1');
		$('.line_gnd').addClass('line_gnd');
	} else if ($('.line_gnd').hasClass('line_gnd2')) {
		$('.line_gnd').removeClass('line_gnd2');
		$('.line_gnd').addClass('line_gnd1');
	} else if ($('.line_gnd').hasClass('line_gnd3')) {
		$('.line_gnd').removeClass('line_gnd3');
		$('.line_gnd').addClass('line_gnd2');
	} else {
		$('.line_gnd').addClass('line_gnd3');
	}
}
