

module.exports = {
    randomNumber:function GenerateRandomStringNumber(length){
        let result = "";
        let source = "0123456789"
        for (let index = 0; index < length; index++) {
           let rd = Math.floor(Math.random()*source.length);
           result+=source.charAt(rd);
        }
        return result;
    },
    randomString:function GenerateRandomString(length){
        let result = "";
        let source = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        for (let index = 0; index < length; index++) {
           let rd = Math.floor(Math.random()*source.length);
           result+=source.charAt(rd);
        }
        return result;
    }
}