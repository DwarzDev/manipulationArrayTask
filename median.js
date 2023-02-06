
document.write('</br></br><hr></br>')


//=========
document.write(`[${dataNilai}]`)
let sortir =dataNilai.sort( (a, b)=> { return a - b})
let median = sortir.splice(4,1)
document.write(`</br> Median dari data array di atas adalah: ${median}`)
