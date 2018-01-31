// MIT license - Andrew Fakhry
$(document).ready(function(){
  // This function creates the drawing work space as a table
  $("button[alt='submit']").click(function(){
    // removes previous table to create clean work space
    $('table').remove();
    // identifies the height and width of work space from the user input
    var height = $("input[name='height']").val();
    var width = $("input[name='width']").val();
    var size = $("input[name='size']").val();
    // creates the table
    $('fieldset:last').append('<table></table>');
    for (var h = 0; h < height; h++) {
      $('table').append("<tr style='padding:"+size+"px;'>");
      for (var w = 0; w < width; w++) {
        $('tr:last').append("<td style='padding:"+size+"px;'></td>");
      }
      $('table').append('</tr>');
    }
  });
  //This function colors the cells of the table
  $('body').on('click','table', function(evt){
    var color = $("input[type='color']").val();
    $(evt.target).css("background-color",color);
  });
  //

  $("input[alt='save-image']").click(function() {
      html2canvas($("table").get(0), {
        onrendered: function (canvas) {
          var a = document.createElement('a');
          a.href = canvas.toDataURL("image/png");
          a.download = 'Pixel Drawing.png';
          a.click();
        }
      });
  });
  $('body').on('click',"input[alt='clean-workspace']", function(){
  //$("input[alt='clean-workspace']").click(function() {
    $("td").each(function(evt) {
        $(this).css("background-color","")
    });
  });
  // var link = $("input[alt='save-image']");
  // $('body').on('click', link, function(){
  //   html2canvas($("table"), {
  //       onrendered: function (canvas) {
  //           link.href = canvas.toDataURL();
  //           link.download = "mypainting.png";
  //    }
  //   });
  // });
//   var link = $("input[alt='save-image']");
//   link.addEventListener('click', function(ev) {
//       link.href = canvas.toDataURL();
//       link.download = "mypainting.png";
//   }, false);
//   document.body.appendChild(link);
});
