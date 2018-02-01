$(function() {

//Variables 
const canvas =  $('#pixel-canvas');   
    
//Function to delete the grid    
    function deleteGrid() {
    //deleting the Grid by removing the table body
        canvas.find('tbody').remove();
    };

//Function to create the grid
    function makeGrid(tbheight, tbwidth) {

        canvas.append($('<tbody>'));
        
        for (i = 1; i <= tbheight; i++) {

            canvas.find('tbody').append($('<tr>'));
            };
    
        for (j = 1; j <= tbwidth; j++) {
            $('tr').append($('<td>'));   
            };    
    };
    
//Change the layout when going from start to editing mode 
    function secondView() {
        $('.first-view').remove();
        $('.second-view').removeClass('hide');
        $('section').addClass('second-view');
        $('.container').addClass('second-view');
        $('fieldset').addClass('second-view');
    };

//Go from start page to editing mode
    $( "#grid" ).submit(function( event ) {

        event.preventDefault(); 
        secondView();
        deleteGrid();
        makeGrid($('#tbheight').val(), $('#tbwidth').val());

    });

    
//Change the color of a table cell when clicking on it 
    canvas.on("click", "td", function(){
     
        $(this).css('background', color);
        
    });  


//Change the color of a table cell when clicking and moving over it 
//combine mousedown + mouseover to draw
    let isDown = false;

    $(document).mousedown(function() {
      isDown = true;
    });

    $(document).mouseup(function() {
      isDown = false;
    });

// event is added to table not cells
    canvas.on("mousemove", function(event) {
      if (event.target && event.target.nodeName == "TD") {
        if (isDown) {
           changeColor(event.target, $('#favcolor').val());
        }
        }
    });

    
// change color 
    function changeColor(element, color) {
      $(element).css("background-color", color);
    }
    
    

// remove grid lines 
    $('.switch').on("click", function() {
                if ($("#grid-switch").prop('checked')) {
                canvas.find("td").css("border-style", "dotted");
            } else {
               canvas.find("td").css("border-style", "hidden");
            }
    });


});
