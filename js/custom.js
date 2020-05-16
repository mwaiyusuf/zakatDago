//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function zakatCalculator() {
  /*since every input is an strings,av to convert to integer*/
    var gold = parseInt(document.getElementById('q').value);
    var silver = parseInt(document.getElementById('r').value);
    var cash = parseInt(document.getElementById('s').value);
    var loan = parseInt(document.getElementById('t').value);
    var stock = parseInt(document.getElementById('u').value);
    var tax = parseInt(document.getElementById('v').value);
    
    var zaka=[gold,silver,cash,loan,stock,tax];
   /*if someone inputs something that is not a number to output this*/
   if(isNaN(zaka[0]) || isNaN(zaka[1]) || isNaN(zaka[2]) || isNaN(zaka[3]) || isNaN(zaka[4]) || isNaN(zaka[5])  ){
    alert('please enter a number');
 }
 }


 function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
download("hello.txt","This is the content of my file :)");
