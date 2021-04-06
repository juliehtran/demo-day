const isLoggedIn = require('./helpers/is_logged_in');

module.exports = setupApi;

function setupApi(app) {
    app.post('/item', isLoggedIn, async (req, res) => {
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
}