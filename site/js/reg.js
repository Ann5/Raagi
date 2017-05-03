function check_empty() 
{
	if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") 
	{
		alert("Fill All Fields !");
	} 
	else 
	{
		document.getElementById('form').submit();
		alert("Form Submitted Successfully...");
	}
}

function div_show() 
{
	document.getElementById('regform').style.display = "block";
}

function div_hide()
{
	document.getElementById('regform').style.display = "none";
}