let Generate  = require("../utils/generate")


module.exports = function(HoTen,Lop){
    this.id = Generate.randomString(16);
    this.MSSV = Generate.randomNumber(11);
    this.HoTen = HoTen;
    this.Lop = Lop;
}