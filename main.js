var nombre= "Alfredo, mi cv";

document.write(nombre);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#objetivo').addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
