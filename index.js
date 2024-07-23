function numCatch(a) {
  let input = document.getElementById("text");
  input.value = input.value + a.value;
}
function barobar() {
    let r = document.getElementById("text");
    r.value = eval(r.value)
}
function reset() {
    let res = document.getElementById("text");
    res.value = ""
}
function deleteLast() {
  let text = document.getElementById('text');
  text.value = text.value.slice(0, -1);
}
