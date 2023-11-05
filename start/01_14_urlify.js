// Write your code here
function urlify(blogtitle){
  // const punctuation = /regex/;
  // const punctuation = new RegExp("regex");
  const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;

  const blogTitleWithoutPunctuation = blogtitle.replace(punctuation,"");
  return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");

  // blogTitle.replace(charactersToReplace, charactersToReplaceRemoved);

}

console.log(urlify("How i got into programming!!!"))
console.log(urlify("i have got a new job :"))