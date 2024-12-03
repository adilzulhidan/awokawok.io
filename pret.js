// JavaScript untuk interaksi tambahan
const heart = document.getElementById('heart');

// Klik untuk mengubah warna hati
heart.addEventListener('click', () => {
  heart.style.backgroundColor =
    heart.style.backgroundColor === 'red' ? 'pink' : 'red';
});
