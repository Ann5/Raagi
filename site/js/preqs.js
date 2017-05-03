$(document).ready(function() 
		{
			$('#fullpage').fullpage({			  
			  anchors: ['Page1', 'Page2', 'Page3', 'Page4', 'Page5'],
			  menu: '#menu',
			  scrollingSpeed: 1000,
			  continuousVertical: true,
			  continuousHorizontal: true
			});
			$('#give1').addClass('animated shake');
		});	
		

function showUp()
{
	alert("clicked");
}



var popup = document.getElementsByClassName("calendar-popup");		
$(".show-menu").click(function()
{
	alert("clicked");
	$('.menu').slideToggle(400, function()
	{
		$('this').toggleClass("menu-expanded").css('display','');
	});			
});		

popup.onclick = function()
{
	alert("Clicked");
	document.getElementById("modalCalendar").style.display = 'block';	
	$(".gcalendar").fadeIn(300,function(){$(this).focus();});	
};

$('.close').click(function()
{
	$(".gcalendar").fadeOut(300);
});
	
$(".calendar-popup").fadeIn(300,function()
{
	$(this).focus();
});