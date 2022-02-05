const dataApi = async () => {
    let data1 = await fetch ("http://localhost:3001/data")
    console.log(data1)
    //return data1;
   
    }
    
export {dataApi};