const apiCourse = async (userCourse) =>{
    
    await fetch('http://localhost:3001/course',{
         method: 'POST',
         body: JSON.stringify(userCourse),
         headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
         }
     })
     .then(res=>res.json())
     .catch(err => console.log(err))
 }
 
 export {apiCourse};