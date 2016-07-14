$(document).ready(function() {
    
// Function to get input name value.
$('#text_value').click(function() {
    
var text_value = $("#name").val();
var loc_value = $("#location").val();   
    
if(text_value=='') {
    
alert("Enter Your name Please");
}else{
    
localStorage.setItem( 'person', text_value);    
localStorage.setItem( 'located',loc_value);  

    if (localStorage.getItem("person") !== null) {
  //...
window.location.assign("index.html")


}
alert(text_value);
alert(loc_value);    
    
}
});    
    

}