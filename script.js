// Delivery prices
const distancePrices = {
  "5": "$10",
  "10": "$15",
  "20": "$20",
  "30": "$25",
  "40": "$30",
  "50": "$35",
  "60": "$40"
};

function updatePrice() {
  const distanceSelect = document.getElementById('distance');
  const priceDiv = document.getElementById('priceDisplay');
  const selectedDistance = distanceSelect.value;
  if (distancePrices[selectedDistance]) {
    priceDiv.innerHTML = "<strong>Delivery Price: " + distancePrices[selectedDistance] + "</strong>";
  } else {
    priceDiv.innerHTML = "";
  }
}

// Validate form
document.getElementById('orderForm').addEventListener('submit', function(e) {
  if (!validateForm()) {
    e.preventDefault();
  }
});

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const distance = document.getElementById('distance').value;
  const pickup = document.getElementById('pickupAddress').value.trim();
  const dropoff = document.getElementById('dropoffAddress').value.trim();
  const deliveryDate = document.getElementById('deliveryDate').value;
  const deliveryTime = document.getElementById('deliveryTime').value;

  if (!name || !email || !phone || !service || !distance || !pickup || !dropoff) {
    alert('Please fill out all fields, including pickup and dropoff locations.');
    return false;
  }
  if (!deliveryDate || !deliveryTime) {
    alert('Please select a delivery date and time.');
    return false;
  }
  return true;
}