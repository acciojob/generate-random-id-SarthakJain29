function makeid(l) {
 const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let res = "";

	for(let i=0;i<l;i++){
		const randomindex = Math.floor(Math.random() * char.length);
		res += char[randomindex];
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
