const apiRegister = async (userRegister) => {
    
       await fetch ("http://localhost:3001/user", {
            method:"POST",
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
                    },
            body: JSON.stringify(userRegister)
                })
                .then(res=>res.json())
                .catch(err=>console.log(err))
                
        }
    

export {apiRegister}