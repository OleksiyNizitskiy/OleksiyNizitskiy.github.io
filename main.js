let historyLink = document.getElementById("to_history"),
  rulesLink = document.getElementById("to_rules"),
  materialsLink = document.getElementById("to_materials"),
  headerLink = document.getElementById("to_header");

let historyBlock = document.getElementById("history"),
  rulesBlock = document.getElementById("rules"),
  materialsBlock = document.getElementById("materials"),
  headerBlock = document.getElementById("header");

historyLink.addEventListener("click", function (e) {
  e.preventDefault();
  historyBlock.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

rulesLink.addEventListener("click", function (e) {
  e.preventDefault();
  rulesBlock.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

materialsLink.addEventListener("click", function (e) {
  e.preventDefault();
  materialsBlock.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

headerLink.addEventListener("click", function (e) {
  e.preventDefault();
  headerBlock.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});
