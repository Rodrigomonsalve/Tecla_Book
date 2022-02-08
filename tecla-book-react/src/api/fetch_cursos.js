const apiCourse = async (userCourse) =>{
    return await fetch('http://localhost:3001/course',{
         method: 'POST',
         body: JSON.stringify(userCourse),
         headers:{
             'Content-Type': 'application/json'
         }
     })
     .then(res=>res.json())
     .catch(err => console.log(err))
 }
 
 export {apiCourse};