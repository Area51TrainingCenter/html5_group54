function loadHTML() {

    var container = document.getElementById("list");

    var lista = document.createElement("ul");

    for (var index = 0; index < datanews.length; index++) {

        var item = document.createElement("li");
        var titulo = document.createElement("h2");
        var parrafo = document.createElement("p");
        var link = document.createElement("a");

        titulo.innerHTML = datanews[index][0];
        parrafo.innerHTML = datanews[index][1];
        link.innerHTML = "Leer mas";
        link.setAttribute("href", "#");
        link.setAttribute("onclick", "getNews(" + index + ")");


        item.appendChild(titulo);
        item.appendChild(parrafo);
        item.appendChild(link);

        lista.appendChild(item);

    }

    container.appendChild(lista);

}

function getNews(index) {

    var content = document.getElementsByClassName("overlay");

    content[0].children[0].innerHTML = datanews[index][0];
    content[0].children[1].innerHTML = datanews[index][1];
    content[0].children[2].innerHTML = datanews[index][2];

}