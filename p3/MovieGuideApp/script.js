//Initial Reference
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//Function to fetch data from API

let getMovie = () => {
    let movieName = movieNameRef.value.trim();
    let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    //If input field is empty
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
        document.title = "Movie Search App";
        return;
    }

    //If input field is not empty
    else {
        let dots = 0;
        let loadingInterval = setInterval(() => {
            dots = (dots + 1) % 4;
            document.title = `Searching${".".repeat(dots)}`;
        }, 500);

        fetch(url)
            .then(res => res.json())
            .then(data => {
                clearInterval(loadingInterval);
                //If movie exists in database
                if (data.Response === "True") {

                    result.innerHTML = `
                <div class="info">
                    <img src="${data.Poster}" class="poster" alt="${data.Title}">
                    <div>
                        <h2>${data.Title}</h2>
                        <div class="rating">
                            <img src="icons8-star-48.png" alt="Star" width="24">
                            <h4>${data.imdbRating}</h4>
                        </div>
                        <div class="details">
                            <span>${data.Rated}</span>
                            <span>${data.Year}</span>
                            <span>${data.Runtime}</span>
                        </div>
                        <div class="genre">
                            <div>${data.Genre.split(",").join("</div><div>")}</div>
                        </div>
                    </div>    
                </div>
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p>
            `;
                    document.title = `${data.Title} | Movie Info`;
                }
                //If movie does not exist in database
                else {
                    result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
                    document.title = `Not Found: ${movieName}`;
                }
            })
            .catch(() => {
                clearInterval(loadingInterval);
                result.innerHTML = `<h3 class="msg">Error Occurred</h3>`;
                document.title = `Error Fetching Data`;
            })
    }
}


searchBtn.addEventListener("click", getMovie);

window.addEventListener("load", getMovie);

movieNameRef.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchBtn.click();
    }
});