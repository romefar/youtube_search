import moment from 'moment'

const dateFormatter = (date, format = null) => {
    if(format) return moment(date).format(format)
    return moment(date).fromNow()
}

export default dateFormatter