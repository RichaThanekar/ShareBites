var totalDonatedKg = 0;
var ctx = document.getElementById('chart').getContext('2d');
var foodData = {}; // Object to store donated food data

function addToInventory() {
    var foodType = document.getElementById("foodType").value;
    var quantity = parseFloat(document.getElementById("quantity").value);
    var pickUpTime = document.getElementById("pickUpTime").value;
    var location = document.getElementById("location").value; // Added location
    
    if (foodType && quantity && pickUpTime && location) { // Added condition for location
        var newItem = document.createElement("li");
        newItem.textContent = foodType + ": " + quantity + " kg (Pick-up Time: " + pickUpTime + ", Location: " + location + ")"; // Added location to display
        document.getElementById("inventoryList").appendChild(newItem);
        
        // Update total donated food and food data
        totalDonatedKg += quantity;
        if (foodData[foodType]) {
            foodData[foodType] += quantity;
        } else {
            foodData[foodType] = quantity;
        }
        
        document.getElementById("totalDonated").textContent = "Total Donated: " + totalDonatedKg.toFixed(2) + " kg";
        drawChart();
        document.getElementById("foodType").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("pickUpTime").value = "";
        document.getElementById("location").value = ""; // Clear location input
    } else {
        alert("Please fill out all fields with valid values.");
    }
}

function generateGradientColor(index) {
    var hue = (index * 137.508) % 360;
    return 'hsl(' + hue + ', 100%, 50%)';
}

function drawChart() {
    ctx.clearRect(0, 0, 400, 400); // Clear previous chart
    
    var foodTypes = Object.keys(foodData);
    var totalQuantity = Object.values(foodData).reduce((a, b) => a + b, 0);
    var startAngle = -Math.PI / 2;
    
    foodTypes.forEach((foodType, index) => {
        var sliceAngle = (foodData[foodType] / totalQuantity) * 2 * Math.PI;
        var sliceMidAngle = startAngle + sliceAngle / 2;
        
        ctx.beginPath();
        ctx.moveTo(200, 200); // Center of the pie chart
        ctx.arc(200, 200, 150, startAngle, startAngle + sliceAngle);
        
        // Set solid fill color
        ctx.fillStyle = generateGradientColor(index);
        ctx.fill();
        
        // Draw label
        var labelX = 200 + Math.cos(sliceMidAngle) * 100;
        var labelY = 200 + Math.sin(sliceMidAngle) * 100;
        ctx.fillStyle = '#000';
        ctx.font = 'bold 16px Arial';
        ctx.fillText(foodType, labelX, labelY);
        
        startAngle += sliceAngle;
    });
    
    // Draw circle boundary
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, 2 * Math.PI); // Outer circle
    ctx.strokeStyle = '#333'; // Dark color for the boundary
    ctx.lineWidth = 2; // Set the line width
    ctx.stroke(); // Draw the circle boundary
}
