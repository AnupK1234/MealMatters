const contactFormController = require("express").Router()
const Contact = require("../model/Contact.js")


contactFormController.post("/" , async(req , res) => {
   try{
       if(req.body.name && req.body.email && req.body.subject){
           const newLead = {
            name : req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
           }   

           const lead = await Contact.create(newLead)
           
           return res.status(200).json({
            status: true,
            message: "Form submitted successfully",
            data: lead,
            statusCode: 200
          })
       }else{
        return res.status(400).send({
          message: "send the fields name, email, subject mandatorily"
        })
       }
    }
    catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})


module.exports = contactFormController;