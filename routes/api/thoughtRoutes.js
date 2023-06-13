const router = require('express').Router();

const {
    getThoughts,
    newThoughts,
    singleThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtControllers')


// /api/thoughts
router.route('/').get(getThoughts).post(newThoughts)

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(singleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
