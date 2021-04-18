const itemsModal = $("#items-modal");
const speechBox = $(".speech-overlay");
const dialogue = speechBox.data().dialogue;
const currentLocation = speechBox.data().location;
let currentLine = 1;
let finished = false;

$(document).on("click", onClick);

function onClick() {
  if (finished) {
    window.location.href = "/map";
  } else if (currentLine >= dialogue.length) {
    itemsModal.modal("show");
  } else {
    nextLine();
  }
}
// show the next dialogue line
function nextLine() {
  setSpeechBox(dialogue[currentLine]);
  currentLine = currentLine + 1;
}

// insert dialogue in an animated css selector
function setSpeechBox(text) {
  speechBox.html(
    `<div class="text-container typing-animation">
        ${text}
    </div>`
  );
}

// show items, fire save to server on click function, show dialogue as a result, finish the location
$(".item").on("click", onClickItem);

function onClickItem(event) {
  event.stopPropagation();

  const item = JSON.parse(event.currentTarget.dataset.item);
  sendItemToServer(item.name, currentLocation);

  itemsModal.modal("hide");
  setSpeechBox(`${item.translation}, great choice!`);

  finished = true;
}

// save to server functions
function sendItemToServer(item, location) {
  // fetch the /items from the 
  fetch("/api/item", {
    method: "POST",
    body: JSON.stringify({ item, location }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => console.log(response));
}
