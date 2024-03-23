const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Se cambió a .name para seleccionar por clase 
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { // Se agregó el async para poder usar el await bien dentro de la función
  try {
    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`); // Se usan apostrofes graves para interpolar la variable
    const data = await response.json(); // Se espera la respuesta y se convierte a JSON
    console.log(data);
    $n.textContent = data.name; // Se usan los apostrofes graves para interpolación de variables
    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch (err) {
    handleError(err); // llama a la función handleError para manejar errores
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // interpolacion
}

displayUser('stolinski').catch(handleError); 
