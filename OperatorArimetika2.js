var a = 10;
console.log("Nilai a:"+a);
var b = 4;
console.log("Nilai b:"+b);

function PB(a,b){
    var c=a/b;
    return (c>=0)? Math.floor(c): Math.ceil(c);
}


console.log(`${a}/${b}=${PB(a,b)}`);