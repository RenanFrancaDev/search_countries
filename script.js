function procurar(){
    console.log('foi')
    let pais = document.getElementById('pais').value
    let url = `https://restcountries.com/v3.1/name/${pais}?fullText=true`

    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data[0]))

}