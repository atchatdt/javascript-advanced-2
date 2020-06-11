// Thuật toán tìm kiếm
let arr = [1, 5, 9, 2, 7, 3, 4, 6, 8, 10];
arr = arr.sort((a, b) => a - b)
console.log(arr)
console.time('t1');
function timKiemNhiPhan(arr, x) {
    let left = 0;
    let right = arr.length - 1
    do {
        mid = parseInt((right + left) / 2);
        if (arr[mid] === x) {
            return mid
        }
        if (arr[mid] < x) {
            left = mid + 1
        }
        if (arr[mid] > x) {
            right = mid - 1
        }
    } while (left <= right);
    return -1;
}

let result = timKiemNhiPhan(arr, 10)
console.timeEnd('t1')
console.log(result)

console.time('t2')
function timKiemNhiPhan2(arr, x) {
    let left = 0;
    let right = arr.length - 1
    do {
        mid = parseInt(left+(((right-left)/(arr[right]-arr[left]))*(x-arr[left])));
        // console.log({left,right,mid})
        if (arr[mid] === x) {
            return mid
        }
        if (arr[mid] < x) {
            left = mid + 1
        }
        if (arr[mid] > x) {
            right = mid - 1
        }
        
    } while (left <= right);
    return -1;
}
let result2 = timKiemNhiPhan2(arr,6)
console.timeEnd('t2')
console.log(result2)