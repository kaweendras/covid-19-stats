fetch('https://hpb.health.gov.lk/api/get-current-statistical')

.then(response => response.json())
.then(coronaStats => {
//console.log(coronaStats.data) // Prints result from `response.json()` in getRequest
document.getElementById("total").innerHTML = coronaStats.data.local_total_cases; // total cases
document.getElementById("new").innerHTML = coronaStats.data.local_new_cases;//new cases local_new_cases
document.getElementById("death").innerHTML = coronaStats.data.local_deaths;//death count
document.getElementById("rec1").innerHTML = coronaStats.data.local_recovered;//recovered
document.getElementById("hospi").innerHTML = coronaStats.data.local_total_number_of_individuals_in_hospitals;//in hospitals
document.getElementById("last").innerHTML = coronaStats.data.update_date_time;//last update
})
.catch(error => console.error(error))