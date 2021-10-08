module.exports.num = function nomer(the){
    if(the%2==0){
     console.log('число четное ')
    }else{console.log('число не четное')}
}
// nomer(6)

module.exports.suma = function pluse(n){
    let arr =[]
    for(let i = 0; i<=n;i++){
        arr.push(i)
    } 
    let a =(cherch,cuma)=>cherch+cuma   
    console.log(arr.reduce(a))
}
// pluse(8)

module.exports.str = function delStr(streng){
   let a = streng.split('');
   delete a.pop()
   delete a.shift()     
   console.log(a.join(""))
}
// delStr('hello')

module.exports.generator = function gen(a,b,c)  {
    let arr1 = []
   for(let i = a; i<=b;i+=c){
    arr1.push(i)
   }
   console.log(arr1)
}
// gen(2,10,2)




