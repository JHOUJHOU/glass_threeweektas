const menu = document.querySelector("hamburger");
const bsCollapse = new Collapse(menu, {
  toggle: false
});
function closeNavHam() {
  bsCollapse.hide();
}
function toggleNavHam() {
  bsCollapse.toggle();
}