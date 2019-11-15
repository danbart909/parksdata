function watchForm() {
  $('.stateEntry').submit(function(e) {
    console.log("?");
    e.preventDefault();
    getStateInfo();
  })};

function getStateInfo() {
  let APIKey = "kjYBPHXOiceT0V6pvObtMVfDgrXxosowye7jBFFr";
  let endpoint = "https://developer.nps.gov/api/v1/parks";
  let stateid = $('.state').val();
  let max = $('.number').val();
  let url = `${endpoint}?stateCode=${stateid}&limit=${max}&api_key=${APIKey}`
  console.log(url);
  fetch(url)
  .then(response => response.json())
  .then(responseJson => 
      displayResults(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
}
  
function displayResults(responseJson) {
  $('.results').empty();
  for (let i = 0; i < responseJson.data.length; i++){
    $('.results').append(`<h3>${responseJson.data[i].fullName}</h3>
      <p><a href="${responseJson.data[i].url}" target="_blank">${responseJson.data[i].url}</a></p>
      <p>${responseJson.data[i].description}</p>
      <p>${responseJson.data[i].directionsInfo}</p>
      <p><a href="${responseJson.data[i].directionsUrl}" target="_blank">${responseJson.data[i].directionsUrl}</a></p>
      <p>${responseJson.data[i].latLong}</p>
      <hr>`
    )};
  $('.results').removeClass('hidden');
};
  
$(function() {
  watchForm();
});

//function pull(query, limit=10) {
//  let params = {
//    code: state,
//    key: APIKey,
//    max,
//  };
//  let queryString = formatQueryParams(params)
//  let url = endpoint + '?' + queryString;
//}

//function formatQueryParams(params) {
//  let queryItems = Object.keys(params)
//    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
//  return queryItems.join('&');
//}
