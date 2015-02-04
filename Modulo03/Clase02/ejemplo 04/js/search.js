function searchNews(obj) {

    //obteniendo el valor de la tecla
    var keyvalue = obj.value;

    //obteniendo el objeto contenedor para las noticias
    var objSearch = document.getElementById('result-search');

    //creando una lista para las noticias encontradas 
    var listSearch = []; // lista de coincidencias

    //limpiando los objetos previamente insertados
    objSearch.innerHTML = "";

    //haciendo la busqueda en la lista de noticias
    for (var index = 0; index < datanews.length; index++) {

        //declarando un objetos de tipo RegExp para hacer la busqueda
        var keyvalue = new RegExp(keyvalue);

        //Haciendo la busqueda dentro de la lista de noticias
        // Busqueda se realiza en el titulo o en la noticia
        if (keyvalue.test(datanews[index][0]) || keyvalue.test(datanews[index][1])) {

            //añadiendo la noticias encontrada a 
            //nuestra lista de coincidencias
            listSearch.push(index);
        }
    }

    //recorriendo la lista de noticias encontradas
    for (var x = 0; x < listSearch.length; x++) {

        // obteniendo el indice de la noticia
        var index = listSearch[x];

        //creando el span para el titulo de la noticia
        var span = document.createElement('span');

        //añadiendo el titulo de la noticia
        span.innerHTML = datanews[index][0];

        //añadiendo el span a el contenedor de resultados
        objSearch.appendChild(span);
    }

}