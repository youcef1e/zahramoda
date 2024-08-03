document.getElementById('cod').addEventListener('click', function() {
    document.getElementById('cod').classList.add('active');
    document.getElementById('card').classList.remove('active');
    document.getElementById('cod-button').style.display = 'block';
    document.getElementById('card-details').style.display = 'none';
});

document.getElementById('card').addEventListener('click', function() {
    document.getElementById('card').classList.add('active');
    document.getElementById('cod').classList.remove('active');
    document.getElementById('card-details').style.display = 'block';
    document.getElementById('cod-button').style.display = 'none';
});

input=document.getElementById('quantity');
// Prevent the default cursor behavior
input.addEventListener('focus', function(event) {
    event.target.blur();
    document.getElementById("total-price").innerHTML = "₺" + (input.value * 400);
  });
