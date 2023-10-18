function ArticleLess(input){
	let word = input.split(" ");
	let nonArticleWord = word.filter((word) => {
		let lowerCaseWord = word.toLowerCase();
		if(lowerCaseWord==="the"||lowerCaseWord==="an"||lowerVaseWord==="a")
			return false;
	}
		return	true;						
});

  return  nonArticleWord.join(" ");


