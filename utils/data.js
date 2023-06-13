const mongoose = require('mongoose');

const userID1 = new mongoose.Types.ObjectId();
const userID2 = new mongoose.Types.ObjectId();
const userID3 = new mongoose.Types.ObjectId();
const userID4 = new mongoose.Types.ObjectId();
const userID5 = new mongoose.Types.ObjectId();
const userID6 = new mongoose.Types.ObjectId();
const userID7 = new mongoose.Types.ObjectId();
const userID8 = new mongoose.Types.ObjectId();
const userID9 = new mongoose.Types.ObjectId();
const userID10 = new mongoose.Types.ObjectId();

const thoughtsID1 = new mongoose.Types.ObjectId();
const thoughtsID2 = new mongoose.Types.ObjectId();
const thoughtsID3 = new mongoose.Types.ObjectId();
const thoughtsID4 = new mongoose.Types.ObjectId();
const thoughtsID5 = new mongoose.Types.ObjectId();
const thoughtsID6 = new mongoose.Types.ObjectId();
const thoughtsID7 = new mongoose.Types.ObjectId();
const thoughtsID8 = new mongoose.Types.ObjectId();
const thoughtsID9 = new mongoose.Types.ObjectId();
const thoughtsID10 = new mongoose.Types.ObjectId();


const userData = [
  {
    _id: userID1,
    username: `snappyresponsegenerator`,
    email: 'soslowjoegoteatinbymoe@gmail.com',
    thoughts: thoughtsID7,
    friends: [userID2, userID3, userID4],

  },
  {
    _id: userID2,
    username: `derelictdeejay`,
    email: 'derelictdeejay@gmail.com',
    thoughts: thoughtsID10,
    friends: [userID4, userID5, userID6],

  },
  {
    _id: userID3,
    username: `yoyogirl420`,
    email: 'yoyo@gmail.com',
    thoughts: thoughtsID8,
    friends: [userID7, userID8, userID9],

  },
  {
    _id: userID4,
    username: `whyme`,
    email: 'whyme@gmail.com',
    thoughts: thoughtsID4,
    friends: [userID2, userID5, userID6],

  },
  {
    _id: userID5,
    username: `user1`,
    email: 'user1@gmail.com',
    thoughts: thoughtsID5,
    friends: [userID4, userID6, userID8],

  },
  {
    _id: userID6,
    username: `user2`,
    email: 'user2@gmail.com',
    thoughts: thoughtsID9,
    friends: [userID3, userID5, userID7],

  },
  {
    _id: userID7,
    username: `user3`,
    email: 'user3@gmail.com',
    thoughts: thoughtsID3,
    friends: [userID1, userID9, userID10],

  },
  {
    _id: userID8,
    username: `whatwhat`,
    email: 'whatwhat@gmail.com',
    thoughts: thoughtsID6,
    friends: [userID2, userID7, userID10],

  },
  {
    _id: userID9,
    username: `dude`,
    email: 'spent8hourstryingtoseeddataandfailed@gmail.com',
    thoughts: thoughtsID2,
    friends: [userID1, userID5, userID4],

  },
  {
    _id: userID10,
    username: `seriouslythough`,
    email: 'promisesarenotcreatedwell@gmail.com',
    thoughts: thoughtsID1,
    friends: [userID6, userID7, userID8],

  },
]

const reactionData = [
  {
    
    
    reactionBody: `This is my new alarm clock song. That way I will for sure get up 10 minutes early so I don't have to listen to it.`,
    username: `seriouslythough`,
    createdAt: 1683240680,
  },
  {
    
    
    reactionBody: `My Mum tries to be cool by saying that she likes all the same things that I do.`,
    username: `user2`,
    createdAt: 1683240680,
  },
  {
    
   
    reactionBody: 'This was awesome',
    username: `user3`,
    createdAt: 1683240680,
  },
  {
    
    
    reactionBody: 'Thank you for the great content',
    username: `user1`,
    createdAt: 1683240680,
  },
  {
    
    
    reactionBody: `He quietly entered the museum as the super bowl started.`,
    username: `dude`,
    createdAt: 1683240680,
  },
  {
    
    
    reactionBody: `To those of you who hate this song, it's not for you. It's for deaf people to enjoy. Thanks for being inclusive Disney.`,
    username: `whatwhat`,
    createdAt: 1683240680,
  },
  {
    
    
    reactionBody: 'This song will definitely leave you seeking the cure to life.',
    username: `whyme`,
    createdAt: 1683240680,
  },
  {
    
    
    reactionBody:  `This is my new alarm clock song. That way I will for sure get up 10 minutes early so I don't have to listen to it.`,
    username: `snappyresponsegenerator`,
    createdAt: 1683240680,
  },
  {
    
    
    reactionBody: `The idea that VFX people spent hundreds of hours having to animate Scuttle while repeatedly listening to this song gives me God-Tier Level respect for those folks.`,
    username: `yoyogirl420`,
    createdAt: 1683240680,
  },
  {
    
    
    reactionBody: `This song really left audiences wanting to give their hearing to Ursula`,
    username: `derelictdeejay`,
    createdAt: 1683240680,
  }
]

const thoughtData = [
  {
    _id: thoughtsID1,
    thoughtText: `They needed to find a place to eat. The kids were beginning to get grumpy in the back seat and if they didn't find them food soon, it was just a matter of time before they were faced with a complete meltdown. Even knowing this, the solution wasn't easy.`,
    createdAt: 1685915480,
    username: `seriouslythough`,
    reactions: [reactionData[0], reactionData[1], reactionData[2]],

  },
  {
    _id: thoughtsID2,
    thoughtText: `There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type.`,
    createdAt: 1685832680,
    username: `dude`,
    reactions: [reactionData[2], reactionData[3], reactionData[4]],

  },
  {
    _id: thoughtsID3,
    thoughtText: `He hid under the covers hoping that nobody would notice him there. It really didn't make much sense since it would be obvious to anyone who walked into the room there was someone hiding there, but he still held out hope.`,
    createdAt: 1683240680,
    username: `user3`,
    reactions: [reactionData[5], reactionData[6], reactionData[7]],

  },
  {
    _id: thoughtsID4,
    thoughtText: `It had been a late night. To be more correct, it had been an early morning. It was now 3:00 AM and George was just getting home. He wasn't sure if it had been worth it. He was supposed to have been finished by 10:00 PM, but his boss had implored him to stay.`,
    createdAt: 1654383080,
    username: `whyme`,
    reactions: [reactionData[8], reactionData[9], reactionData[9]],

  },
  {
    _id: thoughtsID5,
    thoughtText: `He watched as the young man tried to impress everyone in the room with his intelligence. There was no doubt that he was smart. The fact that he was more intelligent than anyone else in the room could have been easily deduced, but nobody was really paying any attention.`,
    createdAt: 1685829080,
    username: `user1`,
    reactions: [reactionData[1], reactionData[4], reactionData[7]],

  },
  {
    _id: thoughtsID6,
    thoughtText: `Turning away from the ledge, he started slowly down the mountain, deciding that he would, that very night, satisfy his curiosity about the man-house. In the meantime, he would go down into the canyon and get a cool drink.`,
    createdAt: 1685746280,
    username: `whatwhat`,
    reactions: [reactionData[2], reactionData[5], reactionData[8]],

  },
  {
    _id: thoughtsID7,
    thoughtText: `There were little things that she simply could not stand. The sound of someone tapping their nails on the table. A person chewing with their mouth open. Another human imposing themselves into her space. She couldn't stand any of these things.`,
    createdAt: 1683154280,
    username: `snappyresponsegenerator`,
    reactions: [reactionData[3], reactionData[4], reactionData[9]],

  },
  {
    _id: thoughtsID8,
    thoughtText: `Sometimes that's just the way it has to be. Sure, there were probably other options, but he didn't let them enter his mind. It was done and that was that. It was just the way it had to be.`,
    createdAt: 1654296680,
    username: `yoyogirl420`,
    reactions: [reactionData[1], reactionData[8], reactionData[9]],

  },
  {
    _id: thoughtsID9,
    thoughtText: `It really didn't matter what they did to him. He's already made up his mind. Whatever came his way, he was prepared for the consequences. He knew in his heart that the sacrifice he made was done with love and not hate no matter how others decided to spin it.`,
    createdAt: 1685746280,
    username: `user2`,
    reactions: [reactionData[2], reactionData[5], reactionData[7]],

  },
  {
    _id: thoughtsID10,
    thoughtText: `Her breath exited her mouth in big puffs as if she were smoking a cigarette. The morning dew had made her clothes damp and she shivered from the chill in the air. There was only one thing that could get her up and out this early in the morning.`,
    createdAt: 1683154280,
    username: `derelictdeejay`,
    reactions: [reactionData[0], reactionData[3], reactionData[6]],

  }
]


// Export the data for use in seed.js
module.exports = { userData, thoughtData };
