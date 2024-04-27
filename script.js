// JavaScript code
// Function to generate random data
function generateRandomData(length) {
    const data = [];
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * 100)); // Generating random numbers between 0 and 100
    }
    return data;
}

// Create an initial dataset
const initialDataLength = 7; // Number of initial data points
let salesData = generateRandomData(initialDataLength);

// Create a Chart.js chart
const ctx = document.getElementById('sales-chart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Sales Forecast',
            data: salesData,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to update the graph data and re-render
function updateGraph() {
    // Generate new random data
    salesData = generateRandomData(initialDataLength);

    // Update chart data
    salesChart.data.datasets[0].data = salesData;

    // Re-render the chart
    salesChart.update();
}

// Set interval to update the graph automatically every 3 seconds
setInterval(updateGraph, 3000);
