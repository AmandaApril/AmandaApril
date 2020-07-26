function sum(...a){
    let total=0.0;
    for(let elemen of a){
        total +=elemen;
    }
    return total;
}

//parameter berupa array dengan 2 elemen
console.log('Sum(10,20):'+sum(10,20));
//parameter berupa array dengan 3 elemen
console.log('Sum(10,20,30):'+sum(10,20,30));