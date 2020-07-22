const router = require('express').Router();

const Users = require('./users-model.js');

// DEFAULT -- get full list of users when token is present
router.get('/', (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.send(err));
});

// STRETCH -- get by department
// router.get('/', (req, res) => {
//   Users.findBy(req.jwt.dept)
//     .then((users) => {
//       console.log('filtered', users);
//       res.status(200).json(users);
//     })
//     .catch((err) => res.send(err));
// });

module.exports = router;
