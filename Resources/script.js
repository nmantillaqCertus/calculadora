

function fnSumar(){
    if(validaInputs()){
        var suma = parseFloat($("#idNumUno").val()) + parseFloat($("#idNumDos").val()) ;
        var item = '<div class="card suma" style="width: 10rem;margin: 1%;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">'+                
                    '<div class="card-body text-center">'+
                    '<h6 class="card-title">Suma</h6>'+
                        '<h5 class="lead">'+parseFloat($("#idNumUno").val())+'</h5>'+
                        '<h5 class="lead">'+parseFloat($("#idNumDos").val())+'</h5>'+
                        '<hr>'+
                        '<h6 class="card-title">'+suma+' </h6>'+                    
                    '</div>'+
                '</div>';        
        $("#ItemsContent").append(item);
    }

}

function fnRestar(){
    if(validaInputs()){
        var resta = parseFloat($("#idNumUno").val()) - parseFloat($("#idNumDos").val()) ;
        var item = '<div class="card resta" style="width: 10rem;margin: 1%; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">'+                
                    '<div class="card-body text-center">'+
                    '<h6 class="card-title">Resta</h6>'+
                        '<h5 class="lead">'+parseFloat($("#idNumUno").val())+'</h5>'+
                        '<h5 class="lead">'+parseFloat($("#idNumDos").val())+'</h5>'+
                        '<hr>'+
                        '<h6 class="card-title">'+resta+' </h6>'+                    
                    '</div>'+
                '</div>';        
        $("#ItemsContent").append(item);
    }
}
function fnMultiplicar(){
    if(validaInputs()){
        var Multiplicar = parseFloat($("#idNumUno").val()) * parseFloat($("#idNumDos").val()) ;
        var item = '<div class="card multi" style="width: 10rem;margin: 1%; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">'+                
                    '<div class="card-body text-center">'+
                    '<h6 class="card-title">Multiplicación</h6>'+
                        '<h5 class="lead">'+parseFloat($("#idNumUno").val())+'</h5>'+
                        '<h5 class="lead">'+parseFloat($("#idNumDos").val())+'</h5>'+
                        '<hr>'+
                        '<h6 class="card-title">'+Multiplicar+' </h6>'+                    
                    '</div>'+
                '</div>';        
        $("#ItemsContent").append(item);
    }
}

function fnDividir(){
    if(validaInputs()){        
        if(parseFloat($("#idNumDos").val()) !=0 ){
            $("#MsjDivError").hide();
            var Division = parseFloat($("#idNumUno").val()) / parseFloat($("#idNumDos").val()) ;
            var item = '<div class="card divi" style="width: 10rem;margin: 1%; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">'+                
                        '<div class="card-body text-center">'+
                        '<h6 class="card-title">División</h6>'+
                            '<h5 class="lead">'+parseFloat($("#idNumUno").val())+'</h5>'+
                            '<h5 class="lead">'+parseFloat($("#idNumDos").val())+'</h5>'+
                            '<hr>'+
                            '<h6 class="card-title">'+Division+' </h6>'+                    
                        '</div>'+
                    '</div>';            
            $("#ItemsContent").append(item);

        }else{            
            $("#MsjDivError").show();            
        }

    }
}

function fnLimpiar(){
    $("#MsjDivError").hide(); 
    $("#MsjUno").hide();
    $("#MsjDos").hide();
    $("#idNumUno").val("");
    $("#idNumDos").val("");
}
function fnLimpiarHistorial(){
    $("#MsjDivError").hide(); 
    $("#MsjUno").hide();
    $("#MsjDos").hide();
    $("#ItemsContent").empty();

    $("#idMenjsaeModal").text("Se ha limpiado tu historial de operaciones.");
    $("#exampleModal").modal("toggle");
}
function validaInputs(){
    var token = true;
    if( $("#idNumUno").val().length > 0 && $("#idNumDos").val().length > 0 ){
        console.log("Todo Valido");
        $("#MsjUno").hide();
        $("#MsjDos").hide();
    }else{
        $("#MsjUno").show();
        $("#MsjDos").show();
        token = false;
    }
    return token;
}