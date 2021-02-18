function changeCountrySort(tab) {
    hideAllSections();
   var section = document.getElementById(tab);
   section.classList.remove('hide');
}

function hideAllSections() {
    // sort through rest of tabs
    var sortsections = document.getElementsByClassName('sortSection');
    for (var section of sortsections) {
        section.classList.add('hide');
    }
}