function saludar() {
    
  }
  
  function calculateDeliveryFee() {
    var distanceInput = document.getElementById("distancia").value;
    var resultElement = document.getElementById("resultado");
  
    let deliveryFee = 0;
  
    if (distanceInput <= 500) {
      deliveryFee = 500;
    } else if (distanceInput <= 1000) {
      deliveryFee = 1000;
    } else if (distanceInput <= 2000) {
      deliveryFee = 1500;
    } else {
      deliveryFee = 2000;
    }
  
    resultElement.innerHTML = `El costo de envío es de $${deliveryFee.toFixed(2)}`;
  }