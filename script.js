function ArticleLess(input) {
  // Define a regular expression pattern to match articles with word boundaries
  const articlePattern = /\b(the|an|a)\b/gi;

  // Use the replace method to remove articles from the input string
  const result = input.replace(articlePattern, "");

  return result;
}