document.getElementById('card').style.setProperty('display', 'none', 'important')


function procurar(){
    document.getElementById('card').style.setProperty('display', 'block', 'important')
    let pais = document.getElementById('pais').value
    nome_pais.innerHTML = pais;
    let url = `https://restcountries.com/v3.1/name/${pais}?fullText=true`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {

    console.log(pais)

    let bandeira = document.getElementById('bandeira');
    let nome_pais = document.getElementById('nome');
    let capital = document.getElementById('capital');
    let pop = document.getElementById('pop');
    let cont = document.getElementById('cont');

    
    
    capital.innerHTML = data[0].capital[0];
    pop.innerHTML = data[0].population;
    cont.innerHTML = data[0].continents[0]
    bandeira.src = data[0].flags.svg
    })
}