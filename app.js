//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(mn, ma, ct, tw) {
  return [mn, ma, ct, tw];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(form) {
  if(form.length == 0){
    return null;
  } else {
    return{
      defender: form[0],
      midfield: form[1],
      forward: form[2]
    }
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let arr = [];
  players.forEach(function(player) {
    if(player.debut === year){
      arr.push(player);
    }
  });
  return arr;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  let arr = [];
  players.forEach(function(player) {
    if(player.position === position) {
      arr.push(player);
    }
  });
  return arr;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let arr = [];
  players.forEach(function(player) {
    let found = false;
    player.awards.forEach(function(award) {
      if(award.name === awardName){
        found = true;
      }
    });
    if(found){
      arr.push(player);
    }
  });
  return arr;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let arr = [];
  players.forEach(function(player) {
    let count = 0;
    player.awards.forEach(function(award){
      if(award.name === awardName) {
        count++;
      }
    });
    if(count === noOfTimes) {
      arr.push(player);
    }
  });
  return arr;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let arr = [];
  players.forEach(function(player) {
    let found = false;
    if(player.country === country) {
      player.awards.forEach(function(award) {
        if(award.name === awardName) {
          found = true;
        }
      });
    }
    if(found) {
      arr.push(player);
    }
  });
  return arr;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let arr = [];
  players.forEach(function(player) {
    let count = 0;
    player.awards.forEach(function() {
      count++;
    });
    if(count >= noOfAwards && player.team === team && player.age <= age) {
      arr.push(player);
    }
  });
  return arr;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  let age = [];
  let sorted = [];
  players.forEach(function(player) {
    age.push(player.age);
  });
  age.sort();
  for(let i = 0; i < 25; i++) {
    players.forEach(function(player) {
      if(player.age === age[i]){
        let found = false;
        sorted.forEach(function(sp) {
          if(sp === player){
            found = true;
          }
        });
        if(!found) {
          sorted.push(player);
        }
      }
    });
  }
  return sorted;
}


//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  let reqArr = [];
  let sortedArr = [];
  players.forEach(function(player) {
    if(player.team === team) {
      reqArr.push(player);
    }
  });
  let awardsArr = [];
  reqArr.forEach(function(player){
    awardsArr.push(player.awards.length)
  });
  awardsArr.sort();
  for(let i = 0; i < reqArr.length; i++){
    reqArr.forEach(function(player) {
      if(player.awards.length ===awardsArr[i]) {
        sortedArr.push(player);
      }
    });
  }
  return sortedArr;
}


//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
