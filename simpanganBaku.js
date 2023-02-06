let dataNilai_1 = [5,9,6,7,9,8,10,7,8]

//menghitung nilai rata-rata
const nilaiRataRata = dataNilai_1.reduce((sum, current)=> sum + current,0) / dataNilai_1.length

//membulatkan hasil nilai
const hasilNilaiRata = nilaiRataRata.toFixed()

//mencari varian pada data
data = dataNilai_1.map( (k)=>{return ((k - hasilNilaiRata))**2})

const sum = data.reduce((acc, cur)=> acc + cur,0)

const varians = sum / dataNilai_1.length
const varian = varians.toFixed()
//mengkuadratkan dari hasil varian
const penghitunganSB = (varians) => {
    return Math.sqrt(varians);
};

const simpanganBaku = penghitunganSB(varians).toFixed(2);

document.write("</br><hr><h3>Simpangan Baku</h3></br>")
document.write(`1.Nilai rata-ratanya adalah: ${hasilNilaiRata} </br>
2.Nilai variannya adalah: ${varian} </br>
3.Simpangan Bakunya adalah: ${simpanganBaku}`)
