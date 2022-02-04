const sequelize = require('./utils/database');
const Student = require('./models/student');
const Marksheet = require('./models/marksheet');

Student.hasMany(Marksheet); // Establish the one to many relationship

let studentId = null;
/**
 * Logic to create database table and play with it
 * 
 * {force:true} -> this will recreate the table on re-start
 */

sequelize.sync({ force: true }).then(result => {
    //console.log(result); // this will print the outcome of tabel creation
    /**
     * Since the tables will be created by now, let's create a Student record
     */
    return Student.create({ name: "Vsihwa Mohan", email: "kankvish@gmail.com" });
}).then(student => {
    console.log("Student created :", student);
    studentId = student.id;
    /**
     * Now I should add subject for the students
     */
    return student.createMarksheet({ marks: 99 });
}).then(marksheet => {
    console.log("Markseet added is : ", marksheet);

    //Let's try to find all the markseets of the student
    return Marksheet.findAll({ where: studentId });
}).then(marksheets => {
    console.log("All the markseets are : ", marksheets);
})

    .catch(err => {
        console.log(err);
    })


