// Función asíncrona para obtener los datos de la URL
const fetchAlbums = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos'; // URL para obtener los datos
    try {
        const response = await fetch(url); // Realizar la solicitud a la URL
        if (!response.ok) { // Verificar si la respuesta es exitosa
            throw new Error(`Error al obtener los datos: ${response.statusText}`);
        }
        const albums = await response.json(); // Convertir la respuesta a formato JSON
        return albums; // Retornar los datos obtenidos
    } catch (error) {
        console.error("Error al obtener los datos: ", error); // Manejar errores en la solicitud
    }
};

const showFirst20Titles = async () => {
    const albums = await fetchAlbums(); // Llamar a la función para obtener los datos
    const albumList = document.getElementById('album-list'); // Obtener el contenedor de la lista en el HTML

    if (albums && albums.length > 0) { // Verificar que se obtuvieron datos
        albums.slice(0, 20).forEach(album => { // Iterar sobre los primeros 20 álbumes
            const listItem = document.createElement('li'); // Crear un elemento <li> para cada álbum
            listItem.textContent = `ID: ${album.id}, Title: ${album.title}`; // Asignar el contenido del álbum
            albumList.appendChild(listItem); // Añadir el elemento a la lista en el HTML
        });
    } else {
        albumList.textContent = "No se pudieron cargar los datos."; // Mostrar mensaje si no hay datos
    }
};

// Función para crear una promesa que se resuelve después de 3 segundos
const delayMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Información Enviada"); // Resolver la promesa con el mensaje
        }, 3000); // Retraso de 3 segundos
    });
};

// Función para mostrar el mensaje de la promesa en el HTML
const showMessage = async () => {
    const message = await delayMessage(); // Esperar la resolución de la promesa
    document.getElementById('message').textContent = message; // Mostrar el mensaje en el HTML
};

// Llamado a las funciones principales
showFirst20Titles(); // Mostrar los primeros 20 títulos de los álbumes
showMessage(); // Mostrar el mensaje después de 3 segundos
