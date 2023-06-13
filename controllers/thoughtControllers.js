const { Thought, User } = require('../models');

const getThoughts = async (req,res) => {
    try{
        const thoughtsData = await Thought.find();

        res.json(thoughtsData);
    }
    catch(err) {
        
        res.status(500).json(err);
    }
}

const newThoughts = async (req,res) => {
    try{
        const newThoughtsData = await Thought.create(req.body);
        if(!req.body) {
            return res.status(500).json({message:
            'Please fill out required information!'})
        }
        res.json(newThoughtsData)
    }
    catch(err) {
        
        res.status(500).json(err);
    }
}

const singleThought = async(req,res)=> {
    try{
        const thought = await Thought.findById(req.params.thoughtId).select('-__v');
        

        if(!thought) {
            return res.status(404).json({message: 'No thought with that ID'})
        }
        res.json(thought);
    }
    catch(err) {
        
        res.status(500).json(err);
    }
}

const updateThought = async(req,res) => {
    try{
        const updateThoughtData = await Thought.findOneAndUpdate({
            _id: req.params.thoughtId
        }, {
            $set: req.body
        }, {
            runValidators: true,
            new: true
        });

        if (!updateThoughtData) {
            res.status(404).json({message: 'no thought with that ID'});
        }
        res.json(updateThoughtData)

    } catch (err) {
        
        res.status(500).json(err)
    }
}

const deleteThought = async(req,res) => {
    try {
        const deleteThoughtData = await Thought.findOneAndDelete({_id: req.params.thoughtId})
        if (!deleteThoughtData) {
            res.status(404).json({message: 'No Thought with that ID'});
        }
        res.json({message: 'Thought deleted'})
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

const addReaction = async(req,res)=> {
    try{
        const thought = await Thought.findOneAndUpdate( { _id: req.params.thoughtId },
            {$addToSet: { reactions: req.body } },
            {runValidators: true, new: true});

        if(!thought) {
            return res.status(404).json({ message: 'No thought with this id'})
        }
        res.json(thought);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}


module.exports = { getThoughts, newThoughts, singleThought, updateThought, deleteThought }



//   // Add a video response
//   async addVideoResponse(req, res) {
//     try {
//       const video = await Video.findOneAndUpdate(
//         { _id: req.params.videoId },
//         { $addToSet: { responses: req.body } },
//         { runValidators: true, new: true }
//       );

//       if (!video) {
//         return res.status(404).json({ message: 'No video with this id!' });
//       }

//       res.json(video);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Remove video response
//   async removeVideoResponse(req, res) {
//     try {
//       const video = await Video.findOneAndUpdate(
//         { _id: req.params.videoId },
//         { $pull: { reactions: { responseId: req.params.responseId } } },
//         { runValidators: true, new: true }
//       )

//       if (!video) {
//         return res.status(404).json({ message: 'No video with this id!' });
//       }

//       res.json(video);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
// };
