
const form = document.getElementById("trip-form");
const results = document.getElementById("results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const days = document.getElementById("days").value;
  const budget = document.getElementById("budget").value;
  const group = document.getElementById("group").value;

  const interests = Array.from(
    document.querySelectorAll('input[name="interest"]:checked')
  ).map(function (checkbox) {
    return checkbox.value;
  });

  if (interests.length === 0) {
    results.innerHTML = `
      <h2>Choose Your Interests</h2>
      <p>Please select at least one interest to plan your visit.</p>
    `;
    return;
  }

  results.innerHTML = `
    <h2>Your Nathdwara Plan</h2>
    <p><strong>Duration:</strong> ${days}</p>
    <p><strong>Budget:</strong> ₹${budget}</p>
    <p><strong>Travel group:</strong> ${group}</p>
    <p><strong>Your interests:</strong> ${interests.join(", ")}</p>
    <p>Great! Your choices have been received. Next, we will use them
    to recommend suitable places from your researched dataset.</p>
  `;
});
0
