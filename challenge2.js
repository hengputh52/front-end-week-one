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

console.log(challenge1(3,4));
