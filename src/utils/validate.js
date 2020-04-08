import trim from './trim'

const validate = (string) => { 
    const str = trim(string);
    return str.length
}

export default validate;