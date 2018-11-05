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

router.get('/', (req, res) => {
  connection((db) => {
    db.collection('employees')
      .find()
      .toArray()
      .then((employees) => {
        response.data = employees;
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});

router.post('/', (req, res) => {
  connection((db) => {
    db.collection('employees').insertOne(req.body, (err, result) => {
      console.log(req.body);
      if (err) {
        return console.log(err);
      } else {
        return res.json({ message: "post successfull" });
      }
    });
  });
});

router.put('/', (req, res) => {
  console.log(req.body);
  connection((db) => {
    db.collection('employees').updateOne(
      { "_id": ObjectID(req.body._id) }, // Filter
      { $set: {
        "name": req.body.name,
        "onProject": req.body.onProject,
        "company": {
          "name": req.body.company.name
        }
       } }, // Update
      { upsert: true } // add document with req.body._id if not exists
    ).then(() => {
      return res.json({
        status: 200,
        message: "update successfull"
      });
    });
  });
});

router.delete('/', (req, res) => {
  const _id = req.query._id;

  connection((db) => {
    db.collection('employees')
      .deleteOne(
        { "_id": ObjectID(_id) }, // Filter
        (err, result) => {
          if (err) return sendError(err, res);
          res.json({ message: 'employee with id ' + _id + ' deleted' })
        }
      )
  });
});

module.exports = router;
