const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const initDb = () => {
  mongoose.connect('mongodb://localhost/mikradb')
  .then(() => console.log('MongoDB is started'))
  .catch(err => console.log('ERROR: ' + err))
}

// custom data types
const userStatuses = {
  NEW: 'NEW',
  EMAIL_SENT: 'EMAIL_SENT',
  VERIFIED: 'VERIFIED',
  BLOCKED: 'BLOCKED'
}
const grantStatuses = {
  NEW: 'NEW',
  BIDS_START: 'BIDS_START',
  BIDS_FINISH: 'BIDS_FINISH',
  CLOSED: 'CLOSED'
}

// init schemas
const usersSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, dropDups: true },
  status: { type: String, default: userStatuses.NEW },
  userpic: String,
  admin: { type: Boolean, default: false },
  created: { type: Date, default: Date.now}
})
const grantsSchema = mongoose.Schema({
  name: String,
  description: String,
  image: String,
  status: { type: String, default: grantStatuses.NEW },
  created: { type: Date, default: Date.now},
  bidsStart: Date,
  bidsFinish: Date,
  cost: Number,
  winner: ObjectId
})
const bidsSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: ObjectId, unique: true, dropDups: true },
  photos: Array,
  created: { type: Date, default: Date.now},
  grant: ObjectId
})

// init models
const User = mongoose.model('User', usersSchema)
const Grant = mongoose.model('Grant', grantsSchema)
const Bid = mongoose.model('Bid', bidsSchema)

//
// db helpers
//
// USERS
const createUser = (user) => {
  let newUser = new User(user)
  newUser.save((err, newUser) => {
    if (err) return console.error(err.message)
  })
}
const getUser = (user) => {
  User.find({ email: user.email }, (err, user) => {
    if (err) return console.error(err)
    return user
  })
}
// GRANTS
const createGrant = (grant) => {
  let newGrant = new Grant(grant)
  newGrant.save((err, newGrant) => {
    if (err) return console.error(err.message)
  })
}
const getGrant = (grant) => {
  Grant.find({ name: grant.name }, (err, grant) => {
    if (err) return console.error(err)
    return grant
  })
}
// BIDS
const createBid = (bid) => {
  let newBid = new Bid(bid)
  newBid.save((err, bid) => {
    if (err) return console.error(err.message)
  })
}
const getBid = (bid) => {
  Bid.find({ _id: bid._id }, (err, bid) => {
    if (err) return console.error(err)
    return bid
  })
}

//
// exports
//
module.exports = {
  init: initDb,
  methods: {
    users: {
      add: createUser,
      get: getUser
    },
    grants: {
      add: createGrant,
      get: getGrant
    },
    bids: {
      add: createBid,
      get: getBid
    }
  }
}
