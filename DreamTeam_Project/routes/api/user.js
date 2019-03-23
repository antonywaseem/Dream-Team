const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const User = require('../../models/User')
const validator = require('../../validations/userValidation')
const bcrypt = require('bcryptjs')

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
router.use(bodyParser.urlencoded({
    extended: false
}))


//GET BY USER ID
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id);
        if (!user)
            return res.status(404).send({
                error: "This User does not exist"
            });
        res.json({
            data: user
        });
    } catch (err) {
        res.json({
            msg: err.message
        });
    }
});


//CREATE USER (M&M)
router.post('/', async (req,res) => {
    const {name, accountType , gender, nationality, typeID, numberID, dateOfBirth, address, phoneNumber,
    faxNumber, accountStatus, email, password, investorType,capital, capitalCurrency   }  = req.body
    const user = await User.findOne({email})
    if(user) return res.status(400).json({error: 'Email already exists'})
    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)
    if(req.body.accountType==='investor')
    var isValidated = validator.createInvestorValidation(req.body)
    else if(req.body.accountType==='lawyer')
    var isValidated = validator.createLawyerValidation(req.body)
    else if(req.body.accountType==='reviewer')
    var isValidated = validator.createReviewerValidation(req.body)
    else if(req.body.accountType==='admin')
    var isValidated = validator.createAdminValidation(req.body)
      

    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newUser = new User({
        name,
        accountType ,
        gender,
        nationality,
        typeID,
        numberID,
        dateOfBirth,
        address,
        phoneNumber,
        faxNumber,
        accountStatus,
        email,
        password : hashedPassword,
        investorType,
        capital,
        capitalCurrency

        })
    newUser
    .save()
    .then(user => res.json({data: user}))
    .catch(err => res.json({error: 'Can not create User'}))
})


// UPDATE USER INFO
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const law = await Admin.find({
            id
        })
        if (!law) return res.status(404).send({
            error: 'Admin does not exist'
        })
        // const isValidated = validator.updateValidation(req.body)
        //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedAdm = await Admin.findByIdAndUpdate(id, req.body)
        res.json({
            msg: 'Admin updated successfully'
        })
    } catch (error) {
        // We will be handling the error later
        console.log(error)
    }
})


//DELETE USER BY ID
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const deletedUser = await User.findByIdAndDelete(id);
        res.json({
            msg: "The User has been deleted successfully",
            data: deletedUser
        })
    } catch (error) {
        res.json({
            msg: error.message
        });
    }
})


module.exports = router