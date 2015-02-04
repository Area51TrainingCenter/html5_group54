function loadHTML() {

    loadSlider();

    var container = document.getElementById("list");

    var lista = document.createElement("ul");

    for (var index = 0; index < datanews.length; index++) {

        var item = document.createElement("li");
        var titulo = document.createElement("h2");
        var parrafo = document.createElement("p");
        var link = document.createElement("a");
        var img = document.createElement("img");
        var span = document.createElement("span");

        titulo.innerHTML = datanews[index][0];
        parrafo.innerHTML = datanews[index][1];
        img.setAttribute("src", datanews[index][3]);
        link.innerHTML = "Leer mas";
        link.setAttribute("href", "#");
        link.setAttribute("onclick", "getNews(" + index + ")");
        span.innerHTML = datanews[index][2];
        span.setAttribute("id", "news_" + index);


        item.appendChild(titulo);
        item.appendChild(parrafo);
        item.appendChild(link);
        item.appendChild(img);
        item.appendChild(span);

        lista.appendChild(item);

    }

    container.appendChild(lista);

}

function getNews(index) {

    //obteniendo el contenedor del overlay
    var overlay = document.getElementById("overlay");

    //obteniendo content-container para manipular los objetos html
    var content = document.getElementsByClassName("content-container");

    //Obteniendo los elementos HTML dentro del contenedor overlay
    content[0].children[0].innerHTML = datanews[index][0]; //titulo
    content[0].children[1].innerHTML = datanews[index][1]; //descripcion
    content[0].children[2].setAttribute("src", datanews[index][3]); //imagen

    //aumentando en 1 las visitas
    datanews[index][2]++;

    content[0].children[3].innerHTML = datanews[index][2]; //span contador

    //Declarando una variable contador que obtiene 
    //el elemento del contador de la lista
    var contador = document.getElementById('news_' + index);

    //Seteando el nuevo valor de las visitas
    contador.innerHTML = datanews[index][2];

    //cambiando clase CSS
    overlay.className = "mostrar";

}

function closeNews() {

    //obteniendo el contenedor del overlay
    var overlay = document.getElementById("overlay");

    //cambiando clase CSS
    overlay.className = "esconder";

}