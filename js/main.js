console.log('Testing 1 2 3.')

let state = {

    data: [
        {
            title: 'Nothing yet...',
            description: 'Nada....',
        },
    ],
};

function doFetch() {
    console.log('doing fetch test');
    let searchElement = document.querySelector('#search');
    let searchTerm = searchElement.value.replace(' ', '+');
    console.log(searchElement.value)

    fetch(`http://www.omdbapi.com/?s=${searchTerm}&plot=full&apikey=187a5752`)
        .then(response => response.json())
        .then(data => {
            state.data = data.Search;
        });

}

function displayOutput() {

    let output = document.querySelector('#output');

    for (let movieInfo of state.data) {
        let header = document.createElement('p');
        let poster = document.createElement('img');
        header.textContent = `${movieInfo.Title}, ${movieInfo.Year}`
        poster.src=movieInfo.Poster;
        output.appendChild(header);
        output.appendChild(poster);
    }
}