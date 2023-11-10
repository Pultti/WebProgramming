// Description: This file contains the logic for the Stocks page.

// This class represents an investment
class Investment {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }

  display() {
    return `${this.name}: ${this.amount} `;
  }
}


// Create an empty portfolio array
// This will be used to store Investment objects
let portfolio = [];

const stockList = [
  {symbol: 'MSFT', name: 'Microsoft'},
  {symbol: 'AAPL', name: 'Apple'},
  {symbol: 'GOOGL', name: 'Google'},
  {symbol: 'AMZN', name: 'Amazon'},
  {symbol: 'TSLA', name: 'Tesla'},
  {symbol: 'FB', name: 'Facebook'},
  {symbol: 'NVDA', name: 'NVIDIA'},
  {symbol: 'NFLX', name: 'Netflix'},
  {symbol: 'ADBE', name: 'Adobe'},
  {symbol: 'INTC', name: 'Intel'},
  {symbol: 'CRM', name: 'Salesforce'},
  {symbol: 'CSCO', name: 'Cisco Systems'},
  {symbol: 'ORCL', name: 'Oracle'},
  {symbol: 'SAP', name: 'SAP'},
  {symbol: 'SHOP', name: 'Shopify'},
  {symbol: 'SQ', name: 'Square'},
  {symbol: 'ZM', name: 'Zoom'},
  {symbol: 'UBER', name: 'Uber'},
  {symbol: 'LYFT', name: 'Lyft'},
  {symbol: 'AMD', name: 'Advanced Micro Devices'},
  {symbol: 'QCOM', name: 'Qualcomm'},
  {symbol: 'IBM', name: 'IBM'},
  {symbol: 'HPQ', name: 'HP'},
  {symbol: 'DELL', name: 'Dell Technologies'},
  {symbol: 'ATVI', name: 'Activision Blizzard'},
  {symbol: 'EA', name: 'Electronic Arts'},
  {symbol: 'TTWO', name: 'Take-Two Interactive'},
  {symbol: 'SPOT', name: 'Spotify'},
  {symbol: 'TWTR', name: 'Twitter'},
  {symbol: 'SNAP', name: 'Snap'},
  {symbol: 'DOCU', name: 'DocuSign'},
  {symbol: 'ROKU', name: 'Roku'},
  {symbol: 'FSLR', name: 'First Solar'},
  {symbol: 'ADSK', name: 'Autodesk'},
  {symbol: 'VMW', name: 'VMware'},
  {symbol: 'NOW', name: 'ServiceNow'},
  {symbol: 'WDAY', name: 'Workday'},
  {symbol: 'RNG', name: 'RingCentral'},
  {symbol: 'TEAM', name: 'Atlassian'},
  {symbol: 'OKTA', name: 'Okta'},
  {symbol: 'ZS', name: 'Zscaler'},
  {symbol: 'PANW', name: 'Palo Alto Networks'},
  {symbol: 'SPLK', name: 'Splunk'},
  {symbol: 'AKAM', name: 'Akamai Technologies'},
  {symbol: 'HUBS', name: 'HubSpot'},
  {symbol: 'ESTC', name: 'Elastic'},
  {symbol: 'WIX', name: 'Wix.com'},
  {symbol: 'ZEN', name: 'Zendesk'},
  {symbol: 'VRSK', name: 'Verisk Analytics'},
  {symbol: 'LOGI', name: 'Logitech'}
  // Add more stocks here
];

function populateDropdown() {
  const stockDropdown = document.getElementById('stockSymbol');
  stockList.forEach(stock => {
    const option = document.createElement('option');
    option.value = stock.symbol;
    option.textContent = `${stock.name} (${stock.symbol})`;
    stockDropdown.appendChild(option);
  });
}

function updateDOM() {
  const portfolioDiv = document.getElementById('portfolio');
  portfolioDiv.innerHTML = '';
  portfolio.forEach((investment, index) => {
    const investmentDiv = document.createElement('div');
    investmentDiv.className = 'investment-box';
    investmentDiv.textContent = investment.display();

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      portfolio.splice(index, 1);
      updateDOM();
    });

    investmentDiv.appendChild(deleteButton);
    portfolioDiv.appendChild(investmentDiv);
  });
}


// Add an event listener to the Add Investment button
document.getElementById('addInvestment').addEventListener('click', () => {
  const name = document.getElementById('investmentName').value.trim();
  const amount = document.getElementById('investmentAmount').value;

  if (!name) {
    alert('Investment name cannot be empty!');
    return;
  }

  if (!amount || isNaN(amount) || amount <= 0) {
    alert('Give valid stock amount.');
    return;
  }

  const newInvestment = new Investment(name, parseFloat(amount));
  portfolio.push(newInvestment);
  updateDOM();

  document.getElementById('investmentName').value = '';
  document.getElementById('investmentAmount').value = '';
});


// Initialize the DOM with any saved investments
updateDOM();

function initializeDOM() {
  updateDOM();
  populateDropdown();
}

// Start the timer
// This timer will clear the portfolio after 60 seconds
let timeLeft = 60;
const timerElement = document.getElementById('timer');
const timerInterval = setInterval(() => {
  timerElement.textContent = timeLeft;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    timerElement.textContent = 'X_X';
    
    // Clear the portfolio and update the DOM
    portfolio.length = 0;
    updateDOM();
  }
}, 1000);


      // !!! Note !!  Alphavantage API has a limit of 5 calls per minute  !!! NOTE !!!

// Fetch is NOT inside dom tree so it will NOT spend calls by refreshing the page
// This will fetch the latest close price for the selected stock symbol
// Encapsulated function to fetch data from the API
async function fetchDataFromAPIAsync(url) {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
}

// Function to handle fetched data and update UI accordingly
async function handleStockPrice() {
  const selectedSymbol = document.getElementById('stockSymbol').value;
  const apiKey = "Get your free api key from alphavantage website and insert it here"; // Your API Key, something like this "AAA5GGGG6HHHH7"
  const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${selectedSymbol}&interval=5min&apikey=${apiKey}`;
  
  try {
    let data = await fetchDataFromAPIAsync(apiUrl);
    const latestClosePrice = data["Time Series (5min)"][Object.keys(data["Time Series (5min)"])[0]]["4. close"];
    document.getElementById('stockPriceBox').innerText = `Latest close price for ${selectedSymbol} is ${latestClosePrice}`;

    console.log("API call successful");  // <--  API call was successful
  } catch (error) {
    console.error("API call error:", error);
    document.getElementById('stockPriceBox').innerText = 'Failed to fetch stock price. Try again later.';
  }
}

document.getElementById('fetchPrice').addEventListener('click', handleStockPrice);
// // Function to fetch stock price and update it every 5 minutes,  ! Alphavantage API has a limit of 5 calls per minute !
// function fetchStockPrice() {
//   const selectedSymbol = document.getElementById('stockSymbol').value;
//   const apiKey = "Get your free api key from alphavantage website and insert it here"; // Your API Key, something like this "AAA5GGGG6HHHH7"
//   fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${selectedSymbol}&interval=5min&apikey=${apiKey}`)
//     .then(response => response.json())
//     .then(data => {
//       const latestClosePrice = data["Time Series (5min)"][Object.keys(data["Time Series (5min)"])[0]]["4. close"];
//       document.getElementById('stockPriceBox').innerText = `Latest close price for ${selectedSymbol} is ${latestClosePrice}`;
//     })
//     .catch(error => {
//       console.error("API call error:", error);
//       document.getElementById('stockPriceBox').innerText = 'Failed to fetch stock price. Try again later.';
//     });
// }

// // Event listener for button click
// document.getElementById('fetchPrice').addEventListener('click', fetchStockPrice);

// // Set interval to fetch every 5 minutes
// setInterval(fetchStockPrice, 300000);


// This will filter the stock symbols based on the user's input
document.getElementById('stockSearch').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const options = document.querySelectorAll('#stockSymbol option');

  options.forEach(option => {
    const text = option.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      option.style.display = '';
    } else {
      option.style.display = 'none';
    }
  });
});

// This will save the current portfolio to local storage
function saveInvestments() {
  localStorage.setItem('portfolio', JSON.stringify(portfolio));
}

// This will load the saved portfolio from local storage
function loadInvestments() {
  const savedPortfolio = localStorage.getItem('portfolio');
  if (savedPortfolio) {
    // Empty the current portfolio array
    portfolio.length = 0;

    // Parse the saved investments and recreate Investment objects
    const parsedPortfolio = JSON.parse(savedPortfolio);
    parsedPortfolio.forEach(investment => {
      const newInvestment = new Investment(investment.name, investment.amount);
      portfolio.push(newInvestment);
    });

    // Update the DOM
    updateDOM();

    // Reset the timer
    clearInterval(timerInterval);
    timeLeft = 60;
    timerElement.textContent = timeLeft;

    // Restart the timer
    // startTimer();  // Make sure this function exists if you're calling it
  }
}

// Add an event listener to the Clear Investments button
document.getElementById('clearInvestments').addEventListener('click', () => {
  portfolio.length = 0;  // Clears the portfolio array
  updateDOM();  // Updates the DOM to reflect the empty portfolio
});

// Add event listeners to the Clear and Save buttons
document.getElementById('saveInvestments').addEventListener('click', saveInvestments);
document.getElementById('loadInvestments').addEventListener('click', loadInvestments);




// Populate dropdown when page loads
window.addEventListener('DOMContentLoaded', populateDropdown);

