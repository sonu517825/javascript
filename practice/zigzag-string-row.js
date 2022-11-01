function printNewZigZagString(str, n) {

    if (n == 1) {
        console.log(str)
        return;
    }

    let arr = new Array(n).fill("");
    let row = 0;
    let down = true;
    let result = ""
    let temp = ""

    for (let i = 0; i < str.length; ++i) {
        arr[row] += (str.split("")[i]);
        if (row == n - 1) {
            down = false;
        }
        else if (row == 0) {
            down = true;
        }
        if (down) {
            row++;
        }
        else {
            row--;
        }
    }

    for (let i = 0; i < n; ++i) {
        i == n - 1 ? result += `${arr[i]} = ` : result += `${arr[i]} + `
        temp += arr[i]
    }

    result += temp
    return result
}

//const string = "ZOPSMARTHIRING"
const string = "GEEKSFORGEEKS"
const rows = 3;
console.log(printNewZigZagString(string, rows))