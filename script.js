function ArticleLess(input) {
  let words = input.split(" ");
  let nonArticleWords = words.filter((word) => {
    let lowerCaseWord = word.toLowerCase();
    return !(lowerCaseWord === "the" || lowerCaseWord === "an" || lowerCaseWord === "a");
  });

  return nonArticleWords.join(" ");
}