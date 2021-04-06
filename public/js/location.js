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

function nextLine() {
  setSpeechBox(dialogue[currentLine]);
  currentLine = currentLine + 1;
}

function setSpeechBox(text) {
  speechBox.html(
    `<div class="text-container typing-animation">
        ${text}
    </div>`
  );
}

$(".item").on("click", onClickItem);

function onClickItem(event) {
  event.stopPropagation();

  const item = event.currentTarget.dataset.item;
  sendItemToServer(item, currentLocation);

  itemsModal.modal("hide");
  setSpeechBox("Great choice!");

  finished = true;
}

function sendItemToServer(item, location) {
  fetch("/item", {
    method: "POST",
    body: JSON.stringify({ item, location }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => console.log(response));
}
