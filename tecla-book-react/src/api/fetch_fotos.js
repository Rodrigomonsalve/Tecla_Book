const apiPhoto = async (userPhotos) => {
    //console.log(userPhotos)
    return await fetch ("http://localhost:3001/getPhotos", {
          method:"POST",
          headers:{
              //"Accept": "application/json",
              "Content-Type": "application/json"
                  },
          body: JSON.stringify(userPhotos)
              })
              .then(res=>res.json())
              .catch(err=>console.log("error de fotos", err))
              
      }
  
export {apiPhoto}