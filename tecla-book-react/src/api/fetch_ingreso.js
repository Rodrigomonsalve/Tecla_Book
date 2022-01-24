const apiLogin = async (userData) =>{
    return await fetch('http://localhost:3000/login',{
        method: 'POST',
        body: JSON.stringify(userData),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res=>res.json())
    .catch(err => console.log(err))
}

export {apiLogin};