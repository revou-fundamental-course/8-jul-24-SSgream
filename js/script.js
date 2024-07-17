function calculateBMI() {
    var berat = document.getElementById('BB').value;
    var tinggi = document.getElementById('Tinggi').value / 100;

    if (berat && tinggi) {
        var BMI = (berat / (tinggi * tinggi)).toFixed(2);
        if (BMI < 18.5){
            document.getElementById('BMi').innerHTML = "Berat Badan Kurang<br/>" + BMI + "<br/> Anda Kekurangan Berat Badan";
            document.getElementById('penjelasan').innerHTML = "Hasil BMI diantara " + Math.floor(BMI -1) + "dan "+ Math.ceil(BMI +1) + "<br/> <br/> Anda dalam kategori berat badan kurang <br/> Cara terbaik untuk menaikkan berat badan adalah dengan mengonsumsi makanan bernutrisi tinggi yang kaya akan protein, karbohidrat kompleks, dan lemak sehat, serta berolahraga secara teratur untuk membangun massa otot. <br/> Jika BMI Anda dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal." 
            document.getElementById('penyakit').innerHTML = "Malnutrisi <br/> Anemia <br/> Osteoporosis <br/> Gangguan makan";
        } else if (BMI >= 18.5 && BMI <=24.9){
            document.getElementById('BMi').innerHTML = "Berat Badan Normal <br/>" + BMI + "<br/> Anda Memiliki berat badan normal";
            document.getElementById('penjelasan').innerHTML = "Anda Normal";
            document.getElementById('penyakit').innerHTML = "Anda Sehat";
        } else if (BMI >= 25 && BMI <=29.9){
            document.getElementById('BMi').innerHTML = "Berat Badan Lebih<br/>" + BMI + " <br/> Anda memiliki berat badan lebih";
            document.getElementById('penjelasan').innerHTML = "Hasil BMI diantara " + Math.floor(BMI -1) + "dan "+ Math.ceil(BMI +1) + "<br/> <br/> Anda berada dalam kategori berat badan berlebih <br/> Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikomsumsi dan berolahraga. <br/> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal";
            document.getElementById('penyakit').innerHTML = "Hipertensi <br/> Masalah Pencernaan<br/> Osteoarthritis <br/> Diabetes";
        } else {
            document.getElementById('BMi').innerHTML = "Kegemukan <br/>" + BMI + "<br/>Anda mengalami Obesitas";
            document.getElementById('penjelasan').innerHTML = "Hasil BMI diantara " + Math.floor(BMI -1) + " dan "+ Math.ceil(BMI +1) + "<br/> <br/> Anda berada dalam kategori  Obesitas <br/> Cara terbaik untuk menyembuhkan obesitas adalah melalui kombinasi pola makan seimbang dan teratur, peningkatan aktivitas fisik, perubahan gaya hidup yang berkelanjutan, serta dukungan medis dan psikologis jika diperlukan. <br/> Jika BMI Anda berada dalam kategori ini Anda dianjurkan menghubungi dokter";
            document.getElementById('penyakit').innerHTML = "Diabetes 2 <br/> Hipertensi <br/> Stroke <br/> Penyakit Ginjal";
        }
    } else {
        alert("Harap masukkan nilai berat dan tinggi badan yang valid!");
    }
}

function reload() {
    document.getElementById('BB').value = '';
    document.getElementById('Usia').value = '';
    document.getElementById('Tinggi').value = '';
    document.getElementById('BMi').innerText = '';
    document.getElementById('penjelasan').innerText = '';
    document.getElementById('penyakit').innerText = '';
    
}