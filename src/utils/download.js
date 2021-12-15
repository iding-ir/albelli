export default function download(id, fileName) {
  const element = document.createElement("a");
  const file = new Blob([document.getElementById(id).value], {
    type: "text/plain",
  });
  element.href = URL.createObjectURL(file);
  element.download = fileName;
  document.body.appendChild(element);
  element.click();
}
