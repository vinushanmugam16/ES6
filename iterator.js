// function Iterator(array){
//  let index=0;
//  return {
//     next: function(){
//         if(index<array.length){
//             return {
//                 value:array[index++],
//                 done:false
//             };
//         }
//         else{
//                 return {
//                     value: undefined,
//                     done:true
//                 };
//             }
//     }
//   }
// }
// const array=[2,4,6,8,10];
// const values=Iterator(array); 
// console.log(values.next());
// console.log(values.next());
// console.log(values.next());
// console.log(values.next());
// console.log(values.next());
// console.log(values.next());





function Word(spliting){
    let len =spliting.length;
    let i=0;
    return {
        next : function(){
            if(i < len){
                return {
                    value : spliting[i++], 
                    done : false
                }
            }
                else{
                    return {
                        value :'length exceeded',
                        done : true
                    }
                }
            }
        }
    }
const string=('Iterator returns sequence iterate of string');
const spliting=string.split(" ");
// console.log(spliting);
const value=Word(spliting);
console.log(value.next());
console.log(value.next());
console.log(value.next());
console.log(value.next()); 
console.log(value.next());
console.log(value.next());
console.log(value.next());
 




