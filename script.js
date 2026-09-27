const movies = [
    {
        id: 1,
        title: "Inception",
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        genre: "Sci-Fi",
        year: 2010,
        language: "English",
        duration: "2h 28m",
        director: "Christopher Nolan",
        cast: "Leonardo DiCaprio, Tom Hardy",
        description: "A skilled thief enters dreams to steal secrets and receives a difficult mission that could change his life.",
        rating: 8.8,
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
    },

    {
        id: 2,
        title: "Interstellar",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        genre: "Adventure",
        year: 2014,
        language: "English",
        duration: "2h 49m",
        director: "Christopher Nolan",
        cast: "Matthew McConaughey, Anne Hathaway",
        description: "A team of astronauts travels through a wormhole in search of a new home for humanity.",
        rating: 8.7,
        trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
    },

    {
        id: 3,
        title: "The Dark Knight",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        genre: "Action",
        year: 2008,
        language: "English",
        duration: "2h 32m",
        director: "Christopher Nolan",
        cast: "Christian Bale, Heath Ledger",
        description: "Batman faces a dangerous criminal who creates chaos in Gotham City.",
        rating: 9.0,
        trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
    },

    {
        id: 4,
        title: "Avengers",
        poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        genre: "Action",
        year: 2012,
        language: "English",
        duration: "2h 23m",
        director: "Joss Whedon",
        cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
        description: "Earth's greatest heroes join together to stop a powerful enemy.",
        rating: 8.0,
        trailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8"
    },

    {
        id: 5,
        title: "Joker",
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        genre: "Drama",
        year: 2019,
        language: "English",
        duration: "2h 2m",
        director: "Todd Phillips",
        cast: "Joaquin Phoenix, Robert De Niro",
        description: "A troubled man slowly transforms into the famous villain of Gotham.",
        rating: 8.4,
        trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
    },

    {
        id: 6,
        title: "The Matrix",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        genre: "Sci-Fi",
        year: 1999,
        language: "English",
        duration: "2h 16m",
        director: "The Wachowskis",
        cast: "Keanu Reeves, Laurence Fishburne",
        description: "A computer hacker discovers that the world he knows is a hidden reality.",
        rating: 8.7,
        trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
    },

    {
        id: 7,
        title: "Wonder Woman",
        poster: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
        genre: "Action",
        year: 2017,
        language: "English",
        duration: "2h 21m",
        director: "Patty Jenkins",
        cast: "Gal Gadot, Chris Pine",
        description: "A powerful warrior leaves her island to help stop a great war.",
        rating: 7.4,
        trailer: "https://www.youtube.com/watch?v=1Q8fG0TtVAY"
    },

    {
        id: 8,
        title: "Avengers: Endgame",
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        genre: "Adventure",
        year: 2019,
        language: "English",
        duration: "3h 1m",
        director: "Anthony Russo, Joe Russo",
        cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo",
        description: "The Avengers come together for one final battle to save the universe.",
        rating: 8.4,
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
    },

    {
        id: 9,
        title: "Spider-Man: No Way Home",
        poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        genre: "Action",
        year: 2021,
        language: "English",
        duration: "2h 28m",
        director: "Jon Watts",
        cast: "Tom Holland, Zendaya, Benedict Cumberbatch",
        description: "Spider-Man faces unexpected enemies after his secret identity is revealed.",
        rating: 8.2,
        trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA"
    },

    {
        id: 10,
        title: "The Shawshank Redemption",
        poster: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        genre: "Drama",
        year: 1994,
        language: "English",
        duration: "2h 22m",
        director: "Frank Darabont",
        cast: "Tim Robbins, Morgan Freeman",
        description: "A banker finds hope and friendship while serving a long prison sentence.",
        rating: 9.3,
        trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco"
    },

    {
        id: 11,
        title: "The Godfather",
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        genre: "Crime",
        year: 1972,
        language: "English",
        duration: "2h 55m",
        director: "Francis Ford Coppola",
        cast: "Marlon Brando, Al Pacino, James Caan",
        description: "The story of a powerful crime family and its changing generations.",
        rating: 9.2,
        trailer: "https://www.youtube.com/watch?v=sY1S34973zA"
    },

    {
        id: 12,
        title: "Parasite",
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        genre: "Thriller",
        year: 2019,
        language: "Korean",
        duration: "2h 12m",
        director: "Bong Joon Ho",
        cast: "Song Kang-ho, Lee Sun-kyun",
        description: "Two families from different social backgrounds become connected in an unexpected way.",
        rating: 8.5,
        trailer: "https://www.youtube.com/watch?v=5xH0HfJHsaY"
    },

    {
        id: 13,
        title: "Toy Story 4",
        poster: "https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
        genre: "Animation",
        year: 2019,
        language: "English",
        duration: "1h 40m",
        director: "Josh Cooley",
        cast: "Tom Hanks, Tim Allen, Annie Potts",
        description: "Woody and his friends begin a new adventure with a new toy.",
        rating: 7.7,
        trailer: "https://www.youtube.com/watch?v=wmiIUN-7qhE"
    },
];


/* ========================= 
   BASIC FUNCTIONS
========================= */

const fallbackPoster =
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80";


const getMovieId = () => {
    return Number(new URLSearchParams(window.location.search).get("id"));
};


const findMovieById = (id) => {
    return movies.find(movie => movie.id === Number(id));
};


/* =========================
   FAVORITES
========================= */

const getFavorites = () => {
    return JSON.parse(
        localStorage.getItem("movieHubFavorites") || "[]"
    );
};


const saveFavorites = (favorites) => {
    localStorage.setItem(
        "movieHubFavorites",
        JSON.stringify(favorites)
    );
};


const isFavorite = (id) => {
    return getFavorites().includes(Number(id));
};


const addToFavorites = (id) => {

    id = Number(id);

    const favorites = getFavorites();

    if (!favorites.includes(id)) {
        favorites.push(id);
        saveFavorites(favorites);
    }
};


const removeFromFavorites = (id) => {

    id = Number(id);

    const favorites = getFavorites().filter(
        movieId => movieId !== id
    );

    saveFavorites(favorites);
};


/* =========================
   MOVIE CARD
========================= */

const movieCard = (movie, showFavoriteButton = true) => {

    const favorite = isFavorite(movie.id);

    return `
        <div class="movie-card">

            <img
                src="${movie.poster}"
                alt="${movie.title}"
                onerror="this.src='${fallbackPoster}'"
            >

            <div class="movie-info">

                <span class="genre">
                    ${movie.genre}
                </span>

                <span class="rating">
                    ⭐ ${movie.rating}
                </span>

                <h3>
                    ${movie.title}
                </h3>

                <p>
                    ${movie.year} • ${movie.language}
                </p>

                <p class="description">
                    ${movie.description}
                </p>

                <div class="favorite-buttons">

                    <a
                        href="movie-details.html?id=${movie.id}"
                        class="card-btn">
                        View Details
                    </a>

                    ${
                        showFavoriteButton
                        ?
                        `
                        <button
                            class="favorite-btn ${favorite ? "favorite-added" : ""}"
                            data-id="${movie.id}">

                            ${
                                favorite
                                ? "♥ Remove Favorite"
                                : "♡ Add Favorite"
                            }

                        </button>
                        `
                        :
                        ""
                    }

                </div>

            </div>

        </div>
    `;
};


/* =========================
   RENDER MOVIES
========================= */

const renderMovies = (
    movieList = movies,
    containerId = "movieList"
) => {

    const container = document.getElementById(containerId);

    if (!container) {
        return;
    }

    if (movieList.length === 0) {

        container.innerHTML = `
            <div class="no-results">

                <h3>No movies found</h3>

                <p>
                    Try another search or clear the filters.
                </p>

                <button
                    class="btn primary-btn"
                    id="clearFilters">
                    Clear Filters
                </button>

            </div>
        `;

        return;
    }

    container.innerHTML = movieList
        .map(movie => movieCard(movie))
        .join("");
};


/* =========================
   SEARCH
========================= */

const searchMovies = (list, keyword) => {

    keyword = keyword.trim().toLowerCase();

    if (!keyword) {
        return list;
    }

    return list.filter(movie =>

        movie.title.toLowerCase().includes(keyword) ||

        movie.genre.toLowerCase().includes(keyword) ||

        movie.description.toLowerCase().includes(keyword) ||

        movie.language.toLowerCase().includes(keyword)

    );
};


/* =========================
   FILTER
========================= */

const filterMovies = (
    list,
    genre,
    language,
    year,
    rating
) => {

    return list.filter(movie => {

        const genreMatch =
            genre === "All Genres" ||
            movie.genre === genre;

        const languageMatch =
            language === "All Languages" ||
            movie.language === language;

        const yearMatch =
            year === "All Years" ||
            movie.year === Number(year);

        const ratingMatch =
            rating === "All Ratings" ||
            movie.rating >= Number(rating);

        return (
            genreMatch &&
            languageMatch &&
            yearMatch &&
            ratingMatch
        );
    });
};


/* =========================
   SORT
========================= */

const sortMovies = (list, sortValue) => {

    const sorted = [...list];

    if (sortValue === "Name A-Z") {
        sorted.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    if (sortValue === "Name Z-A") {
        sorted.sort((a, b) =>
            b.title.localeCompare(a.title)
        );
    }

    if (sortValue === "Rating High-Low") {
        sorted.sort((a, b) =>
            b.rating - a.rating
        );
    }

    if (sortValue === "Rating Low-High") {
        sorted.sort((a, b) =>
            a.rating - b.rating
        );
    }

    if (sortValue === "Newest First") {
        sorted.sort((a, b) =>
            b.year - a.year
        );
    }

    if (sortValue === "Oldest First") {
        sorted.sort((a, b) =>
            a.year - b.year
        );
    }

    return sorted;
};


/* =========================
   MOVIE LIST UPDATE
========================= */

const updateMovieList = () => {

    const search =
        document.getElementById("movieSearch");

    const genre =
        document.getElementById("genreFilter");

    const language =
        document.getElementById("languageFilter");

    const year =
        document.getElementById("yearFilter");

    const rating =
        document.getElementById("ratingFilter");

    const sort =
        document.getElementById("sortMovies");


    let result = searchMovies(
        movies,
        search ? search.value : ""
    );


    result = filterMovies(
        result,

        genre
            ? genre.value
            : "All Genres",

        language
            ? language.value
            : "All Languages",

        year
            ? year.value
            : "All Years",

        rating
            ? rating.value
            : "All Ratings"
    );


    result = sortMovies(
        result,

        sort
            ? sort.value
            : "Sort Movies"
    );


    renderMovies(result);
};


/* =========================
   FILTER EVENTS
========================= */

const setupMovieFilters = () => {

    const controls = [
        "movieSearch",
        "genreFilter",
        "languageFilter",
        "yearFilter",
        "ratingFilter",
        "sortMovies"
    ];


    controls.forEach(id => {

        const element =
            document.getElementById(id);

        if (!element) {
            return;
        }


        if (id === "movieSearch") {

            element.addEventListener(
                "input",
                updateMovieList
            );

        } else {

            element.addEventListener(
                "change",
                updateMovieList
            );
        }

    });
};


/* =========================
   HOME PAGE
========================= */

const updateHomeMovies = () => {

    const homeList =
        document.getElementById("homeMovieList");

    if (!homeList) {
        return;
    }

    renderMovies(
        movies.slice(0, 8),
        "homeMovieList"
    );
};


/* =========================
   MOVIE DETAILS
========================= */

const showMovieDetails = () => {

    const movie =
        findMovieById(getMovieId()) || movies[0];


    const poster =
        document.getElementById("detailPoster");

    const title =
        document.getElementById("detailTitle");

    const genre =
        document.getElementById("detailGenre");

    const rating =
        document.getElementById("detailRating");

    const year =
        document.getElementById("detailYear");

    const duration =
        document.getElementById("detailDuration");

    const description =
        document.getElementById("detailDescription");

    const detailGenre =
        document.getElementById("detailGenreText");

    const language =
        document.getElementById("detailLanguage");

    const director =
        document.getElementById("detailDirector");

    const cast =
        document.getElementById("detailCast");

    const detailDuration =
        document.getElementById("detailDurationText");

    const releaseYear =
        document.getElementById("detailReleaseYear");

    const trailerTitle =
        document.getElementById("trailerTitle");

    const trailerLink =
        document.getElementById("trailerLink");

    const favoriteBtn =
        document.getElementById("favoriteBtn");


    if (!title) {
        return;
    }


    poster.src = movie.poster;

    poster.alt = movie.title;

    poster.onerror = () => {
        poster.src = fallbackPoster;
    };


    title.textContent = movie.title;

    genre.textContent =
        movie.genre.toUpperCase();

    rating.textContent =
        `★ ${movie.rating} / 10`;

    year.textContent =
        movie.year;

    duration.textContent =
        movie.duration;

    description.textContent =
        movie.description;

    detailGenre.textContent =
        movie.genre;

    language.textContent =
        movie.language;

    director.textContent =
        movie.director;

    cast.textContent =
        movie.cast;

    detailDuration.textContent =
        movie.duration;

    releaseYear.textContent =
        movie.year;

    trailerTitle.textContent =
        `${movie.title} Official Trailer`;

    trailerLink.href =
        movie.trailer;


    const updateFavoriteButton = () => {

        if (!favoriteBtn) {
            return;
        }

        if (isFavorite(movie.id)) {

            favoriteBtn.textContent =
                "♥ Remove from Favorites";

            favoriteBtn.classList.add(
                "favorite-added"
            );

        } else {

            favoriteBtn.textContent =
                "♡ Add to Favorites";

            favoriteBtn.classList.remove(
                "favorite-added"
            );
        }
    };


    updateFavoriteButton();


    if (favoriteBtn) {

        favoriteBtn.onclick = () => {

            if (isFavorite(movie.id)) {

                removeFromFavorites(movie.id);

            } else {

                addToFavorites(movie.id);
            }


            updateFavoriteButton();

            updateHomeMovies();
        };
    }
};


/* =========================
   FAVORITES PAGE
========================= */

const renderFavorites = () => {

    const container =
        document.getElementById("favoriteList");

    if (!container) {
        return;
    }


    const favoriteMovies =
        getFavorites()
            .map(id => findMovieById(id))
            .filter(Boolean);


    if (favoriteMovies.length === 0) {

        container.innerHTML = `

            <div class="no-results">

                <h3>
                    No favorite movies yet
                </h3>

                <p>
                    Go to the Movies page and add
                    a movie to your favorites.
                </p>

                <a
                    href="movies.html"
                    class="btn primary-btn">
                    Explore Movies
                </a>

            </div>
        `;

        return;
    }


    container.innerHTML =
        favoriteMovies
            .map(movie => movieCard(movie, true))
            .join("");
};


/* =========================
   REVIEWS
========================= */

const getReviews = () => {

    return JSON.parse(
        localStorage.getItem("movieHubReviews") || "[]"
    );
};


const saveReviews = reviews => {

    localStorage.setItem(
        "movieHubReviews",
        JSON.stringify(reviews)
    );
};


const reviewStars = rating => {

    return (
        "★".repeat(Number(rating)) +
        "☆".repeat(5 - Number(rating))
    );
};


const renderReviews = () => {

    const container =
        document.getElementById("reviewList");

    if (!container) {
        return;
    }


    const defaultReviews = [

        {
            name: "Ayush",
            movie: "Inception",
            rating: 5,
            review:
                "One of the best movies I have watched. The story and visuals are amazing.",
            date: "Existing Review"
        },

        {
            name: "Rahul",
            movie: "Interstellar",
            rating: 5,
            review:
                "A beautiful movie with an emotional story and excellent space visuals.",
            date: "Existing Review"
        }

    ];


    const reviews = [
        ...defaultReviews,
        ...getReviews()
    ];


    container.innerHTML =
        reviews.map(item => `

            <div class="review-card">

                <div class="review-top">

                    <div class="user-circle">
                        ${item.name.charAt(0).toUpperCase()}
                    </div>

                    <div>
                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            ${item.movie}
                        </p>
                    </div>

                    <span class="review-rating">
                        ${reviewStars(item.rating)}
                    </span>

                </div>

                <p>
                    "${item.review}"
                </p>

                <small>
                    ${item.date}
                </small>

            </div>

        `).join("");
};


/* =========================
   MESSAGE
========================= */

const setMessage = (
    id,
    message,
    type = "error"
) => {

    const element =
        document.getElementById(id);

    if (!element) {
        return;
    }

    element.textContent =
        message;

    element.className =
        `form-message ${type}`;
};


/* =========================
   EMAIL VALIDATION
========================= */

const validateEmail = email => {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);
};


/* =========================
   REVIEW FORM
========================= */

const setupReviewForm = () => {

    const form =
        document.getElementById("reviewForm");

    if (!form) {
        return;
    }


    const movieSelect =
        document.getElementById("movieName");


    movieSelect.innerHTML =
        `<option value="">Select Movie</option>` +

        movies.map(movie =>
            `
            <option value="${movie.title}">
                ${movie.title}
            </option>
            `
        ).join("");


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document
                    .getElementById("userName")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            const movie =
                movieSelect.value;


            const rating =
                Number(
                    document
                        .getElementById("rating")
                        .value
                );


            const review =
                document
                    .getElementById("review")
                    .value
                    .trim();


            if (
                name.length < 2 ||
                name.length > 40
            ) {

                setMessage(
                    "reviewMessage",
                    "Name must be between 2 and 40 characters."
                );

                return;
            }


            if (!validateEmail(email)) {

                setMessage(
                    "reviewMessage",
                    "Please enter a valid email address."
                );

                return;
            }


            if (!movie) {

                setMessage(
                    "reviewMessage",
                    "Please select a movie."
                );

                return;
            }


            if (
                rating < 1 ||
                rating > 5
            ) {

                setMessage(
                    "reviewMessage",
                    "Please select a rating from 1 to 5."
                );

                return;
            }


            if (
                review.length < 10 ||
                review.length > 500
            ) {

                setMessage(
                    "reviewMessage",
                    "Review must be between 10 and 500 characters."
                );

                return;
            }


            const reviews =
                getReviews();


            reviews.push({

                name,
                movie,
                rating,
                review,

                date:
                    new Date()
                        .toLocaleDateString()

            });


            saveReviews(reviews);

            form.reset();


            setMessage(
                "reviewMessage",
                "Review submitted successfully.",
                "success"
            );


            renderReviews();

        }
    );
};


/* =========================
   CONTACT FORM
========================= */

const setupContactForm = () => {

    const form =
        document.getElementById("contactForm");

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document
                    .getElementById("contactName")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("contactEmail")
                    .value
                    .trim();


            const subject =
                document
                    .getElementById("subject")
                    .value
                    .trim();


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            if (
                name.length < 2 ||
                name.length > 40
            ) {

                setMessage(
                    "contactMessage",
                    "Name must be between 2 and 40 characters."
                );

                return;
            }


            if (!validateEmail(email)) {

                setMessage(
                    "contactMessage",
                    "Please enter a valid email address."
                );

                return;
            }


            if (
                subject.length < 3 ||
                subject.length > 80
            ) {

                setMessage(
                    "contactMessage",
                    "Subject must be between 3 and 80 characters."
                );

                return;
            }


            if (
                message.length < 10 ||
                message.length > 500
            ) {

                setMessage(
                    "contactMessage",
                    "Message must be between 10 and 500 characters."
                );

                return;
            }


            form.reset();


            setMessage(
                "contactMessage",
                "Message sent successfully. Thank you!",
                "success"
            );

        }
    );
};


/* =========================
   FAVORITE BUTTON CLICK
========================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(".favorite-btn");


        if (!button) {
            return;
        }


        const id =
            Number(button.dataset.id);


        /* Add or remove */

        if (isFavorite(id)) {

            removeFromFavorites(id);

        } else {

            addToFavorites(id);
        }


        /*
            Update Movies page
        */

        if (
            document.getElementById("movieList")
        ) {

            updateMovieList();
        }


        /*
            Update Home page
        */

        if (
            document.getElementById("homeMovieList")
        ) {

            updateHomeMovies();
        }


        /*
            Update Favorites page
        */

        if (
            document.getElementById("favoriteList")
        ) {

            renderFavorites();
        }

    }
);


/* =========================
   CLEAR FILTERS
========================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.id !== "clearFilters"
        ) {
            return;
        }


        const search =
            document.getElementById("movieSearch");

        if (search) {
            search.value = "";
        }


        const controls = [
            "genreFilter",
            "languageFilter",
            "yearFilter",
            "ratingFilter",
            "sortMovies"
        ];


        controls.forEach(id => {

            const element =
                document.getElementById(id);

            if (element) {
                element.selectedIndex = 0;
            }

        });


        updateMovieList();

    }
);


/* =========================
   START WEBSITE
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
            Movies page
        */

        if (
            document.getElementById("movieList")
        ) {

            renderMovies(movies);

            setupMovieFilters();
        }


        /*
            Home page
        */

        if (
            document.getElementById("homeMovieList")
        ) {

            updateHomeMovies();
        }


        /*
            Movie details page
        */

        if (
            document.getElementById("detailTitle")
        ) {

            showMovieDetails();
        }


        /*
            Favorites page
        */

        if (
            document.getElementById("favoriteList")
        ) {

            renderFavorites();
        }


        /*
            Reviews page
        */

        if (
            document.getElementById("reviewList")
        ) {

            renderReviews();
        }


        /*
            Forms
        */

        setupReviewForm();

        setupContactForm();

    }
);