// config/database.js
module.exports = {
    'url' : process.env.DATABASE_URL || 'mongodb+srv://demo:demo@cluster0-92dvh.mongodb.net/test?retryWrites=true', 
    'dbName': 'demo'
};
