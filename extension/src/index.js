document.addEventListener("focusin", function (event) {
  // Ensure the event listener is only added once per element
  if (!event.target.dataset.inputListenerAdded) {
    event.target.addEventListener("input", async function (e) {
      // reconfigure the targetElement
      targetElement = e.target;

      // get the suggestion
      const suggestion = await getSuggestion(e.target.value);

      // set the value to the suggestion
      targetElement.value = suggestion;
    });

    // Mark this element so it doesn't get multiple input listeners
    event.target.dataset.inputListenerAdded = "true";
  }
});

async function getSuggestion(inputValue) {
  try {
    const response = await fetch("http://localhost:8080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: inputValue,
      }),
    });

    const { text } = await response.json();

    return text;
  } catch (error) {
    console.error(error);
  }
}
