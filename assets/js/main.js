// price slider

document.getElementById('rangeInput').addEventListener('input', function() {
    const min = parseInt(this.min);
    const max = parseInt(this.max);
    const value = parseInt(this.value);
    const reversedValue = max + min - value;
    document.getElementById('rangeValue').innerText = reversedValue+"₺";
  });
  



  // product grid

  function changeSlide(dot, index) {
    const row = dot.closest('.row');
    const imagesContainer = row.querySelector('.images-container');
    const dots = row.querySelectorAll('.dot');

    imagesContainer.style.transform = `translateY(-${index * 100}%)`;

    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
}


function showContent(id) {
  // Hide all content
  document.querySelectorAll('.content').forEach(function(content) {
      content.classList.remove('active');
  });
  // Remove active class from all tabs
  document.querySelectorAll('.tab').forEach(function(tab) {
      tab.classList.remove('active');
  });
  // Show the selected content
  document.getElementById(id).classList.add('active');
  // Add active class to the selected tab
  document.querySelector('.tab[onclick="showContent(\'' + id + '\')"]').classList.add('active');
}