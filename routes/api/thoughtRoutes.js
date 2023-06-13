const router = require('express').Router();

const { getThoughts, newThoughts, singleThought, updateThought, deleteThought } = require('../../controllers/thoughtControllers')



// /api/thoughts
router.route('/')
.get(getThoughts)
.post(newThoughts)

// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(singleThought)
    .put(updateThought)
    .delete(deleteThought);
    
// /api/thoughts/:thoughtId/reactions
router.route('/:videoId/responses').post(addVideoResponse);

module.exports = router;



// // /api/videos/:videoId/responses
// router.route('/:videoId/responses').post(addVideoResponse);

// // /api/videos/:videoId/responses/:responseId
// router.route('/:videoId/responses/:responseId').delete(removeVideoResponse);


