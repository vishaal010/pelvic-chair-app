fetch("./partials/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("./partials/main.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("main").innerHTML = data;
  });