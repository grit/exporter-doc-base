export default function Switcher() {
  const switcherButton = document.querySelector('#design-systems-switcher .btn-icon-button');
  const dropDownItem = document.querySelector('#design-systems-switcher .dropdown-menu .is-active');
  switcherButton.insertAdjacentHTML('afterbegin',`<span class="switch-name">${dropDownItem.textContent}</span>`);
}
