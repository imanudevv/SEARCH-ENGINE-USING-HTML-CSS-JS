const accesskey = "GCdlwriX7c4EZnl2iUMO1MufTstYuPEIUjQSl_-uCF0";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchimages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = ""; // Clear results on new search
    }

    data.results.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.urls.small;
        imgElement.alt = image.alt_description;
        searchResult.appendChild(imgElement);
    });

    if (data.results.length > 0) {
        showMoreBtn.style.display = "block";
    }
    
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchimages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    searchimages();
});
