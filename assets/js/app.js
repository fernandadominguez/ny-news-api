
// - - - - - - - - - - - - - - - - - - -
// FUNCTION DECLARATIONS
// - - - - - - - - - - - - - - - - - - -

// @param element represents element to be hidden
// will hide the element entered in the parameter
function hideElement (element) {
    element.style.display = 'none'
}

// @param element represents element to be unhidden
// will hide the element entered in the parameter
function showElement (element) {
    element.style.display = 'flex'
}
// will fetch data array and call function to display to screen
function fetchApiData() {
    const url = 'https://api.nytimes.com/svc/topstories/v2/' + category + '.json?api-key=' + key

    fetch(url)
    .then(x => x.json())
    .then(x => {
    for (let  i = 0;  i < x.results.length;  i++) {
        makeNewCard(x, i)
        // console.log(x)
    }
    newsContainer.style.display = 'grid'
    })
}

// @param x represents the array fetched from API
// @param i represents the array number 
// will make a news card for every news story in the category chosen
function makeNewCard(x, i){
    // define container
    const newsContainer = document.querySelector('#content')
   
    if (!x.results[i].multimedia[4]) {
        i++
    }
    else {
        // FETCH THE DATA

        // create new card container
        const newStory = document.createElement('div')
        newStory.className = 'news-card' 
        newsContainer.appendChild(newStory)

        // add title
        const newsTitle = document.createElement('h2')
        newsTitle.textContent = x.results[i].title
        newsTitle.className = 'title'
        newStory.appendChild(newsTitle)

        // add photo
        const newsPhoto = document.createElement('div')
        newsPhoto.className = 'photo'
        newStory.appendChild(newsPhoto)
        const photo = x.results[i].multimedia[4].url
        newsPhoto.style.backgroundImage = "url(" + photo + ")"

        // add photo caption
        const photoCaption = document.createElement('p')
        photoCaption.textContent = x.results[i].multimedia[4].caption
        photoCaption.className = 'photo-caption'
        newsPhoto.appendChild(photoCaption)
        
        // add abstract
        const newsAbstract = document.createElement('p')
        newsAbstract.textContent = x.results[i].abstract
        newsAbstract.className = 'abstract'
        newStory.appendChild(newsAbstract)

        // add byline
        const newsByline = document.createElement('h6')
        newsByline.textContent = x.results[i].byline
        newsByline.className = 'byline'
        newStory.appendChild(newsByline)
    } 
}

// will take all the current section stories and delete them from the html
function clearStories() {
    const newsContainer = document.querySelector('#content')
    while (newsContainer.firstChild) {
        newsContainer.removeChild(newsContainer.firstChild)
    }
}

// - - - - - - - - - - - - - - - - - - -
// VARIABLE DECLARATIONS
// - - - - - - - - - - - - - - - - - - -

const backToCategories = document.querySelector('#back-to-categories')
const navItems = document.querySelector('#categories') // is the ul that will be hidden
const automobilesSelection = document.querySelector('#automobiles')
const booksSelection = document.querySelector('#books')
const foodSelection = document.querySelector('#food')
const healthSelection = document.querySelector('#health')
const moviesSelection = document.querySelector('#movies')
const nationalSelection = document.querySelector('#national')
const sportsSelection = document.querySelector('#sports')
const sundayreviewSelection = document.querySelector('#sundayreview')
const theaterSelection = document.querySelector('#theater')

var category // will be the category that was selected

const newsContainer = document.querySelector('#content')

// - - - - - - - - - - - - - - - - - - -
// EVENT LISTENERS
// - - - - - - - - - - - - - - - - - - -

// category #1 - automobiles
automobilesSelection.addEventListener('click', function() {
    hideElement(navItems)
    showElement(backToCategories)
    category = 'automobiles'
    fetchApiData()
})
// category #2 - books
booksSelection.addEventListener('click', function() {
    hideElement(navItems)
    showElement(backToCategories)
    category = 'books'
    fetchApiData()
})
// category #3 - food
foodSelection.addEventListener('click', function() {
    hideElement(navItems)
    showElement(backToCategories)
    category = 'food'
    fetchApiData()
})
// category #4 - health
healthSelection.addEventListener('click', function() {
    hideElement(navItems)
    showElement(backToCategories)
    category = 'health'
    fetchApiData()
})
// category #5 - movies
moviesSelection.addEventListener('click', function() {
    hideElement(navItems)
    showElement(backToCategories)
    category = 'movies'
    fetchApiData()
})
// category #6 - national
nationalSelection.addEventListener('click', function() {
    hideElement(navItems)
    showElement(backToCategories)
    category = 'national'
    fetchApiData()
})
// category #7 - sports
sportsSelection.addEventListener('click', function() {
    hideElement(navItems)
    showElement(backToCategories)
    category = 'sports'
    fetchApiData()
})
// category #8 - sundayreview
sundayreviewSelection.addEventListener('click', function() {
    hideElement(navItems)
    showElement(backToCategories)
    category = 'sundayreview'
    fetchApiData()
})
// category #9 - theater
theaterSelection.addEventListener('click', function() {
    hideElement(navItems)
    showElement(backToCategories)
    category = 'theater'
    fetchApiData()
})

// go back to categories button
backToCategories.addEventListener('click', function() {
    hideElement(backToCategories)
    clearStories()
    showElement(navItems)
})
