const value=['Z', 'a', 'z', 'ä']
const source=new Intl.Collator("de");
console.log(value.sort(source.compare));


const num=[1,4,7,2,3];
const source2=new Intl.Collator("de");
console.log(num.sort(source2.compare));



const lang1 =new Intl.Collator('en');
const lang2 =new Intl.Collator('de');
const lang3 =new Intl.Collator('sv');
console.log(lang1.compare('t','a'));
console.log(lang2.compare('z','ä'));
console.log(lang3.compare('z','ä'));


const source3=new Intl.Collator();
console.log(source3.compare('f','a'));
console.log(source3.compare('a','m'));


//Number Format
const amount=14567.809;
console.log(new Intl.NumberFormat("en").format(amount));
console.log(new Intl.NumberFormat('de').format(amount));
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(amount));


//currency 
const number=235.122;
console.log(new Intl.NumberFormat("en-US",{style:'currency', currency:'USD'}).format(number));




//date time format
const state=new Date();
console.log(new Intl.DateTimeFormat("en-US").format(state));
console.log(new Intl.DateTimeFormat("ja-JY").format(state));
console.log(new Intl.DateTimeFormat("de-AT").format(state));


const options={
    time:'numeric',
    month:'long',
    year:'numeric',
    day:'2-digit',
    timezone:'longOffset'
}
console.log(new Intl.DateTimeFormat("en-US", options).format(new Date()));




