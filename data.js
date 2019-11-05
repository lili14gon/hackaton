const mostrarBusqueda = (url) => {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            printMovies(data.Search)
        })
        .catch(error => {
            return error;
        });
};

const mostrarInfo = (url) => {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(info => {
            infoPeli(info)
        })
        .catch(error => {
            return error;
        });
 };