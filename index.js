// Creates a 'close button' utilizing the document.createTextNode("\u00d7") it then creates a 'span' element and assigns "close" as its class.//
// myNodelist is then looped through and the span variable is appeneded to each element.//
var myNodelist = document.getElementsByTagName("Li");
var i; 
for (i = 0; i <myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// This block creates an array called 'close' and assignes all elements of the same class name to it.//
// When an element with the "close" class is clicked, it hides its parent element by setting its style.display property to "none.
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
// This line selects the first <ul> element found in the HTML document using the querySelector method. It assigns this element to the list variable.
// list.addEventListener('click', function(ev) { ... }, false);: This line adds a click event listener to the list (the <ul> element).
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
// Creates a new list item when clicking on the add button, if the input value is nothing, 'You must write something' will appear above.
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}