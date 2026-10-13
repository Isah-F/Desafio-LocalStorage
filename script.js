const musica = document.getElementById("musica");
const artista = document.getElementById("artista");
const listaMusicas = document.getElementById("listaMusicas");
const botaoAdicionar = document.getElementById("adicionarMusica");

let musicasSalvas = JSON.parse(localStorage.getItem("minhasMusicas")) || [];
function mostrarMusicas() {
    listaMusicas.innerHTML = "";
    musicasSalvas.forEach(function(item) {
        let novaMusica = document.createElement("li");
        novaMusica.textContent = item.musica + " — " + item.artista;
        listaMusicas.appendChild(novaMusica);
    });
}
botaoAdicionar.addEventListener("click", function() {
    let dadosMusica = {
        musica: musica.value,
        artista: artista.value
    };
    musicasSalvas.push(dadosMusica);
    localStorage.setItem("minhasMusicas", JSON.stringify(musicasSalvas));
    mostrarMusicas();
    musica.value = "";
    artista.value = "";
});
mostrarMusicas();




