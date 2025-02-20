let promise = new Promise(function(resolve,reject){
   let rd = 6;
   console.log(rd);
   if(rd%2==0){
      resolve(rd);
   }
   else{
      reject(rd);
   }
})
// Su dung code co san, hay viet promise sao cho 
// sau khi qua lần then đầu tiên, kết quả bị chia 2
// Nếu kết qủa ra số lẻ thì lập tức rơi vào catch
promise.then(
   function(data){
      console.log("Ban Random duoc "+data+" diem, Xin chuc mung");
      return data/2;
   }
).then(
   function(data){
      console.log("Ban Random duoc "+data+" diem, Xin chuc mung lan 2");
   }
)
.catch(
   function(data){
      console.log("Ban Random duoc "+data+" diem, Xin chia buon");
   }
)
.finally(
   function(){
      console.log("Done");
   }
)