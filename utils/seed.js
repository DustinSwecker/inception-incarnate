const connection = require('../config/connection');
const { Users, Thought } = require('../models');
const { getRandomUsers, getRandomThoughts, createObjectIDS } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  await Users.deleteMany({});
  await Thought.deleteMany({});
  createObjectIDS();

  const thoughts = [];
  
  

  for (let i = 0; i < 15; i++) {
    const thought = getRandomThoughts();
    thoughts.push( thought );
  }

  await Thought.collection.insertMany(thoughts);
  
  
  const userData = getRandomUsers();
  await Users.collection.insertMany(userData);

  // show users and Thought tables, show seeding as complete and exit from process
  console.table(userData);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
