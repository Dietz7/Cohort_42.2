const prices = [100, 400, 900, 300, 500];

// Function to display prices
function displayPrices(priceArray) {
    const container = document.getElementById('priceContainer');
    container.innerHTML = ""; // Clear the container before adding new elements

    priceArray.forEach(price => {
       const priceBlock = document.createElement('div');
       priceBlock.classList.add('price-block');
       priceBlock.textContent = `$${price}`;
       container.appendChild(priceBlock); 
    });
}

displayPrices(prices);

// Add event listener to the filter button
const filterButton = document.getElementById('filterButton');
filterButton.addEventListener('click', function handleFilterButtonClick() {
    // Filter prices greater than 450
    const filteredPrices = prices.filter(price => price > 450);
    
    // Update the displayed prices with filtered results
    displayPrices(filteredPrices);
});