// 預載jquery
import $ from 'jquery';

// 有效日期驗證
// testcase：1/31 = > true;
// testcase：2/31 = > false;
export const dayCheck = (data) => {
    // 先確認格式
    let regex = /^((0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01]))*$/;
    let result = false;
    if (regex.test(data)) {
        const mon = Number(data.split('/')[0]);
        const day = Number(data.split('/')[1]);
        // 確認天數符合該月份
        switch (mon) {
            case 1:
                if (day > 31) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            case 2:
                if (day > 29) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            case 3:
                if (day > 31) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            case 4:
                if (day > 30) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            case 5:
                if (day > 31) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            case 6:
                if (day > 30) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            case 7:
                if (day > 31) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            case 8:
                if (day > 31) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            case 9:
                if (day > 30) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            case 10:
                if (day > 31) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            case 11:
                if (day > 30) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            case 12:
                if (day > 31) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            default:
                result = false;
                break;
        }
    }
    return result;
}

// 必填確認，true = 有資料，false = 無資料
export const requireCheck = (data) => {
    let result = false;
    if (data === '' || data === null || data === undefined) {
        result = false;
    } else {
        result = true;
    }
    return result;
}

// 有效電話格式確認
export const telCheck = (data) => {
    let regex = /^([-_－—\s\(]?)([\(]?)((((0?)|((00)?))(((\s){0,2})|([-_－—\s]?)))|(([\)]?)[+]?))(886)?([\)]?)([-_－—\s]?)([\(]?)[0]?[1-9]{1}([-_－—\s\)]?)[1-9]{2}[-_－—]?[0-9]{3}[-_－—]?[0-9]{3}$/;
    if (data != '' && data != undefined) {
        if (regex.test(data)) {
            return true;
        } else {
            return false;
        }
    } else {
        return undefined;
    }
}

// 有效email格式確認
export const emailCheck = (data) => {
    let regex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if (data != '' && data != undefined) {
        if (regex.test(data)) {
            return true;
        } else {
            return false;
        }
    } else {
        return undefined;
    }
}

// ===============================================================================================================

// 千分位轉換(xxxxxxx轉成 x,xxx,xxx)
export const moneyTran = (data) => {
    let regex = /\B(?=(?:\d{3})+(?!\d))/g;
    return data.toString().replace(regex, ',');
}

// 千分位逆轉換( x,xxx,xxx轉成xxxxxxx)
export const moneyTran2 = (data) => {
    return data.split(',').join('');
}

// 日期格式轉換(將Date() 轉成 yyymmdd hh:mm:ss)
export const dateTran = (data) => {
    let arr = data.split(' ');
    let mon = '';
    let day = arr[1].replace(',', '');
    let year = '';
    let time = '';
    let result = '';
    switch (arr[0]) {
        case 'Jan':
            mon = '01';
            break;
        case 'Feb':
            mon = '02';
            break;
        case 'Mar':
            mon = '03';
            break;
        case 'Apr':
            mon = '04';
            break;
        case 'May':
            mon = '05';
            break;
        case 'Jun':
            mon = '06';
            break;
        case 'Jul':
            mon = '07';
            break;
        case 'Aug':
            mon = '08';
            break;
        case 'Sep':
            mon = '09';
            break;
        case 'Oct':
            mon = '10';
            break;
        case 'Nov':
            mon = '11';
            break;
        case 'Dec':
            mon = '12';
            break;
        default:
            break;
    }

    if ((Number(arr[2]) - 1911).toString().split('').length != 3) {
        year = '0' + (Number(arr[2]) - 1911).toString();
    } else {
        year = (Number(arr[2]) - 1911).toString();
    }

    if (arr[1].replace(',', '').length == 1) {
        day = '0' + day;
    }


    if (arr[4] == 'PM') {
        let timeArr = arr[3].split(':');
        let hour = Number(timeArr[0]) + 12;
        time = hour + ':' + timeArr[1] + ':' + timeArr[2];
    } else {
        time = arr[3];
    }
    result = year + mon + day + ' ' + time;

    return result;
}

// 日期格式轉換(將Date() 轉成yyy/mm/dd)
export const dateTran2 = (data) => {
    let arr = data.split(' ');
    let mon = '';
    let day = arr[1].replace(',', '');
    let year = '';
    let time = '';
    let result = '';
    switch (arr[0]) {
        case 'Jan':
            mon = '01';
            break;
        case 'Feb':
            mon = '02';
            break;
        case 'Mar':
            mon = '03';
            break;
        case 'Apr':
            mon = '04';
            break;
        case 'May':
            mon = '05';
            break;
        case 'Jun':
            mon = '06';
            break;
        case 'Jul':
            mon = '07';
            break;
        case 'Aug':
            mon = '08';
            break;
        case 'Sep':
            mon = '09';
            break;
        case 'Oct':
            mon = '10';
            break;
        case 'Nov':
            mon = '11';
            break;
        case 'Dec':
            mon = '12';
            break;
        default:
            break;
    }

    if ((Number(arr[2]) - 1911).toString().split('').length != 3) {
        year = '0' + (Number(arr[2]) - 1911).toString();
    } else {
        year = (Number(arr[2]) - 1911).toString();
    }

    if (arr[1].replace(',', '').length == 1) {
        day = '0' + day;
    }


    if (arr[4] == 'PM') {
        let timeArr = arr[3].split(':');
        let hour = Number(timeArr[0]) + 12;
        time = hour + ':' + timeArr[1] + ':' + timeArr[2];
    } else {
        time = arr[3];
    }
    result = year + '/' + mon + '/' + day;

    return result;
}

// 日期格式轉換(西洋 轉成yyy/mm/dd hh:mm:ss)
export const dateTran3 = (data) => {
    let arr = data.split(' ');
    let mon = '';
    let day = arr[1].replace(',', '');
    let year = '';
    let time = '';
    let result = '';
    switch (arr[0]) {
        case 'Jan':
            mon = '01';
            break;
        case 'Feb':
            mon = '02';
            break;
        case 'Mar':
            mon = '03';
            break;
        case 'Apr':
            mon = '04';
            break;
        case 'May':
            mon = '05';
            break;
        case 'Jun':
            mon = '06';
            break;
        case 'Jul':
            mon = '07';
            break;
        case 'Aug':
            mon = '08';
            break;
        case 'Sep':
            mon = '09';
            break;
        case 'Oct':
            mon = '10';
            break;
        case 'Nov':
            mon = '11';
            break;
        case 'Dec':
            mon = '12';
            break;
        default:
            break;
    }

    if ((Number(arr[2]) - 1911).toString().split('').length != 3) {
        year = '0' + (Number(arr[2]) - 1911).toString();
    } else {
        year = (Number(arr[2]) - 1911).toString();
    }

    if (arr[1].replace(',', '').length == 1) {
        day = '0' + day;
    }

    if (arr[4] == 'PM') {
        let timeArr = arr[3].split(':');
        let hour = Number(timeArr[0]) + 12;
        time = hour + ':' + timeArr[1] + ':' + timeArr[2];
    } else {
        time = arr[3];
    }
    result = year + '/' + mon + '/' + day + ' ' + time;

    return result;
}

// 日期格式轉換(yyy/mm/dd 轉成yyymmdd)
export const dateTran4 = (data) => {
    let arr = data.split('/');
    let mon = arr[1];
    let day = arr[2];
    let year = arr[0];
    let result = '';

    result = year + mon + day;

    return result;
}