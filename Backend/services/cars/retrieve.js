const db = require('../../database/connection')
const retrieve = () => {
 

    const getVehicles = async (search) => {
        try{
            const query = `Select * from vehicles where brand LIKE '%${search}%' or model LIKE '%${search}%'
            or year LIKE '%${search}%' or variant LIKE '%${search}%' or marketvalue LIKE '%${search}%'`
            const data = await db(query)
            return data;
        }catch{
            console.log('Error retrieving vehicle information because database is down.')    
        }
    
    }


    return {getVehicles}

}

module.exports = retrieve


