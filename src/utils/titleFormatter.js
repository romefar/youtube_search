
const numericCodes = {
    "&#32;" : " ",
    "&#33;" : "!",
    "&#34;" : '/"',
    "&#35;" : "#",
    "&#36;" : "$",
    "&#37;" : "%",
    "&#38;" : "&",
    "&amp;" : "&",
    "&apos;" : "'", 
    "&#39;" : "'"
}

const titleFormatter = (title) => {
    let codes = title.match(/&#?[a-z0-9]{2,8};/gi)
    
    if(codes == null) return title
    
    let escapedTitle = title
    
    codes.forEach(item => { 
        escapedTitle = escapedTitle.replace(item, numericCodes[item])
    })
   return escapedTitle
}

export default titleFormatter