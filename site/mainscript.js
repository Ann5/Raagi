
  function displayImage()
   {

        console.log(this);
  	 	var obj=document.getElementById("Picture1");
        obj.className=('show');
        var obj1=document.getElementById("Picture2");
        obj1.className=('show');
        var obj2=document.getElementById("Picture3");
        obj2.className=('show');



       // document.querySelector("button")
       //.addEventListener("click", displayImage);
   }
  	 
 document.querySelector("button")
 onclick = displayImage;