var names = new Array("hiphop", "classical", "bollywood");

       function displayImage(event)
       {
       	console.log(event);

        console.log(this);
  	 	var obj=document.getElementById("Picture1");
        obj.className='show';
        obj.addEventListener("mousemove", func);
        
        var obj1=document.getElementById("Picture2");
        obj1.className='show';
        var obj2=document.getElementById("Picture3");
        obj2.className='show';

        }
    
function func()
{  
 document.getElementById("textHover").innerHTML = names[0]; 
  
}



 document.querySelector("button")
     onclick=  displayImage;
  	 
 