document.write('</br></br><hr></br>')

///=========== MEAN |
let dataNilai = [5, 9, 6, 7, 9, 8, 10, 7, 8]
document.write(`[${dataNilai}]`);
let penjumlahan=0;
for(let i=0; i < dataNilai.length; i++){
    penjumlahan += dataNilai[i]
}
let mean = penjumlahan/=dataNilai.length;
document.write(`</br> Mean dari data array di atas adalah: ${mean.toFixed(2)}`)