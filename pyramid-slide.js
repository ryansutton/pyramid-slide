window.onload = drawPyramid()

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a pyramid of the specified height
 */
function drawPyramid() {
    var heightElem = document.getElementById("height");
    var brickElem= document.getElementById("brick");
    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < heightElem.value; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = heightElem.value - row - 1;

        // build up a string for this row
        // debugger;
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }

        for (var i = 0; i < numBricks; i++) {
            rowStr += brickElem.value;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
