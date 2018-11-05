const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err);
    closure(client.db());
  });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.post('/users', (req, res) => {
  connection((db) => {
    db.collection('users').insertOne(req.body, (err, result) => {
      console.log(req.body);
      if (err) {
        return console.log(err);
      } else {
        return res.json({message: "post successfull"});
      }
    });
  });
});

router.put('/users', (req, res) => {
  connection((db) => {
    db.collection('users').updateOne(
      { "_id": ObjectID(req.body._id)}, // Filter
      { $set: { "name": req.body.name } }, // Update
      { upsert: true } // add document with req.body._id if not exists
    )
  });
});

router.delete('/users/', (req, res) => {
  const _id = req.query._id;
  console.log(_id);

  connection((db) => {
    db.collection('users')
      .deleteOne(
        { "_id": ObjectID(_id)}, // Filter
        (err, result) => {
          if (err) return sendError(err, res);
          res.json({message: 'user with id ' + _id + ' deleted'})
        }
      )
  });
});

// should only export the router
module.exports = router;
