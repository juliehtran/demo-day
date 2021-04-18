const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);
