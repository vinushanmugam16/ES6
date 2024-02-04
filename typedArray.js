const source1=new ArrayBuffer(10);
console.log(source1);
console.log(source1.byteLength);
const content=source1.slice(4,8);
console.log(content);


let arr=new DataView(source1,5,2);
console.log(arr);



const source=new Uint8Array(10);
console.log(source);


const result=new Uint8Array(17);
console.log(result.fill(33));

const state=new Uint8Array(23);
console.log(state.length);
console.log(state.BYTES_PER_ELEMENT);

const state1=new Int16Array([87,23,90]);
console.log(Object.keys(state1));
console.log(Object.values(state1));
console.log(state1.BYTES_PER_ELEMENT);

const stateArr=new Int8Array(6);
stateArr[0]=2;
console.log(stateArr);


//buffer
const data=Buffer.from("Hello,Welcome");
// console.log(data.slice(0,5));
const source2=data.slice(0,5);
console.log(source2.toString());


const firstName=Buffer.from("Vinu");
const lastName=Buffer.from("dharshini");
const fullName=Buffer.concat([firstName,lastName]);
console.log(fullName.toString());


const state2=new ArrayBuffer(12);
console.log(state2.byteLength);

