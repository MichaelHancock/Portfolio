$(document).ready(function(){var c=0;var a=0;var e=0;returnToTop();animateHeaderDecortation();setInterval(d,2000);setInterval(b,5000);animateMenu();events();var d=function(){var f=$(window).width();if(f>410){c++;if(c===1){$(".nodes_left:nth-child(4)").fadeTo("fast",1);$(".nodes_right:nth-child(7)").fadeTo("fast",1);$(".nodes_left:nth-child(6)").fadeTo("fast",0);$(".nodes_right:nth-child(9)").fadeTo("fast",0)}else{if(c===2){$(".nodes_left:nth-child(5)").fadeTo("fast",1);$(".nodes_right:nth-child(8)").fadeTo("fast",1);$(".nodes_left:nth-child(4)").fadeTo("fast",0);$(".nodes_right:nth-child(7)").fadeTo("fast",0)}else{$(".nodes_left:nth-child(6)").fadeTo("fast",1);$(".nodes_right:nth-child(9)").fadeTo("fast",1);$(".nodes_left:nth-child(5)").fadeTo("fast",0);$(".nodes_right:nth-child(8)").fadeTo("fast",0);c=0}}}};var b=function(){a++;if(a===1){$(".swappable:nth-child(2)").fadeTo(2000,1);$(".swappable:nth-child(3)").fadeTo(2000,0)}else{if(a===2){$(".swappable:nth-child(3)").fadeTo(2000,1);$(".swappable:nth-child(2)").fadeTo(2000,0);a=0}}}});var events=function(){var e=false;var g=0;var d=false;var c=false;var b=false;$('a[href*="#"]:not([href="#"])').click(function(){if(e===true){$(".main_nav").animate({"margin-top":"-=210px"},400);$(".slide_in").animate({"margin-top":"-=245px"},400);e=false}if(location.pathname.replace(/^\//,"")==_this.pathname.replace(/^\//,"")&&location.hostname==_this.hostname){var h=$(_this.hash);h=h.length?h:$("[name="+_this.hash.slice(1)+"]");if(h.length){$("html, body").animate({scrollTop:h.offset().top},1000);return false}}});$(window).scroll(function(){var j=$(_this).scrollTop();var h=900;var i=$(window).width();if(i>920){h=700}if(j>100&&d===false){$(".growable_line").fadeTo("fast",1);$(".growable_line").animate({width:"+=100px"},2000);d=true}if(j>h&&c===false){$(".contain_img img:nth-child(1)").fadeTo(1000,1);$(".contain_img img:nth-child(2)").fadeTo(2000,1);$(".contain_img img:nth-child(3)").fadeTo(3000,1);$(".contain_img img:nth-child(4)").fadeTo(3500,1);c=true}if(j>600&&b===false){$(".space .rocket:nth-child(2)").animate({top:"-=40px",left:"+=60px"},1500);$(".space .rocket:nth-child(3)").animate({bottom:"+=60px",right:"-=40px"},1500);b=true}$(".gear").css({transition:"transform 1s ease-out","-webkit-transform":"rotate("+Math.round(j/2.5)+"deg)","-moz-transform":"rotate("+Math.round(j/2.5)+"deg)","-ms-transform":"rotate("+Math.round(j/2.5)+"deg)",transform:"rotate("+Math.round(j/2.5)+"deg)",})});$(".main_nav .menu_open").click(function(){if(e===false){f()}else{a()}});$(window).resize(function(){a()});$("section").click(function(){a()});var f=function(){if(e===false){$(".main_nav").animate({"margin-top":"+=210px"},400);$(".slide_in").animate({"margin-top":"+=245px"},400);e=true}};var a=function(){if(e===true){$(".main_nav").animate({"margin-top":"-=210px"},400);$(".slide_in").animate({"margin-top":"-=245px"},400);e=false}}};var animateMenu=function(){$(".main_nav .menu_open .line_top").animate({width:"+=30px"},800);$(".main_nav .menu_open .line_middle").animate({width:"+=30px"},600);$(".main_nav .menu_open .line_bottom").animate({width:"+=30px"},1200)};var returnToTop=function(){if($(document).scrollTop()>0){window.scrollTo(0,0)}};var animateHeaderDecortation=function(){$(".header_container hr").animate({width:"+=100%"},2000)};
