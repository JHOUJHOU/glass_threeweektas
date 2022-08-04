"use strict";

var menu = document.querySelector("hamburger");
var bsCollapse = new Collapse(menu, {
  toggle: false
});

function closeNavHam() {
  bsCollapse.hide();
}

function toggleNavHam() {
  bsCollapse.toggle();
}
//# sourceMappingURL=all.js.map
