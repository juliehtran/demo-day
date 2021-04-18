const isLoggedIn = require('./helpers/is_logged_in');
const Comment = require('../models/comment');

module.exports = setupApi;

function setupApi(app) {
    app.post('/api/item', isLoggedIn, async (req, res) => {
        const item = req.body.item
        const location = req.body.location
        const user = req.user

        if (!user.items.includes(item)) {
            req.user.items.push(req.body.item)
        }
        if (!user.visitedLocations.includes(location)) {
            req.user.visitedLocations.push(req.body.location)
        }

        await req.user.save()
        res.json({ items: req.user.items, visitedLocations: req.user.visitedLocations })
    })

    app.post('/api/comment', isLoggedIn, async (req, res) => {
        const user = req.user
        const message = req.body.message

        comment = new Comment({ user, message})
        await comment.save()

        res.json(comment)
    })

    app.get('/api/comments', async (req, res) => {
        const comments = await Comment.find().populate('user').sort({ createdAt: -1 })
        res.json(comments)
    })
}