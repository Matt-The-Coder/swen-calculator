
const baseURL = import.meta.env.VITE_BASEURL
const Fetcher = async (url) =>{
    const responseObjectCategory = {
        errorMessage: '',
        data: []
    }
  try {
    const data = await fetch(baseURL+ url)
    if(!data.ok){
      throw new Error('Cannot fetch, server is down') 
    }
    const result = await data.json()
    responseObjectCategory.errorMessage = ''
    responseObjectCategory.data = result
  } catch (error) {
    responseObjectCategory.errorMessage = error
  } 

  return responseObjectCategory
   
}


const getCarInfo= async (url) => {
    const result = await Fetcher(url)
    return result
}

export {getCarInfo}