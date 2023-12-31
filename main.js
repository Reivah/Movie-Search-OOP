
class Movie {
    #title;
    #director;
    #productionYear
    constructor(title, director, productionYear){
        this.#title = title;
        this.#director = director;
        this.#productionYear = productionYear
    }

    showMovie() {
        return `Movie title: ${this.#title}, Director: ${this.#director}, Production year: ${this.#productionYear}`
    }
}

class MovieBase {
    constructor() {
        this.movieLibrary = new Map()
        this.popupWindow = document.querySelector('.pop-up')
        this.popupError = document.querySelector('.alert-popup')
    }

    addMovie() {
        let titleInput = document.querySelector('.input-title').value
        let directorInput = document.querySelector('.input-director').value
        let productionYearInput = document.querySelector('.input-date').value
        
        if(titleInput !== '' && directorInput!== '' && productionYearInput !== ''){
            const movie = new Movie(titleInput, directorInput, productionYearInput)
            this.movieLibrary.set(titleInput.toLowerCase(), movie)
            this.popupWindow.classList.add('show')
        }else {
            this.popupError.classList.add('show')
        }
        
        
    }

    searchMovie() {
        let searchInput = document.querySelector('.input-search').value
        const resultShow = document.querySelector('.result-search')
        if(searchInput.value !== ''){
            if(this.movieLibrary.get(searchInput.toLowerCase())){
                const movieInfo = this.movieLibrary.get(searchInput.toLowerCase())
                resultShow.style.display = 'block'
                resultShow.textContent = movieInfo.showMovie()
                searchInput = ''
            }else {
                alert('No such movie in library')
            }
        }else {
            alert('Please write movie title')
        }
    }

    closeWindow() {
        this.popupWindow.classList.remove('show')
        this.popupError.classList.remove('show')
    }

    buttons(){
        document.querySelector('.add-btn').addEventListener('click', this.addMovie.bind(this))
        document.querySelector('.search-btn').addEventListener('click', this.searchMovie.bind(this))
        document.querySelector('.close-btn').addEventListener('click', this.closeWindow.bind(this))
        document.querySelector('.alert-close').addEventListener('click', this.closeWindow.bind(this))
    }
}


const movieBase = new MovieBase()
movieBase.buttons()