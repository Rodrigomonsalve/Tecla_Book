const dataApi = async (user) => {
   return await fetch ("http://localhost:3001/data", {
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    .then(async (res)=>{
        let response = await res.json()
        console.log(response)
        return(response[0])})
     // .then(res => console.log(res))
     // .then(res => (res))
     .catch(err => console.log(err))

    }
    
export {dataApi};