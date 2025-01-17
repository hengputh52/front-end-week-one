function challenge2(array)
{
    let result = "";
    let i;
    for(i = array.length-1; i >= 0;i--)
    {
        result += array[i] + ' ';
    }
    return result;
}

let arr = [10,20,30,40];
console.log(challenge2(arr));