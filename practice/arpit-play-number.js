
function ArpitNumber(int) {
    let result = "upset"
    const strArr = int.toString().split("")

    if (int % Number(strArr[0]) == 0) {
        let all = 1
        for (let j = 1; j < strArr.length; j++) {
            if (!(int % Number(strArr[j]))) {
                all += 1
            }
        }
        if (all == strArr.length) {
            result = 'happier'
        } else {
            for (let i = 0; i < strArr.length; i++) {
                if (!(int % Number(strArr[i]))) {
                    result = 'happy'
                    break
                }
            }
        }
    } else {
        for (let i = 0; i < strArr.length; i++) {
            if (!(int % Number(strArr[i]))) {
                result = 'happy'
                break
            }
        }
    }
    return result

}

const int = 29;
console.log(ArpitNumber(int))
