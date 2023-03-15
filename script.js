window.onload = function() {
  var canvas = document.getElementById("stock_chart_canvas");
  var ctx = canvas.getContext("2d");
  

var canvasWidth = canvas.offsetWidth;
var canvasHeight = canvas.offsetHeight;

var x = canvasWidth * 0.5;


for (i = 0.03; i < 0.93; i += 0.1) {
  ctx.beginPath();
  ctx.strokeStyle = "grey";
  ctx.moveTo(i * canvasWidth, 0.87 * canvasHeight);
  ctx.lineTo(i * canvasWidth, 0.07 * canvasHeight);
  ctx.stroke();
}

for (i = 0.07; i < 0.91; i += 0.08) {
  ctx.beginPath();
  ctx.strokeStyle = "grey";
  ctx.moveTo(0.03 * canvasWidth, i * canvasHeight);
  ctx.lineTo(0.93 * canvasWidth, i * canvasHeight);
  ctx.stroke();
}

ctx.font = "10px Arial";
ctx.fillStyle = "white";
ctx.fillText("Hello World!", 0.01 * canvasWidth, 0.9 * canvasHeight);



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3ebe14fa2amsh6da3e8b7880403ep11dbd6jsnbcc1654175ab',
		'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
	}
};

fetch('https://yh-finance.p.rapidapi.com/stock/v3/get-chart?interval=1mo&symbol=AMRN&range=5y&region=US&includePrePost=false&useYfid=true&includeAdjustedClose=true&events=capitalGain%2Cdiv%2Csplit', options)
	.then(response => response.json())
	.then(response => console.log(response))
  .then((response) =>  { 
    var timestamps = response.chart.result[0].timestamp;
    console.log(timestamps)
  })
	.catch(err => console.error(err));

function writeTimestamps(response) {

  var timestamps = response.chart.result.timestamp;
  console.log(timestamps)

}

}
