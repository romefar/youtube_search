import numeral from 'numeral'

const viewCountFormatter = (number, beautify = false) => {
    number = parseInt(number)

    if(beautify) return numeral(number).format('0,0').split(',').join(" ")
    if(number < 1000) return number

    let formatted = numeral(number).format('0,0').split(",")
    let numb = parseInt(formatted[1][0])
    let format = ""
    
    if(numb === 0) {
        format = "0 a"
    } else {
        format = "0.0 a"
    } 
    
    return numeral(number).format(format)  
}

export default viewCountFormatter;