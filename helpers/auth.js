const bicrypt = require('bcrypt');

const hashPassword = (password) =>{
    return new Promise((resolve , reject) =>{
        bicrypt.genSalt(12, (error ,salt)=>{

            if(error){
                reject(error);
            }
            bicrypt.hash(password,salt , (error , hash)=>
            {
                if(error) {
                    reject(error)
                }
                resolve(hash);
            })

        })
    })
}

const comparePassword = (password , hashed) =>{

    return bicrypt.compare(password , hashed);

}


module.exports = {
    comparePassword ,
    hashPassword
}