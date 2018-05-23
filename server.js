const express = require('express')
    , bodyParser = require('body-parser')
    , port = 3000
    , userCtrl = require('./userCtrl')
const app = express();

app.use( bodyParser.json())



app.get('/api/users', userCtrl.getAllUsers)
app.get('/api/users/:userid', userCtrl.getUserById)
app.get('/api/admins', userCtrl.getAdmins)
app.get('/api/nonadmins', userCtrl.getNonAdmins)
app.get('/api/user_type/:userType', userCtrl.getUserByType)
app.put('/api/users/:userid', userCtrl.updateUser)
app.post('/api/users', userCtrl.addUser)
app.delete('/api/users/:userid', userCtrl.deleteUser)


app.listen(port, () => console.log(`Listening on port ${port}`))