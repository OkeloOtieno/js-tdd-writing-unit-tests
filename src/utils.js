// Your code here
export function pointsForWord(word){
    let points = 0
    for(let char of word){
        points += /[aeiou]/i.test(char) ? 1 : 2;
    }
    return points
}