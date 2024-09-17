const priceContainer = document.querySelector('.price-container');
const filterButton =  document.querySelector('.filter-button');

const prices = [100, 400, 900, 300, 500];

//create function which will display elements of the array in blocks on the page, depending on the array we get

const renderPrices = (pricesArray) =>{
pricesArray.forEach((price) => {
    const priceBlock = document.createElement('div');
    priceBlock.textContent = price;
    priceContainer.append(priceBlock);
});
};

renderPrices(prices);

const filterPrices = ()=>{
priceContainer.innerHTML =  '';

   const filterArr = prices.filter((price) => price > 450);
   renderPrices(filterArr)
};

filterButton.addEventListener("click", filterPrices);