
document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const serviceOption = document.getElementById('service').value.split("|");
  const service = serviceOption[0];
  const price = serviceOption[1] !== "0" ? "RM" + serviceOption[1] : "Ikut permintaan";
  const location = document.getElementById('location').value;
  const date = document.getElementById('date').value;

  const message = `Tempahan dari website:%0aNama: ${name}%0aServis: ${service}%0aHarga: ${price}%0aLokasi: ${location}%0aTarikh: ${date}`;
  const whatsappUrl = `https://wa.me/60195684543?text=${message}`;
  window.open(whatsappUrl, '_blank');
});

function updatePrice() {
  const serviceSelect = document.getElementById('service');
  const selected = serviceSelect.value.split("|");
  const price = selected[1];
  const display = price !== "0" ? `Anggaran harga: RM${price}` : "Harga akan dibincangkan";
  document.getElementById('priceDisplay').textContent = display;
}

// Modal gallery zoom
function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
