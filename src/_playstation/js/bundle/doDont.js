export default function doDont() {
  const tabsAsColumns = document.querySelectorAll('.tabs-as-columns');

  if(tabsAsColumns.length > 0) {
    tabsAsColumns.forEach(columns => {
      const calloutSuccess = columns.querySelector('.callout-success');
      if(calloutSuccess) {
        columns.classList.add('do');
      }
      const calloutDanger = columns.querySelector('.callout-danger');
      if(calloutDanger) {
        columns.classList.add('dont');
      }
    });
  }
}
