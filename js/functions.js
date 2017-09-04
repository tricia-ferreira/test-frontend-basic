function toggleToolbar() {
  var elem1 = document.getElementById("js-search-container");
  var elem2 = document.getElementById("js-search-form");
  elem1.classList.toggle('hidden');
  elem2.classList.toggle('hidden');
}

function toggleButtons() {
  var elem1 = document.getElementById("edit-search");
  var elem2 = document.getElementById("cancel-search");
  elem1.classList.toggle('hidden');
  elem2.classList.toggle('hidden');
}

function editContacts() {
  var elem1 = document.getElementById("edit-search");
  var elems = document.getElementsByClassName('js-trash-icon');

  for(var i = elems.length - 1; i >= 0; --i)
  {
    elems[i].classList.toggle('invisible');
  }
}
