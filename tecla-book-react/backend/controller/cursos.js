const courseModel = require ("../model/cursos.js");

module.exports.listCourses = async () => {
    let result = await courseModel.listCourse()
    return result;
}

module.exports.addCourses = async (course) => {
    await courseModel.addCourse(course)
    return "Curso añadido"

}
 
