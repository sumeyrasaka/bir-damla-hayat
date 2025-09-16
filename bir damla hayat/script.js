
let sayac = 0;
let sayacElementi = document.getElementById("suSayaci");
let progressBar = document.getElementById("progressBar");

// max değeri kendin belirle (örneğin 5000 litre = %100)
let maxDeger = 5000; 

setInterval(() => {
  sayac += 50; // her saniyede 50 litre ekle
  if (sayac > maxDeger) sayac = maxDeger; // max değeri geçmesin

  // sayıyı ekranda güncelle
  sayacElementi.textContent = sayac.toLocaleString();

  // progress bar genişliği
  let yuzde = (sayac / maxDeger) * 100;
  progressBar.style.width = yuzde + "%";
  progressBar.textContent = Math.floor(yuzde) + "%";
}, 1000);