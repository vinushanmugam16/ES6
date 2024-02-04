// class AddingWords{
//     static word='Vinu'
//     static getword(){
//         return this.word;
//     }
// }
// class Sentence extends AddingWords{
//     static getSentence(){
//         return (`Hi, ${super.word}`);
//     }
// }
// console.log(Sentence.getSentence());
// console.log(AddingWords.getword());



/// statics property used in static method only 
class AddingWords{
    static word='Vinu'
     getword(){
        return this.word;
    }
}
class Sentence extends AddingWords{
    static getSentence(){
        return (`Hi, ${super.word}`);
    }
}
const result = new AddingWords();
// console.log(Sentence.getSentence());
console.log(result.getword());



c