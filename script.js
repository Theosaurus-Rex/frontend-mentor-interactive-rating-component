const formElement = document.getElementById("survey-form");
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const surveyContent = document.getElementById("rating-survey");
  const thankYouContent = document.getElementById("thank-you-text");
  const response = document.getElementById("response");
  surveyContent.classList.add("hidden");
  thankYouContent.classList.remove("hidden");
  const surveyResponse = e.target.elements["rating"].value;
  response.innerHTML = `You chose ${surveyResponse} out of 5`;
});
