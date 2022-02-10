export default function (msg = "default") {
  var div = document.createElement("div");
  div.style.width = "100%";
  div.style.height = "100vh";
  div.style.opacity = 0.6;
  div.style.background = "#000";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.style.position = "absolute";
  div.style.top = 0;
  div.style.left = 0;
  div.style.zIndex = 9999;

  var div2 = document.createElement("div");
  div2.style.width = "60%";
  div2.style.height = "50%";
  div2.style.background = "#000";
  div2.style.opacity = 1;
  div2.style.display = "flex";
  div2.style.alignItems = "center";
  div2.style.justifyContent = "center";

  div2.position = "absolute";
  div2.style.zIndex = 9999;

  var div3 = document.createElement("div");
  div3.style.width = "100%";

  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");

  div3.appendChild(btn1, btn2);
  div2.appendChild(div3);
  div.appendChild(div2);
  document.querySelector("body").appendChild(div);

  div.addEventListener("click", () => {
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("body").removeChild(div);
  });
  document.querySelector("body").style.overflow = "hidden";

  var confirm = 0;

  btn1.onclick = () => (confirm = 1);
  btn2.onclick = () => (confirm = 2);

  return confirm;
}
