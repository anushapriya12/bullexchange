

	function check(form)/*function to check userid & password*/
	{
	/*the following code checkes whether the entered userid and password are matching*/
	if(form.userid.value == "8985135457" && form.pswrd.value == "8985135457")
		{
		window.open('target.html')/*opens the target page while Id & password matches*/
		}
	else
		{
		alert("Error Password or Username")/*displays error message*/
		}
	}