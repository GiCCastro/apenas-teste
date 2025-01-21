function search() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let filmes = document.getElementsByClassName('busca-filme');

    for (let i = 0; i < filmes.length; i++) {
        let filme = filmes[i].querySelector('p');
        if (filme.innerHTML.toLowerCase().includes(input)) {
            filmes[i].style.display = "block";  
        } else {
            filmes[i].style.display = "none";
        }
    }
}
