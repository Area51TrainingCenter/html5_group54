function loadSlider() {

    var sliderList = [];
    var thumbList = [];
    
    for (var index = 0; index < images.length; index++) {

        //obteniendo el objeto de la lista images
        var slide = images[index];

        //añadiendo los thumbail a nuestra lista
        thumbList.push(renderThumb(slide)); // llamando a la funcion que
        //renderiza los thumbail
    }

    //renderizando la lista de thumbails
    renderThumbList(thumbList);

    //renderizando el slide
    renderSlide(1);

}

function renderThumbList(thumbList) {

    //obteniendo el la lista para los thumbails
    var list = document.getElementById('thumbails');

    for (var index = 0; index < thumbList.length; index++) {

        //renderizando los thumbails
        list.appendChild(thumbList[index]);
    }
}

function renderThumb(slide) {

    //Creando etiqueta span para contener la imagen thumb
    var span = document.createElement('span');
    
    //creando el elemento img para el thumb
    var image = document.createElement('img');

    image.setAttribute('src', slide.src);
    image.setAttribute('alt', slide.caption);
    image.setAttribute('title', slide.title);
    image.setAttribute('width', '80px');
    image.setAttribute('height', '80px');
    image.setAttribute('onmouseover', 'renderSlide(' + slide.id + ')');

    span.appendChild(image);

    return span;
}

function renderSlide(index) {

    //SUERTE!!
    index = index - 1;
    var slide = images[index];

    var sliderContainer = document.getElementById('slider-container');

    sliderContainer.children[0].innerHTML = slide.title;
    sliderContainer.children[1].setAttribute('src', slide.src);
    sliderContainer.children[2].innerHTML = slide.caption;
}