const express=require('express')
const mongoose=require('mongoose')
const contact=require('../../models/contactModel')

var contacts={
    save: (req,res) =>{
            let newContact=new contact({
                firstName:req.body.firstName,
                lastName: req.body.lastName,
                phone:req.body.phone
            })
        newContact.save((err,contact) =>{
            if(err){
                res.json(err)
            }
            else{
                res.json({msg:"added contact successfully"})
            }
        })
    },
    delete:  (req,res) =>{
        console.log(req.params)
        contact.remove({_id: req.params.id},(err,contact)=>{
            if(err){
                res.json({msg:"error in deleting"})
            }
            else{
                res.json(contact)
            }
        })

    },
    list:(req,res) =>{
        contact .find({},function (err,contacts) {
            res.json(contacts)
        })
    }
}
module.exports=contacts