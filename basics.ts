const add = (n1: number, n2: number, showResult: boolean, phrase: string) =>{
   
const result = n1 + n2

    if (showResult) {
        console.log(phrase + result)
        
    } else {
        return result;
    }
} 

const printResult = true
const resultPhrase = 'Result is: '

const result = add(5, 2.8, printResult, resultPhrase)

