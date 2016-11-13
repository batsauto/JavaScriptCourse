document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here
  var canvas = document.getElementById("resultsCanvas");
  var ctx = canvas.getContext("2d");

  // Draw the trends graph on page load.
  drawTrends();

  document.getElementById("summaryButton").addEventListener("click", () => {
    drawSummary();
  });
  document.getElementById("trendsButton").addEventListener("click", () => {
    drawTrends();
  });
  document.getElementById("overallScoreButton").addEventListener("click", () => {
    drawOverallScore();
  });

  function drawOverallScore() {
    document.getElementById("graphType").innerText = "Overall Score";
    clearCanvas();
  }

  function drawTrends() {
    document.getElementById("graphType").innerText = "Trends";
    clearCanvas();
  }

  function drawSummary() {
    document.getElementById("graphType").innerText = "Summary";
    clearCanvas();
  }

  function clearCanvas() {
    // Draw a big white rectangle
    ctx.fillStyle = "rgb(256,256,256)";
    ctx.fillRect(0, 0, 850, 600);

    // Draw the legend
    ctx.font = "25px Arial";
    ctx.fillStyle = "purple";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText("Scores", 0, 300);
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText("Days", 425, 600);

    // Draw the Axes
    ctx.beginPath();
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.lineWidth = 3;
    ctx.moveTo(100, 50);
    ctx.lineTo(100, 550);
    ctx.lineTo(800, 550);
    ctx.stroke();
    ctx.closePath();

    // Put in a logo - why not?
    var img = new Image();
    img.addEventListener("load", () => {
      ctx.drawImage(img, 750, 50, 100, 100);
    });
    img.src = "../../content/images/javaScript.png";
  }

});