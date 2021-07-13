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
   try {
       const student = new Student({
           name:req.body.name,
           email:req.body.email
       })
       let result = await student.save();
       res.status(201).render('student/list')
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

const editstudent = async (req,res)=>{
    try {
        res.render('student/addEdit')
    } catch (error) {
        console.log(error)
    }
}


module.exports={addEdit ,createStudent,allList ,editstudent}