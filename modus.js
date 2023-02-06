document.write('</br></br><hr></br>')


// //=========
let data_nilai = [5, 9, 6, 7, 9, 8, 10, 7, 8]
document.write(`[${data_nilai}]`)
let susun =data_nilai.sort( (a, b)=> { return a - b})
let modus = susun.splice(2,6)
document.write(`</br> Modus dari data array di atas adalah: ${modus}`)

