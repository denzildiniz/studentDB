const Student = require('../models/schema');

const addEdit = async (req,res)=>{
    try {
        res.render('student/addEdit',{
            viewTitle:"heeeeee"
        })
    } catch (error) {
        console.log(error)
    }
}



module.exports={addEdit}