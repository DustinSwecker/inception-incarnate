const mongoose = require('mongoose');
const { Thought } = require('../models');



const userstarts = [
  'magic',
  'smoothmove',
  'exlax',
  'geranimo',
  'yeehaw',
  'yoyogirl',
  'yoyoboy',
  'snappyresponsegenerator',
  'derelictdeejay',
  'tomboymcgoy',
  'femalelibido',
  'drivingcars',
  'timmygeemcgee',
  'gotthyme',
  'timekeepsonticking',
  'intothefuture',
  'ifyouknowyouknow',
  'tantamounttojoy',
  'surrealdisaster',
  'hereslookingatyou',
  'recklessroy',
  'sanityjane',
  'keepingitreal',
  'butdoyouknow',
  'idontknow',
  'soslowjoegoteatinbymoe',
  'stop',
  'go'
  
];

const addendums = [
  '420',
  '69',
  'xxx',
  'x',
  '92',
  'johnwickfan',
  'marvelUstinks',
  'GG',
  'EZWIN',
  'WPGG',
  'GGWP',
  'Tswizzlefan',
  'yearofourlord',
  'forlornjorn'

]

const thoughtText = [
  `They needed to find a place to eat. The kids were beginning to get grumpy in the back seat and if they didn't find them food soon, it was just a matter of time before they were faced with a complete meltdown. Even knowing this, the solution wasn't easy.`,
  `There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type.`,
  `He hid under the covers hoping that nobody would notice him there. It really didn't make much sense since it would be obvious to anyone who walked into the room there was someone hiding there, but he still held out hope.`,
  `It had been a late night. To be more correct, it had been an early morning. It was now 3:00 AM and George was just getting home. He wasn't sure if it had been worth it. He was supposed to have been finished by 10:00 PM, but his boss had implored him to stay.`,
  `He watched as the young man tried to impress everyone in the room with his intelligence. There was no doubt that he was smart. The fact that he was more intelligent than anyone else in the room could have been easily deduced, but nobody was really paying any attention.`,
  `Turning away from the ledge, he started slowly down the mountain, deciding that he would, that very night, satisfy his curiosity about the man-house. In the meantime, he would go down into the canyon and get a cool drink.`,
  `There were little things that she simply could not stand. The sound of someone tapping their nails on the table. A person chewing with their mouth open. Another human imposing themselves into her space. She couldn't stand any of these things.`,
  `Sometimes that's just the way it has to be. Sure, there were probably other options, but he didn't let them enter his mind. It was done and that was that. It was just the way it had to be.`,
  `It really didn't matter what they did to him. He's already made up his mind. Whatever came his way, he was prepared for the consequences. He knew in his heart that the sacrifice he made was done with love and not hate no matter how others decided to spin it.`,
  `Her breath exited her mouth in big puffs as if she were smoking a cigarette. The morning dew had made her clothes damp and she shivered from the chill in the air. There was only one thing that could get her up and out this early in the morning.`,
  `There was a time when he would have embraced the change that was coming. In his youth, he sought adventure and the unknown, but that had been years ago. He wished he could go back and learn to find the excitement that came with change but it was useless.`,
  `The song came from the bathroom belting over the sound of the shower's running water. It was the same way each day began since he could remember. It listened intently and concluded that the singing today was as terrible as it had ever been.`,
];

const possibleReactions = [
  'I disagree!',
  `My Mum tries to be cool by saying that she likes all the same things that I do.`,
  'This was awesome',
  'Thank you for the great content',
  `He quietly entered the museum as the super bowl started.`,
  `This song is amazing. My father has been in a coma for a while now but woke up today to turn the tv off`,
  `To those of you who hate this song, it's not for you. It's for deaf people to enjoy. Thanks for being inclusive Disney.`,
  'This song will definitely leave you seeking the cure to life.',
  `The idea that VFX people spent hundreds of hours having to animate Scuttle while repeatedly listening to this song gives me God-Tier Level respect for those folks.`,
  `This song really left audiences wanting to give their hearing to Ursula`,
  `Definitely one of the songs ever made`,
  `This is my new alarm clock song. That way I will for sure get up 10 minutes early so I don't have to listen to it.`

];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

//create objectids so that we can populate fields rather than need to do a get pull
let objectIDS = [];
const createObjectIDS = () => {
  objectIDS = [];  
  for(i=0; i < 15; i++) {
    const newId = new mongoose.Types.ObjectId();
    objectIDS.push(newId);
  };  
}

//create list of randomFriends to populate from our existing list of 15 people generated into the objectIDS array
let randomFriends = [];
const getRandomFriends = () => {
  randomFriends = [];
  const randomFriend = Math.floor(Math.random() * objectIDS.length)
  for (let i=0; i<randomFriend; i++) {
    randomFriends.push(getRandomArrItem(objectIDS))
  }
} 


// Gets a random username
const getRandomUsername = () => { return `${getRandomArrItem(userstarts)}${getRandomArrItem(addendums)}`;
}

//get a random email
const getRandomEmail = () => getRandomUsername() + '@gmail.com';

const getThoughtObjectForUser = async () => {
  let getThoughts = await Thought.where('username', this.username)
  const gottenThoughts = getThoughts.map((v)=> v._id);
  return gottenThoughts;
}

const unbelieveableHowPromisesAreSetup = await getThoughtObjectForUser();
// .then(function(x) {
//   return x;
// }
// )

console.log(unbelieveableHowPromisesAreSetup())


//function to create user
const getRandomUsers = async () => {
  getRandomFriends();
  let results = [];
  
  
    for (let i = 0; i < 15; i++) {
    results.push({
      _id: objectIDS[i],
      username: getRandomUsername(),
      email: getRandomEmail(),
      thoughts: unbelieveableHowPromisesAreSetup(),
      friends: [...randomFriends],
    });
  };
  return results;
};

// Create the reactions for thoughts
const getRandomReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomUsername(),
    });
  }
  return results;
};

//create thoughts function
const getRandomThoughts = () => {
  let results = {
      _id: new mongoose.Types.ObjectId(),
      thoughtText: getRandomArrItem(thoughtText),
      createdAt: Math.floor(Math.random() * Date.now()),
      username: getRandomUsername(),
      reactions: [...getRandomReactions(4)],

    };

  return results;
};


// Export the functions for use in seed.js
module.exports = { getRandomUsers, getRandomThoughts, createObjectIDS };
