var homeElement = document.getElementById("home");
var childElements = document.querySelector(".oferts").querySelectorAll('div, h2, p');
var banner = document.querySelector(".ban");
var blocks = document.querySelectorAll(".block");
var links = document.querySelector(".links").querySelectorAll('li');


  function getDataInfo(elements) {
      var tab = [];
      for (var el of elements) {
          tab.push(el.dataset.color);
      }
      return tab
  }
  console.log(getDataInfo(links));

  console.log(homeElement);
  console.log(childElements);
  for (el of childElements) {
      console.log(el);
  }

  for(el of blocks) {
      console.log(el.innerHTML);
  }

for(el of blocks) {
    console.log(el.outerHTML);
}

for(el of blocks) {
    el.innerHTML = "Nowa wartość diva o klasie blocks";
    console.log(el.outerHTML)
}

var main = document.querySelector('#mainFooter');
function getId(element) {
    return element.id
}
console.log(getId(main))

function getTags(element) {
    var tab1 = [];
    for (var el of element) {
        tab1.push(el.tagName)
    }
    return tab1
}
console.log(getTags(childElements))

function getClass(element) {
    var tab2 = [];
        tab2.push(element.className);
    return tab2
}
console.log(getClass(banner))

