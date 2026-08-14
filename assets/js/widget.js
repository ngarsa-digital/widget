// Get URL parameters
let params = new URLSearchParams(window.location.search);
let phoneNumber = params.get("phone_number") || "62810000000";
let whatsappName = params.get("whatsapp_name") || "Ngarsa Official";

let nameElements = document.querySelectorAll(".name-floating, .whatsapp-name");
for (let i = 0; i < nameElements.length; i++) {
  nameElements[i].textContent = whatsappName;
}

if (params.get("whatsapp_name")) {
  let headerFoto = document.querySelector(".floating-header-foto");
  if (headerFoto) {
    headerFoto.style.display = "none";
  }
}

let whatsappText = params.get("whatsapp_text");
if (whatsappText) {
  document.querySelector(".whatsapp-text").innerHTML = whatsappText;
}

let now = new Date();
let hours = now.getHours().toString().padStart(2, "0");
let minutes = now.getMinutes().toString().padStart(2, "0");
document.querySelector(".whatsapp-time").textContent = hours + "." + minutes;

// Floating Bubble
let floatingBubble = document.getElementById("floating-bubble"),
  floatingClose = document.getElementById("floating-button"),
  textChatSend = document.getElementById("textarea-send-chat"),
  floatingStyle = document.getElementsByClassName("floating");

let styleFunction = function (style) {
  for (let index = 0; index < floatingStyle.length; index++) {
    floatingStyle[index].style.display = style;
  }
};

let openNewTab = function (url) {
  let win = window.open(url, "_blank");
  win.focus();
};

floatingBubble.addEventListener(
  "mouseover",
  function () {
    styleFunction("flex");
  },
  false,
);

floatingBubble.addEventListener(
  "click",
  function () {
    styleFunction("flex");
  },
  false,
);

floatingClose.addEventListener(
  "click",
  function () {
    styleFunction("none");
  },
  false,
);

textChatSend.addEventListener(
  "click",
  function () {
    let textChat = document.getElementById("textarea-chat").value;
    let encodeText = encodeURI(textChat);
    openNewTab("https://wa.me/" + phoneNumber + "?text=" + encodeText + "");
  },
  false,
);
