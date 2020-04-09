let bcrypt=require('bcryptjs');

module.exports={
    //加密  加密： var hash = bcrypt.hashSync(用户传过来的明文密码, 加盐数); 

    hashSync:(password)=>{
        let salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password,salt)
    },

// 解密校验:  bcrypt.compareSync(用户传过来的明文密码, hash); // true|false
    compareSync:(sendPassword, hash) => bcrypt.compareSync(sendPassword,hash)
}

