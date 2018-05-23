var userData = require('./userData.json')

module.exports = {
    getAllUsers: (req, res) => {
        // res.status(200).send(userData)
        const {query} = req
        if(query.age){
            let users = userData.filter( user => user.age < +query.age)
            res.status(200).send(users)
        } else if (query.lastname) {
            let users = userData.filter( user => user.last_name === query.lastname)
            res.status(200).send(users)
        } else if (query.email) {
            let users = userData.filter( user => user.email === query.email)
            res.status(200).send(users)
        } else if (query.favorites) {
            let users = userData.filter( user => user.favorites.includes(query.favorites))
            res.status(200).send(users)
        } else {
            res.status(200).send(userData)
        }
    },
    getUserById: (req, res) => {
        const {userid} = req.params
        let users = userData.filter( user => user.id === +userid)
        if(users[0]){
            res.status(200).send(users[0])
        } else {
            res.status(404).json(null)
        }
    },
    getAdmins: (req, res) => {
        let admins = userData.filter( user => user.type === 'admin')
        res.status(200).send(admins)
    },
    getNonAdmins: (req, res) => {
        let users = userData.filter( user => user.type !== 'admin')
        res.status(200).send(users)
    },
    getUserByType: (req, res) => {
        const {userType} = req.params
        let users = userData.filter( user => user.type === userType)
        res.status(200).send(users)
    },
    updateUser: (req, res) => {
        const {userid} = req.params
        let index = userData.findIndex( user => user.id === +userid)
        userData[index] = req.body
        res.status(200).send(userData)
    },
    addUser: (req, res) => {
        console.log(req.body)
        var id = userData[userData.length-1].id + 1
        console.log(id)
        userData.push({id: id, ...req.body})
        res.status(200).send(userData)
    },
    deleteUser: (req, res) => {
        const {userid} = req.params
        let index = userData.findIndex( user => user.id === +userid)
        userData.splice(index, 1)
        res.status(200).send(userData)
    }
} 