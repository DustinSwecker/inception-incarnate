const connection = require('../config/connection');
const {Thought, User} = require('../models');
const {userData, thoughtData} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    await Thought.collection.insertMany(thoughtData);
    await User.collection.insertMany(userData);

    // show users and Thought tables, show seeding as complete and exit from process
    console.table(userData);
    console.table(thoughtData);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});
