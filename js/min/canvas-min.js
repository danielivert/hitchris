function preventDefault(e){e=e||window.event,e.preventDefault&&(e.preventDefault(),e.returnValue=!1)}function checkForChanges(){$("div.map").hasClass("open")?(console.log("Draws the map again since the morph-content is open"),start($("div.morph-content").width())):(start(0),setTimeout(checkForChanges,500))}function start(e){checkWhichLocation(),speed=0,reqAnimFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame,c=document.getElementById("canvas"),ctx=c.getContext("2d");var n=window.devicePixelRatio||1;ctx.canvas.width=window.innerWidth-e,ctx.canvas.height=window.innerHeight,c.style.width=c.width+"px",c.style.height=c.height+"px",c.width*=n,c.height*=n,plane=new Image,plane.onload=animate,loaded=!0,viewPort=calcMapViewPort(window[$("div.locator").data("location")]),plane._x=viewPort.x,plane._y=viewPort.y,plane.src="/img/map.svg",ctx.scale(n,n),animate(),checkStatusOfSpeed()}function animate(){plane._x<destiny.x&&0!=speed?(plane._x+=speed,plane._y=calcY(plane._x),plane._x>=destiny.x&&0!=speed&&(plane._x=destiny.x,plane._y=destiny.y,speed=0,enableScroll(),viewPort=calcMapViewPort(window[$("div.locator").data("location")]))):0!=speed&&(plane._x+=-speed,plane._y=calcY(plane._x),console.log("Plane X: "+plane._x+" / Plane Y: "+plane._y)),draw(),isRunning&&(checkStatusOfSpeed(),reqAnimFrame(animate))}function draw(){ctx.clearRect(0,0,c.width,c.height),ctx.drawImage(plane,plane._x,plane._y)}function calcSlope(e,n){return(e.y-n.y)/(e.x-n.x)}function calcY(e){var n=calcSlope(viewPort,destiny),a;return a=n*e-n*viewPort.x+viewPort.y}function checkStatusOfSpeed(){0===speed||isRunning?0===speed&&isRunning&&(isRunning=!1):(isRunning=!0,animate())}function disableScroll(){console.log("disabled"),window.addEventListener&&window.addEventListener("DOMMouseScroll",preventDefault,!1),window.onwheel=preventDefault,window.onmousewheel=document.onmousewheel=preventDefault,window.ontouchmove=preventDefault,document.onkeydown=preventDefaultForScrollKeys}function enableScroll(){console.log("enabled"),window.removeEventListener&&window.removeEventListener("DOMMouseScroll",preventDefault,!1),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}function calcMapViewPort(e){var n,a,o,t=document.getElementById("canvas");return a=t.width/2-e.x,a-=e.x,a/=2,o=e.y-t.height/2,o+=t.height/4,o=-o,n={name:e.name,x:a,y:o},place=e,n}function checkWhichLocation(){var e=$(window).scrollTop(),n=$(window).height();console.log("Scroll: "+e+" / Window Height: "+n),n>e&&$locator.css("opacity",0),e>=n&&$locator.css("opacity",1),1.5*n>e&&(destiny=calcMapViewPort(cuernavaca),$map.removeClass("open"),$locator.data("location","cuernavaca").removeClass("open cuernavaca")),e>=1.5*n&&2.5*n>=e&&(destiny=calcMapViewPort(cuernavaca),speed=10,checkStatusOfSpeed(),$map.addClass("open"),$locator.data("location","cuernavaca").addClass("open cuernavaca")),e>=3*n&&4*n>=e&&"norrkoping"!==$locator.data("location")&&($map.addClass("open"),$locator.data("location","norrkoping").addClass("open norrkoping"),destiny=calcMapViewPort(norrkoping),speed=10,checkStatusOfSpeed()),e>1200&&1800>e&&"stockholm"!==$locator.data("location")&&($locator.data("location","stockholm"),destiny=calcMapViewPort(stockholm),speed=1,checkStatusOfSpeed()),e>1800&&2400>e&&"uppsala"!==$locator.data("location")&&($locator.data("location","uppsala"),destiny=calcMapViewPort(uppsala),speed=1,checkStatusOfSpeed()),e>2400&&"munich"!==$locator.data("location")&&($locator.data("location","munich"),destiny=calcMapViewPort(munich),speed=1,checkStatusOfSpeed())}var $window=$(window),$locator=$(".locator"),$map=$(".map"),cuernavaca={name:"cuernavaca",x:1042,y:1672},norrkoping={name:"norrkoping",x:2788,y:869},stockholm={name:"stockholm",x:2821,y:847},uppsala={name:"uppsala",x:2817,y:830},munich={name:"munich",x:2726,y:1133},speed=0,isRunning=!0,c,ctx,reqAnimFrame,plane,destiny,viewPort;$(window).load(function(){$window.trigger("scroll"),$window.trigger("resize")}),$(window).ready(function(){checkForChanges()}),$(window).scroll(function(){checkWhichLocation()}),$(window).resize(function(){start($("div.map").hasClass("open")?$("div.morph-content").width():0)});