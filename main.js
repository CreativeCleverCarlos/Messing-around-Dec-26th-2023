/**
 given a value that is greater than 9, sum the individual digits together
**/

function addEmUp(number){
    if (number < 9){
        return "Pick a larger number"
    } else if (number >= 9){
        let splitEm = number.toString().split("")
        let toNumbers = splitEm.map((x) => Number(x))
        let grandTotal = toNumbers.reduce((sum, num) => sum + num);
        console.log(grandTotal)

        return grandTotal
    }
}

addEmUp(99999)