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

// router.get('/', (req, res) => {

// });

// router.get('/:id', (req, res) => {

// });

// router.get('/:id/posts', (req, res) => {

// });

// router.delete('/:id', (req, res) => {

// });

// router.put('/:id', (req, res) => {

// });

//custom middleware

function validateUserId(req, res, next) {
    
    
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

