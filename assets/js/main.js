let text="Hello world,hello planet";
let sym=prompt("Simvol daxil edin")
let count = 0;
let res

for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase().includes(sym)) {
        count++;
    }
 }
alert(count);