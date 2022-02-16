const apiRegister = async (userRegister) => {
    
      return await fetch ("http://localhost:3001/user", {
            method:"POST",
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
                    },
            body: JSON.stringify(userRegister)
                })
                .then(console.log(res=>res.json()))
                .catch(err=>console.log(err))
                
        }
    

export {apiRegister}