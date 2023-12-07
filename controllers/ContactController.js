const Contact = require('./../models/contact');
const addContact = async(req, res) =>{
    try{
        const contact = await Contact.create(req.body)
        res.json(contact)
    }catch(error){
        res.json({
            error,
        })
    }

}

const getContacts = async(req, res) =>{
    try{
        const contact = await Contact.find()
        res.json(contact)
    }catch(error){
        res.json({
            error,
        })
    }
}
const deleteContact = async(req, res) =>{
    try{
        const {id } = req.params ;
        const contact  = await Contact.deleteOne({_id:id})
        res.json(contact)
    }catch(error){
        res.json({
          error 
        })
    }
}

module.exports = {addContact , getContacts ,deleteContact }