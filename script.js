
  
  
  var x = document.getElementsByClassName("yr-table yr-table-hourly yr-popup-area");
  var datenme = document.getElementsByClassName("dayname")[0].textContent;
  var day = document.getElementsByClassName("day")[0].outerText;
  var month = document.getElementsByClassName("month")[0].textContent;
  var year = document.getElementsByClassName("year")[0].textContent;

  console.log(datenme);
  console.log(day);
  console.log(month);
  console.log(year);
  var b = x[0];
  var c = b.rows.length;

  var i;
for (i = 0; i < 2; i++) { 
    var d = b.rows[i].cells;
  
  console.log(d); 
}
var j;
for (j = 2; j < 14; j++) { 
    
    var k;
    var x = "";
    for (k = 0; k < 9; k++) { 
        var d = b.rows[j].cells[k].textContent;

         x= x +" " +d;
      
      
    }
    console.log(x); 
  
}
  //var c = b.rows[3].cells.length;
  
  console.log(c); 