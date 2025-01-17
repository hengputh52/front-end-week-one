function challenge6(vote)
{
   let voteCount = {};
   let Votes = 0;
   let winner = "";
   if(vote.length==0)
   {
      winner = winner + "there is vote";
   }
   for(let i in vote)
   {
      let candidate = vote[i];
      if(voteCount[candidate])
      {
         voteCount[candidate]++;
      }
      else
      {
         voteCount[candidate] = 1;
      }
   }
   
   
   for (let candidate in voteCount) {
      if (voteCount[candidate] > Votes) {
          Votes = voteCount[candidate];
          winner = candidate;
      }
  }

  return winner + " is winner"; 
   
}


let vote = ['A', 'B', 'A', 'C', 'A'];
let arr=[];
console.log(challenge6(vote));