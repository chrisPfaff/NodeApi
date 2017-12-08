let ObjectID = require('mongodb').ObjectID;

module.exports = (app, db) => {
  app.post('/notes', (req, res) => {
    const note = {text: req.body.body, title: req.body.title};
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({error: 'An error happened'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    db.collection('notes').findOne({"_id": ObjectID(id)}, (err, item) => {
      if (err) {
        res.send({error: 'An error happened'});
      } else {
        res.send(item);
      }
    })
  })

  app.get('/', (req, res) => {
    res.send('hello');
  })
};
