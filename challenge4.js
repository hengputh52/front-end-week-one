function average(array)
{
    let result;
    let sum = 0;
    for(let i in array)
    {
        sum += array[i];
    }
    result = sum / array.length;
    return result;
}

let arr = [85,90,78,92];
console.log(average(arr));