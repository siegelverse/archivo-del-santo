const express = require('express')
const Review = require('../models/review')
const auth = require('../middleware/auth')
const router = new express.Router()


//GET /reviews?completed=true
//GET /reviews?limit=10&skip=2
//GET /reviews?sortBy=createdAt_desc
router.get('/reviews', auth, async (req, res) => {
    try {
        const match = {}
        const sort = {}

        if (req.query.completed) {
            match.completed = req.query.completed === 'true'
        }

        if (req.query.sortBy) {
            const parts = req.query.sortBy.split('_')
            sort[parts[0]] = parts[1] ? -1 : 1
        }
        const reviews = await req.user.populate({
            path: 'reviews',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        res.send(reviews)
    } catch(e) {
        res.status(500).send()
    }
})

router.get('/reviews/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const reviews = await Review.findOne({ _id, owner: req.user._id })
        
        if (!review) {
            res.status(404).send()
        }

        res.send(review)
    } catch(e) {
        res.status(500).send()
    }
})

router.post('/reviews', auth, async (req, res) => {
    const review = new Review({
        ...req.body,
        owner: req.user._id
    })

    try {
        await review.save()
        res.status(201).send(review)
    } catch(e) {
        res.status(400).send(error)
    }
})

router.patch('/review/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        res.status(400).send({ error: 'Invalid updates!' })
    }
    try{
        const review = await Review.findOne({ _id: req.params.id, owner: req.user._id })
       
        if (!review) {
            return res.status(404).send()
        }
        
        updates.forEach((update) => review[update] = req.body[update])
        await review.save()
        res.send(review)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/reviews/:id', auth, async (req, res) => {
    try {
        const review = Review.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!review) {
            return res.status(404).send()
        }

        res.send(review)
    } catch(e) {
        res.status(500).send()
    }
})

module.exports = router