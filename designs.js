const table = document.querySelector('#pixelCanvas');
const submit = document.querySelector('#submitButton');

submit.addEventListener('click', function(evt) {
	evt.preventDefault();
	makeGrid();
});

function makeGrid() {
  const height = document.querySelector('#inputHeight').value;
  const width = document.querySelector('#inputWidth').value;
  console.log(height);
  console.log(width);

table.innerHTML = '';

  for (var h = 0; h < height; h++) {
    var tr = document.createElement('tr');
    for (var w = 0; w < width; w++) {
      var td = document.createElement('td');
      tr.append(td);
    }
    table.append(tr);
  }
}

table.addEventListener('click', function(evt){
  const color = document.querySelector('#colorPicker').value;
  console.log(color);
  evt.target.style.backgroundColor=color;
});
