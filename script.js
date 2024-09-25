document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    const responseDiv = document.getElementById("formResponse");
    
    if (name && email && message) {
      responseDiv.innerHTML = <div class="alert alert-success">Gracias, ${name}. Tu mensaje ha sido enviado.</div>;
    } else {
      responseDiv.innerHTML = <div class="alert alert-danger">Por favor, completa todos los campos.</div>;
    }
  });