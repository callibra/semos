let images = [
    './img/slika1.jpg',
    './img/slika2.jpg',
    './img/slika1.jpg',
    './img/slika2.jpg',
    './img/slika1.jpg',
    './img/slika2.jpg',
    './img/slika1.jpg',
    './img/slika2.jpg',
    './img/slika1.jpg',
    './img/slika2.jpg',
  ];
  
  function dodadiSlika() {
    let imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';
  
    for (let i = 0; i < 10; i++) {
      let img = document.createElement('img');
      img.src = images[i];
      img.alt = `Image ${i + 1}`;
      img.className = 'image';
      imageContainer.appendChild(img);
    }
  }

  function dodadiStilovi() {
    let images = document.querySelectorAll('.image');
    images.forEach(image => {
      image.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.5)';
      image.style.borderRadius = '5px';
    });
  }
