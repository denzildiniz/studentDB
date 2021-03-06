const Student = require('../models/schema');


const addEdit = async (req,res)=>{
    try {
        res.render('student/addEdit',{
            viewTitle:"Insert Data"
        })
    } catch (error) {
        console.log(error)
    }
}



const createStudent = async (req,res) =>{
    if(req.body._id != ""){
        editstudent(req,res);
        return
    }
        try {
            const student = new Student({
                name:req.body.name,
                email:req.body.email
            })
            let result = await student.save();
            res.status(201).redirect('students/list')
        } catch (error) {
            console.log(error)
        }
}
   




const allList = async (req, res) => {
    try {
        const student = await Student.find((err,docs)=>{
            if(!err){
                res.render('student/list',{
                    list:docs
                })
            }
        });
        // console.log(student)
    } catch (error) {
        console.log(error)
    }
}




const getOne = async (req, res) => {
    try {
        const student = await Student.findOne({_id:req.params.id});
        res.render('student/addEdit',{
            viewTitle:"update",
            student:student
        })
    //    const student = await res.render('student/addEdit').json(student)
    } catch (error) {
        console.log(error)
    }
}



const editstudent = async (req,res)=>{
    try {
        const student = await Student.findOneAndUpdate({_id:req.body._id}, req.body ,{
            new:true
        },(err,docs)=>{
            if(!err){
                res.redirect('/students/list')
            }
        });
        
    } catch (error) {
        console.log(error)
    }
}




const delStudent = async (req,res) =>{
    try {
        const student = await Student.findOneAndDelete({_id:req.params.id});
        res.redirect('/students/list')
    } catch (error) {
        console.log(error)
    }
}




module.exports={addEdit ,createStudent,allList,getOne ,editstudent,delStudent}