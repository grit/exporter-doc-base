export default function Switcher() {
  const switcherButton = document.querySelector('#design-systems-switcher .btn-icon-button');
  const dropDownItem = document.querySelector('#design-systems-switcher .dropdown-menu .is-active');
  switcherButton.insertAdjacentHTML('afterbegin',`<span class="design-system-name">${dropDownItem.textContent}</span>`);
}
