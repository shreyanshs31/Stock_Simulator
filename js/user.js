const searchInput = document.querySelector("#input-el");
const searchContainer = document.querySelector(".suggesstions-wrap");
const suggesstionsContainer = document.querySelector(".suggesstions");


function showRecommendedList(recommendedList) {

    if (!recommendedList.length) {
        return searchContainer.classList.remove("show");
    }
    searchContainer.classList.add("show");
    suggesstionsContainer.innerHTML = "";
    recommendedList.map(recommendedItem => {
        const li = document.createElement("li");
        li.textContent = recommendedItem.search.replace(',',' | ');
        suggesstionsContainer.appendChild(li);
    })
}


async function filterSuggesstions() {
    const response = await fetch("../stock_list.json")
    const suggesstionsList = await response.json();
    let searchValue = searchInput.value;
    let recommendedList = [];
    if (searchValue.length) {
        recommendedList = suggesstionsList.filter(listItem => listItem.search.toLowerCase().includes(searchValue.toLowerCase()));
    }
    showRecommendedList(recommendedList);
}

searchInput.addEventListener("keyup", filterSuggesstions);
