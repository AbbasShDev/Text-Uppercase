

$("#btn").click(function (){
    if ($("#input").val().length < 1){
        $("#display").text("PLease Enter A Text To Upper Case");
        setTimeout(function(){
        $("#display").text("");
       },2000);
        }
       else{ 
            var input = $("#input").val().toUpperCase();
            $("#display").text(input); 
}
        
})

