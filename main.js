let historyLink = document.getElementById("to_history"),
  rulesLink = document.getElementById("to_rules"),
  materialsLink = document.getElementById("to_materials"),
  authorLink = document.getElementById("to_author"),
  headerLink = document.getElementById("to_header");

let historyBlock = document.getElementById("history"),
  rulesBlock = document.getElementById("rules"),
  materialsBlock = document.getElementById("materials"),
  authorBlock = document.getElementById("author"),
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

authorLink.addEventListener("click", function (e) {
  e.preventDefault();
  authorBlock.scrollIntoView({
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
