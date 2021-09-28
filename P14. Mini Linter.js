//Mini Linter
//In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph 
//and gather some information about that paragraph. This is the same type of work that word processing software does.

//Additionally, you may have heard of linting, a process by which text is evaluated and improved by an application. 
//In this project, you will create a miniature version of a linter using array methods that you have learned.
//If you get stuck during this project or would like to see an experienced developer work through it, 
//click “Get Unstuck“ to see a project walkthrough video.

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');

//console.log(storyWords.length);

let betterWords = storyWords.filter(word => {
    if (unnecessaryWords.includes(word) === false){
      return word;
    }
  });
  
  let usedReally = 0;
  let usedVery = 0;
  let usedBasically = 0;
  
  for (word of storyWords){
    if (word === 'really'){
      usedReally += 1;
    } else if (word === 'very'){
      usedVery += 1;
      } else if (word === 'basically'){
      usedBasically += 1;
    }
  };
  //console.log(usedReally);
  //console.log(usedVery);
  //console.log(usedBasically);

  let sentences = 0;
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!'){
    sentences+=1;
  }
});
  //console.log(sentences);

let results = () => {
console.log(`Words: ${storyWords.length}`);
console.log(`Sentences: ${sentences}`);
console.log(`Used Really: ${usedReally}`);
console.log(`Used Very: ${usedVery}`);
console.log(`Used Basically: ${usedBasically}`);
  };
results();
console.log(betterWords.join(' '));