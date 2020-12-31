// Assign the data from data.js
let sigthings = data;

function search(){
    d3.event.preventDefault();
    // Get the body from the table
    let tbody = d3.select("tbody");
    // Get the date input from the user
    let input_date = d3.select("#EnterDate").property("value");
    // Filter the data that equals only the date input from data.js
    let filterData = sigthings.filter(search => search.datetime === input_date);
    // Add a function to append a row for each array found from the filter
    filterData.forEach(f=>{
        let row = tbody.append("tr")
    // for each element inside the array, adds a table data from that same array
    // When finished, it goes to the second array, and so on
        for(x in f){
            row.append("td").text(f[x])
        }
    })
}
// Adding the command that triggers the function to the form button
d3.select("#btn").on("click", search);
