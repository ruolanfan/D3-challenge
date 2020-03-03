// @TODO: YOUR CODE HERE!
//first, set SVG area
var svgWidth = 950;
var svgHeight = 450;
var margin = {top: 20, right: 40, bottom: 40, left: 60};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

//append the chart as indicated in html file.
var svg = d3.select("#scatter")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .append("g")
            .attr("transform","translate(" + margin.left + "," + margin.top + ")");

//import the data and choose the data:

d3.csv("assets/data/data.csv").then(function(dataList) {

      dataList.forEach(function(data) {
      data.poverty = +data.poverty;
      data.age = +data.age;
      data.healthcare = +data.healthcare;
      data.smokes = +data.smokes;
      data.abbr = data.abbr;
      })})
//Set x-axis:
var x = d3.scaleLinear()
          .domain([8, 24])
          .range([ 0, width ]);

//Set y-axis:
var y = d3.scaleLinear()
          .domain([0, 28])
          .range([ height, 0]);

//Set axis function:          
var bottomAxis = d3.axisBottom(x);
var leftAxis = d3.axisLeft(y);

svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(bottomAxis);

svg.append("g")
      .call(leftAxis);
      
//Append Axis
 
svg.append("g")
          .attr("transform", `translate(0, ${height})`)
          .call(bottomAxis);
      
svg.append("g")
          .call(leftAxis);
//create circle and attach circle code to the file.
var circlesGroup = svg.selectAll("circle")
                .data(dataList)
                .append("circle")
                .attr("cx", d => xLinearScale(d.poverty))
                .attr("cy", d => yLinearScale(d.healthcare))
                .attr("r", "11")
                .attr("fill", "blue")

var textGroup = chartGroup.selectAll("text")
        .data(dataList)
        .append("text")
        .style("fill", "black")
        .attr('x',d => xLinearScale(d.poverty))
        .attr('y',d => yLinearScale(d.healthcare))
        .attr("dy", ".35em") 
        .attr("text-anchor", "middle")
        .text(d => d.abbr);
    console.log(dataList)




