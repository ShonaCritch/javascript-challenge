// set data as tableData variable 
var tableData = data;
// add ufo sightings data to table
function appendTable(data) {
    d3.select("tbody").html("");
    data.forEach((sighting) => {
        var tabRow = d3.select("tbody").append("tr");
        Object.values(sighting).forEach((value) => {
            var tableData = tabRow.append("td");
            tableData.text(value);
        });
    })
}

appendTable(tableData);

// create event listener and prevent default
function clickEvent() {
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filterDateTime = tableData;
    if (date) {
        filterDateTime = filterDateTime.filter((row) => row.datetime === date);
    }
    appendTable(filterDateTime);
}

d3.selectAll("#filter-btn").on("click", clickEvent);