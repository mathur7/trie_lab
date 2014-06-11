
Trie = function(){
  this.characters = {};
  isWord = false;
};

// you create a new trie only if it doesn't exist
 // else you just return the already learnt word
Trie.prototype.learn = function(word, index){
  index = index || 0;
  var char = word[index];
  if(index == word.length){
    this.isWord = true;
    return this;
  }else if (this.characters[char] === undefined){
    this.characters[char] = new Trie();
    this.characters[char].learn(word, index + 1);
  } else {
    this.characters[char].learn(word, index + 1);
  }
};

Trie.prototype.getWords = function(words, currentWord){
  words = words || [];
  currentWord = currentWord || "";
  if(this.isWord === true) {
    words.push(currentWord);
  }
  for(var char in this.characters){
    var child = this.characters[char];
    stuff = currentWord + char;
    child.getWords(words, stuff);
  }
  return words;
};

Trie.prototype.find = function(word, index){
  index = index || 0;
  var char = word[index];
  if(index < word.length){
    return this.characters[char].find(word, index + 1);
  } else if(index === word.length){
    return this;
  } else {
    return false;
  }
  
};

// This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.

Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions 
  // for a given prefix.
  // It should use find and getWords.
};

try{
  module.exports = Trie
} catch(e){

}