/*var name ="heng, lang, ronaldo, messi";
var namesplit = name.split(",");
console.log(namesplit);

array=[1,2,3,4];
for(var i in array)
{
    console.log(i);
}

var number = [2,1,6,5,8,4,7];
var number2 = [100,200,300];
var newarray = number.concat(number2);
console.log(newarray);*/

function challenge1(width, height)
{
    let rectanglestring = '';
    for(let i=1;i <= (width * height);i++)
    {
        
        rectanglestring += " " + "*";
        if(i % width == 0)
        {
            rectanglestring += " " + "\n";
        }
    }
    return rectanglestring;
}

console.log(challenge1(5,-2));
