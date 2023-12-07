function cargarCiudad() {
    const botonObtener = document.getElementById('botonObtener');
    botonObtener.addEventListener('click', function () {
      const inputCiudad = document.getElementById('inputCiudad').value;
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(inputCiudad)}&appid=fdd533266e28101881f610f2b8f1ebe1&units=metric`)
        .then(response => response.json())
        .then(data => {
          document.querySelector(".container").style.visibility = "visible";
          document.querySelector("#ciudad").textContent = data.name;
          document.querySelector("#temperatura").innerHTML = `${Math.floor(data.main.temp)}<sup>°C</sup>`;
  
          const iconCode = data.weather[0].icon;
          const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
          document.querySelector("#wicon").src = iconUrl;
  
          document.querySelector("#descripcion").textContent = data.weather[0].description;
        })
        .catch(error => {
          console.log('Error al obtener los datos:', error);
          alert('Hubo un error al obtener la información. Verifica la ciudad ingresada.');
        });
    });
}

window.onload = cargarCiudad()
