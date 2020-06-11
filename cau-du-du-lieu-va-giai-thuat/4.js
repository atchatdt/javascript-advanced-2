// Thuật toán sắp xếp
// Bubble sort
let arr = [49, 38, 65, 97, 76, 13, 27, 78, 34, 12, 64, 5, 4, 62, 99, 98, 54, 56, 17, 18, 23, 34, 15, 35, 25, 53, 51];
let arr2 = [49, 38, 65, 97, 76, 13, 27, 78, 34, 12, 64, 5, 4, 62, 99, 98, 54, 56, 17, 18, 23, 34, 15, 35, 25, 53, 51];

console.time('t')

function bubbleSort() {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // console.log(i,j,j+1)
            if (arr[j] > arr[j + 1]) {

                // Sawp bằng 2 biến
                arr[j] = arr[j] + arr[j + 1]
                arr[j + 1] = arr[j] - arr[j + 1]
                arr[j] = arr[j] - arr[j + 1]

                // let temp = arr[j]
                // arr[j] = arr[j + 1]
                // arr[j + 1] = temp
            }
        }
    }
}

bubbleSort(arr)
console.timeEnd('t')

console.time('t1')
arr2.sort((a, b) => a - b)
console.timeEnd('t1')


console.log(arr)
console.log(arr2)