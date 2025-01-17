function challenge4(text, char)
{
    let found = 0;
    for (let i in text)
    {
        if(text[i]== char)
        {
            found = found + 1;
        }
    }

    return found;

}

let string ="hello world";
let char = "o";
console.log(challenge4(string,char));