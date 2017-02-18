var names = new Array("For example, it’s possible to look for elements with a class name of .box which are only inside a element with first-line as the id. Any items with the box class that aren’t inside of the first-line element, won’t be returned.", "classical", "bollywood");

       function displayImage(event)
       {
       	console.log(event);

        console.log(this);
  	 	var obj=document.getElementById("Picture1");
        obj.className='show';
       // obj.addEventListener("mouseenter", func);
        
         //	$( 'img').mouseenter(function(event) {
        //  $( "p", this ).text( names[0] );
        // });

        $(document).ready(function () {
         $('img').hover(function () {
        $(this).stop().animate({
            opacity: .4
        }, 200);
        $('.textHover').removeClass('hide');
        $('#textHover').text(names[0]);

         }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 500);
        $('#textHover').addClass('hide');
        
        });
        });
        
        var obj1=document.getElementById("Picture2");
        obj1.className='show';
  
        var obj2=document.getElementById("Picture3");
        obj2.className='show';
        

        }
    
function func()
{  
 document.getElementById("textHover").innerHTML = names[0]; 
  
}

  


 document.querySelector("button").onclick= displayImage;
  	 
 