/* basic bar graph made with d3.js */
data = [100, 324, 903, 4, 300]

update(data)

setTimeout(function() { update([100, 324, 903, 4, 10]) }, 3000)
setTimeout(function() { update([100, 324, 4, 10]) }, 6000)
setTimeout(function() { update([100, 324, 4, 10, 500, 44]) }, 9000)

function update(updated_data) {
  data_bind = d3.select(".chart").selectAll("div")
    .data(updated_data)

    data_bind.exit().remove()

  data_bind
    .enter()
    .append("div")
      .style("width", "0")
      .style("height", "40")
      .text(function(d) { return d.toString() })
      .transition()
        .duration(1000)
        .style("width", function(d) { return d.toString() })

    data_bind
    .transition()
      .duration(1000)
      .style("width", function(d) { return d.toString() })
}
