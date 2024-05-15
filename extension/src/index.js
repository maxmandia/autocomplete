document.addEventListener("focusin", function (event) {
  if (event.target.dataset.inputListenerAdded) {
    return;
  }

  if (event.target.tagName === "TEXTAREA") {
    const ghostText = document.createElement("div");

    ghostText.style.zIndex = "100";

    event.target.parentNode.insertBefore(ghostText, event.target.nextSibling);

    copyStyles(event.target, ghostText);

    const debouncedInputHandler = debounce(async function (e) {
      if (e.target.value.length === 0) {
        ghostText.textContent = "";
        return;
      }
      const targetElement = e.target;
      const suggestion = await getSuggestion(targetElement.value);
      ghostText.textContent = targetElement.value + `${suggestion}`;
    }, 500);

    event.target.addEventListener("input", function (e) {
      ghostText.textContent = e.target.value;
      debouncedInputHandler(e);
    });

    event.target.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        e.preventDefault();
        event.target.value = ghostText.textContent;
      }
    });
  }

  event.target.dataset.inputListenerAdded = "true";
});

const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    copyStyles(entry.target, ghostText);
  }
});

resizeObserver.observe(textarea);

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

function copyStyles(source, target) {
  // get the parent of the source
  const parent = source.parentNode;

  // apply postion relative to the parent
  parent.style.position = "relative";

  const computedStyle = window.getComputedStyle(source);

  for (const key of computedStyle) {
    if (
      [
        "font-size",
        "font-family",
        "text-align",
        "padding-bottom",
        "padding-top",
        "padding-left",
        "padding-right",
        "border-bottom-width",
        "border-top-width",
        "border-left-width",
        "border-right-width",
        "box-sizing",
        "line-height",
        "width",
        "height",
      ].includes(key)
    ) {
      target.style[key] = computedStyle[key];
    }
  }
  target.style.position = "absolute";
  target.style.top = "0";
  target.style.left = "0";
  target.style.right = "0";
  target.style.bottom = "0";
  target.style.pointerEvents = "none";
  target.style.zIndex = "1";
  target.style.color = "rgba(204, 204, 204, 0.7)";
  target.style.background = "none";
  target.style.overflow = "hidden";
  target.style.whiteSpace = "pre-wrap";
  target.style.wordWrap = "break-word";
  target.style.borderColor = "transparent";
  target.style.borderStyle = "solid";
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
