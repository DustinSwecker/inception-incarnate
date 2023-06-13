const {Thought, User} = require('../models');

const getThoughts = async (req, res) => {
    try {
        const thoughtsData = await Thought.find();

        res.json(thoughtsData);
    } catch (err) {

        res.status(500).json(err);
    }
}

const newThoughts = async (req, res) => {
    try {
        const newThoughtsData = await Thought.create(req.body);
        if (!req.body) {
            return res.status(500).json({message: 'Please fill out required information!'})
        }
        res.json(newThoughtsData)
    } catch (err) {

        res.status(500).json(err);
    }
}

const singleThought = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId).select('-__v');


        if (! thought) {
            return res.status(404).json({message: 'No thought with that ID'})
        }
        res.json(thought);
    } catch (err) {

        res.status(500).json(err);
    }
}

const updateThought = async (req, res) => {
    try {
        const updateThoughtData = await Thought.findOneAndUpdate({
            _id: req.params.thoughtId
        }, {
            $set: req.body
        }, {
            runValidators: true,
            new: true
        });

        if (! updateThoughtData) {
            res.status(404).json({message: 'no thought with that ID'});
        }
        res.json(updateThoughtData)

    } catch (err) {

        res.status(500).json(err)
    }
}

const deleteThought = async (req, res) => {
    try {
        const deleteThoughtData = await Thought.findOneAndDelete({_id: req.params.thoughtId})
        if (! deleteThoughtData) {
            res.status(404).json({message: 'No Thought with that ID'});
        }
        res.json({message: 'Thought deleted'})
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

const addReaction = async (req, res) => {
    try {
        const reaction = await Thought.findOneAndUpdate({
            _id: req.params.thoughtId
        }, {
            $addToSet: {
                reactions: req.body
            }
        }, {
            runValidators: true,
            new: true
        });

        if (! reaction) {
            return res.status(404).json({message: 'No thought with this id'})
        }
        res.json(reaction);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

const removeReaction = async (req, res) => {
    try {
        const delReaction = await Thought.findOneAndUpdate({
            _id: req.params.thoughtId
        }, {
            $pull: {
                reactions: {
                    reactionId: req.params.reactionId
                }
            }
        }, {
            runValidators: true,
            new: true
        });

        if (! delReaction) {
            return res.status(404).json({message: 'No thought or reaction with this ID'})
        }
        res.json({message: 'Reaction deleted'});
    } catch (err) {}
}


module.exports = {
    getThoughts,
    newThoughts,
    singleThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
}
