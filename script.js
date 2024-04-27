function buscar() {
    var query = document.getElementById("search-input").value.trim();
    if (query !== "") {
        window.location.href = "https://www.ejemplo.com/buscar?q=" + encodeURIComponent(query);
    }
}

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Obtener referencias a los elementos HTML
const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');

// Mostrar o ocultar la barra de búsqueda al hacer clic en el icono de búsqueda
searchIcon.addEventListener('click', function() {
    searchBox.style.display = (searchBox.style.display === 'none') ? 'block' : 'none';
});

// Función para realizar la búsqueda
function buscar() {
    const input = document.getElementById('searchInput').value; // Obtener el valor del input de búsqueda
    // Aquí puedes implementar la lógica para buscar en los distintos apartados de la página
    // Por ejemplo, puedes utilizar el valor del input para navegar a la sección correspondiente de la página
    // Puedes usar métodos como scrollIntoView() para desplazarte a la sección deseada
}