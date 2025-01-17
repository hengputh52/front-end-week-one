function challenge5(text)
{
    const word = text.trim().split(/\s+/);
    return word.length;

}

let text = "hello world mengheng";
console.log(challenge5(text));