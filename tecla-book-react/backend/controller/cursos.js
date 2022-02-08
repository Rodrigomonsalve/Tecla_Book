const courseModel = require ("../model/cursos.js");



module.exports.addCourse = async (course) => {
    await courseModel.addCourses(course)
    return "Curso añadido"

}
 
