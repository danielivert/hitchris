$(document).ready(function(){var t=$(".sc-item-more a"),o=$(".project-details");o.hide(),t.on("click",function(t){t.preventDefault();var e=$(this).attr("href");o.slideUp(250),$(".project-details"+e).delay(250).fadeIn(250,function(){$("html, body").animate({scrollTop:$(this).offset().top},250)})}),o.find(".close-project").on("click",function(){$(this).parents(".project-details").slideUp()});var e=$(window),i=$(".back-to-top");e.on("scroll resize",function(){e.scrollTop()>=e.height()?i.show():i.fadeOut(500),e.scrollTop()}),e.trigger("scroll"),i.on("click",function(){$("html, body").animate({scrollTop:0},250)}),$(".position .description a.showmore").on("click",function(t){t.preventDefault(),$(this).parent().next().hasClass("hidden")&&($(this).slideUp("fast").parent().next().slideDown("fast"),$(this).parents(".position").addClass("show-details"))})});