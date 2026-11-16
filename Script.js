

const form = document.getElementById("trip-form");
const results = document.getElementById("results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the visitor's choices
  const days = document.getElementById("days").value;
  const budget = Number(document.getElementById("budget").value);
  const group = document.getElementById("group").value;

  // Get selected interests
  const interests = Array.from(
    document.querySelectorAll(
      'input[name="interest"]:checked'
    )
  ).map(function (checkbox) {
    return checkbox.value;
  });

  // Check visitor selections
  if (interests.length === 0) {
    results.innerHTML = `
      <h2>Choose Your Interests</h2>
      <p>Please select at least one interest.</p>
    `;
    return;
  }

  // Find matching places
  const recommendations = places.filter(function (place) {
    return place.interests.some(function (interest) {
      return interests.includes(interest);
    });
  });

  // Handle no matching places
  if (recommendations.length === 0) {
    results.innerHTML = `
      <h2>No Matches Found</h2>
      <p>Try selecting different interests.</p>
    `;
    return;
  }

  // Display recommendations
  results.innerHTML = `
    <h2>Your Nathdwara Recommendations</h2>

    <p><strong>Duration:</strong> ${days}</p>
    <p><strong>Budget:</strong> ₹${budget}</p>
    <p><strong>Travel group:</strong> ${group}</p>

    <h3>Places Selected for You</h3>

    ${recommendations.map(function (place) {
      return `
        <div class="place-card">
          <h3>${place.name}</h3>
          <p>${place.description || "Discover this place in Nathdwara."}</p>
          <p><strong>Location:</strong>
          ${place.location || "Not yet available"}</p>
        </div>
      `;
    }).join("")}
  `;
});


