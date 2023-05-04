import moment from 'moment'
import 'moment-timezone';

export const dateTimeUtcConverter = (dateUtc) => {
    let date = moment.utc(dateUtc)
    .format('YYYY-MM-DD HH:mm:ss');
        
    var local = moment(date)
    .local()
    .format('YYYY-MM-DD HH:mm:ss');

    return local;
}