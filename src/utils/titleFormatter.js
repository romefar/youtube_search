
const numericCodes = {
    "&#32;" : " ",
    "&#33;" : "!",
    "&#34;" : '"',
    "&quot;": '"',
    "&#35;" : "#",
    "&#36;" : "$",
    "&#37;" : "%",
    "&#38;" : "&",
    "&amp;" : "&",
    "&apos;" : "'", 
    "&#39;" : "'",
    "&#40;" : "(",
    "&#41;" : ")",
    "&#42;" : "*",
    "&#43;" : "+",
    "&#44;" : ",",
    "&#45;" : "-",
    "&#46;" : ".",
    "&#47;" : "/",
    "&#58;" : ":",
    "&#59;" : ";",
    "&#61;" : "=",
    "&#63;" : "?",
    "&#64;" : "@",
    "&#92;" : "\\",
    "&#94;" : "^",
    "&#95;" : "_",
    "&#124;" : "|"
}

const titleFormatter = (title) => {
    let codes = title.match(/&#?[a-z0-9]{2,8};/gi)
    
    if(codes == null) return title
    
    let escapedTitle = title
    
    codes.forEach(item => { 
        escapedTitle = escapedTitle.replace(item, numericCodes[item] || "")
    })
   return escapedTitle
}

export default titleFormatter