function f_acc(){$("#accordeon .acc-body").not($(this).next()).slideUp(1e3),$(this).next().slideToggle(700),$(this).find(".acc__icon").toggleClass("in")}$(document).ready((function(){$("#accordeon .acc-head").on("click",f_acc)})),$(window).scroll((function(){$(this).scrollTop()>0?$("#scroller").fadeIn():$("#scroller").fadeOut()})),$("#scroller").click((function(){return $("body,html").animate({scrollTop:0},200),!1})),$("#myModal").on("shown.bs.modal",(function(){$("#myInput").trigger("focus")}));