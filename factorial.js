// <!-- <!DOCTYPE html>
// <html>
// <head>
// 	<title>factorial</title>
// </head>
// <body>
// 	<script type="text/javascript"> -->
		let a = prompt("enter a number")
		a = Number.parseInt(a)
		function factorial(a) {
			let ans = 1;
			 if (a==0 || a== 1) {
			 	return ans ;
			 } else if(a>1) {
			 	for(let i =a; i>1;i--){
			 		ans =ans*i;
			 	}
			 return ans;
			 }
			 else{
			 	return "number must be positive"
			 }

		}
		ans =factorial(a)
		console.log("Factorial of "+a+"is"+ans)
		console.info()
	// <!-- </script>

// </body>
// </html>
//  -->

