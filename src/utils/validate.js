import trim from './trim'

const validate = (string) => { 
    const str = trim(string)
    return [str, str.length]
}

export default validate;