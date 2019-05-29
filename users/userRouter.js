const express = require("express");
const router = express.Router();
const Users = require("./userDb");
router.use(express.json())


router.post("/", validateUser, async (req, res) => {
    
    const newUser = req.body;
  
    try {
      const user = await Users.insert(newUser);
      res.status(201).json({ success: true, user });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "There was an error while saving the post to the database."
      });
    }
  });


// router.post('/:id/posts', (req, res) => {

// });

router.get('/', async (req, res) => {
    try {
        const users = await Users.get();
        res.status(200).json(users);
      } catch (error) {
       
        res.status(500).json({
          message: 'Error retrieving users',
        });
      }

});

router.get('/:id', validateUserId, async (req, res) => {

try {
    const user = await Users.getById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the hub',
    });
  }

});

// router.get('/:id/posts', (req, res) => {

// });

// router.delete('/:id', (req, res) => {

// });

// router.put('/:id', (req, res) => {

// });

//custom middleware

function validateUserId (req, res, next) {
    const user = Users.getById(req.params.id)
    if (!user) {
       res.status(404).json({ message: "invalid user id"});
      } else {
        next()
      }
    
};

function validateUser(req, res, next) {
console.log(req.body.name)
    if (!req.body) {
       
        res.status(400).json({
         errorMessage: "missing user data"
       });
     }
     else if (!req.body.name)
     {

         res.status(400).json({
             errorMessage: "missing required name field"
           });
     }
     else{
     next()
 }

};

function validatePost(req, res, next) {

};

module.exports = router;

