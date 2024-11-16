const salesData = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], // Labels for months
  datasets: [
    {
      label: "Order Sales ($)",
      data: [5000, 6000, 8000, 12000, 15000, 17000, 20000], // Sales data
      borderColor: "#28a745", // Line color
      backgroundColor: "rgba(40, 167, 69, 0.2)", // Background color of the line area
      borderWidth: 2,
      fill: true, // Fill under the line graph
      tension: 0.4, // Smoothness of the curve
    },
  ],
};

// Configuration of the chart
const config = {
  type: "line",
  data: salesData,
  options: {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value; // Format y-axis values as currency
          },
        },
      },
    },
  },
};

// Create the chart
const salesChart = new Chart(document.getElementById("salesChart"), config);
