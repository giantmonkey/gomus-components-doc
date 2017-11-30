function setUpVersions() {
  var selects = Array.from(document.getElementsByClassName('version-select'));
  selects.forEach( (select) => {
    var optionList = select.options;
    var options = [
      {
        "text"  : "next (v1 - beta)",
        "value" : "/gomus-components-doc/next/"
      },
      {
        "text"  : "stable",
        "value" : "/gomus-components-doc/"
      }
    ];
    var version = location.pathname.split('/')[2]

    var selectedIndex = 1;
    options.forEach( (option, index) => {
      optionList.add( new Option(option.text, option.value ));
      option.value === '/gomus-components-doc/' + version + '/' ? selectedIndex = index : null;
    });
    select.selectedIndex = selectedIndex;
    if (select.selectedIndex == 0) {
      let body = document.getElementsByTagName('body')[0];
      body.classList.add('next');
    }
    select.onchange=changeEventHandler;

  });

}
function changeEventHandler(event) {
  location.href = event.target.value;
}
window.onload = setUpVersions;
