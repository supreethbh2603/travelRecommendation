function handleSearch() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // Clear previous results

  fetch("travel_recommendation_api.json")
    .then(res => res.json())
    .then(data => {
      let found = false;

      if (keyword.includes("beach")) {
        data.beaches.forEach(place => {
          displayPlace(place);
          found = true;
        });
      }

      if (keyword.includes("temple")) {
        data.temples.forEach(place => {
          displayPlace(place);
          found = true;
        });
      }

      data.countries.forEach(country => {
        if (keyword.includes(country.name.toLowerCase())) {
          country.cities.forEach(city => {
            displayPlace(city);
            found = true;
          });
        }
      });

      if (!found) {
        resultsContainer.innerHTML = "<p>No results found. Try 'beach', 'temple', or a country name.</p>";
      }
    });
}

function displayPlace(place) {
  const resultsContainer = document.getElementById("results");
  const div = document.createElement("div");
  div.className = "result-card";

  div.innerHTML = `
    <h3>${place.name}</h3>
    <img src="${place.imageUrl}" alt="${place.name}" />
    <p>${place.description}</p>
  `;

  resultsContainer.appendChild(div);
}

function clearResults() {
  document.getElementById("results").innerHTML = "";
  document.getElementById("searchInput").value = "";
}

function handleSearch() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results
  
    fetch("travel_recommendation_api.json")
      .then(res => res.json())
      .then(data => {
        let found = false;
  
        if (keyword.includes("beach")) {
          data.beaches.forEach(place => {
            displayPlace(place);
            found = true;
          });
        }
  
        if (keyword.includes("temple")) {
          data.temples.forEach(place => {
            displayPlace(place);
            found = true;
          });
        }
  
        data.countries.forEach(country => {
          if (keyword.includes(country.name.toLowerCase())) {
            country.cities.forEach(city => {
              displayPlace(city);
              found = true;
            });
          }
        });
  
        if (!found) {
          resultsContainer.innerHTML = "<p>No results found. Try 'beach', 'temple', or a country name.</p>";
        }
      });
  }
  
  function displayPlace(place) {
    const resultsContainer = document.getElementById("results");
    const div = document.createElement("div");
    div.className = "result-card";
  
    div.innerHTML = `
      <h3>${place.name}</h3>
      <img src="${place.imageUrl}" alt="${place.name}" />
      <p>${place.description}</p>
      <button onclick="bookPlace('${place.name}')">Book Now</button>
    `;
  
    resultsContainer.appendChild(div);
  }
  
  function clearResults() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("searchInput").value = "";
  }
  
  
  function bookPlace(placeName) {
    alert(`You have booked "${placeName}" successfully!`);
  }
  
