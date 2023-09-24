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

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>dale</button>
