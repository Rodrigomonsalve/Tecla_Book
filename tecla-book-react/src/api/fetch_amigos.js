const apiFriends = async (friendsData) => {
    return await fetch('http://localhost:3001/search',{
        method: 'POST',
        body: JSON.stringify(friendsData),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(async (res)=>{
       let response = await res.json()
       console.log(response)
       return(response)})
    // .then(res => console.log(res))
    // .then(res => (res))
    .catch(err => console.log(err))


    // try {
    //     let resp = await fetch('http://localhost:3001/search',{
    //         method: 'POST',
    //         body: JSON.stringify(friendsData),
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     resp = resp.json() 
    //     console.log(resp)
    //     return (resp)
    // }catch (e) {
    //     console.log(e)
    // }
    
}

export {apiFriends};