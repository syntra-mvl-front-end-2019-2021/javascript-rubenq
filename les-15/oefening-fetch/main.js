const baseUrl = 'https://api.exchangeratesapi.io/';
const $container = document.getElementById('container');

//GET SELECTION
function getCurrency(){
    currency.addEventListener('change', useSelection);
    date.addEventListener('change', useSelection);
}

//GET SELECTION
function useSelection() {
    let selectedCurrency = currency.options[currency.selectedIndex].value;   
    let selectedDate = date.options[date.selectedIndex].value;
    fetchCurrency(selectedCurrency, selectedDate);
}

//FETCH SELECTION
function fetchCurrency(selectedCurrency, selectedDate){
    if (!selectedCurrency || !selectedDate) {
        return;
    }
    fetch(baseUrl + selectedDate + '?base=' + selectedCurrency, {method: 'GET'})
        .then(function(response) {
            
            if (!response.ok) {
                throw new Error('Fetch failed');
            }
            return response.json();
            })
        .then(function(jsonData) {
            console.log(jsonData);
            writeExchangeRate(jsonData);
            })
        .catch(function(error) {
            console.log(error);
            })
    }

//WRITE LAYOUT
function writeExchangeRate(rates) 
    {
        $container.innerHTML = '';
        const $dateTag = document.createElement('p');
        $dateTag.textContent = rates.date;
    
        const $baseTag = document.createElement('h4');
        $baseTag.textContent = rates.base;
    
        const $ulTag = document.createElement('ul');
        Object.keys(rates.rates).forEach(function (key) 
            {
                const $liTag = document.createElement('li');
                $liTag.textContent = key + ': ' + rates.rates[key];
                $ulTag.append($liTag);
            })
  
        $container.append($dateTag, $baseTag, $ulTag);
    }

getCurrency();
