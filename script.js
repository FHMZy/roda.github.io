const wheel = document.getElementById('wheel');
const numberOfRadii = 8; // Tetapkan jumlah jari-jari menjadi 8
const radiusLength = 140; // Panjang jari-jari
const rotationOffset = -90; // Offset untuk memastikan jari-jari pertama di posisi jam 12 (tengah atas)

// Gambar jari-jari
for (let i = 0; i < numberOfRadii; i++) {
    // Hitung sudut setiap jari-jari, dengan tambahan offset untuk memulai dari atas
    const angle = (i * 360) / numberOfRadii + rotationOffset;
    const radius = document.createElement('div');
    radius.className = 'radius';
    radius.style.height = `${radiusLength}px`; // Panjang jari-jari
    radius.style.transform = `rotate(${angle}deg)`; // Terapkan rotasi dengan offset untuk memulai dari atas

    // Tambahkan event listener untuk mendeteksi klik
    radius.addEventListener('click', () => {
        alert(`Kamu mengklik jari-jari ke-${i + 1}!`);
    });

    // Tambahkan jari-jari ke roda
    wheel.appendChild(radius);
}
