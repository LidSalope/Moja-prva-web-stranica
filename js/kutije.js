$(document).ready(function() {

    $( "#gm1" ).click(function() {
        $('#kontakt').css('display', 'inline');
        $('#poslovnice').css('display', 'none');
        //$('#narudzba').css('display', 'none');
        //console.log('prvi');
    });

    $( "#gm2" ).click(function() {
        $('#kontakt').css('display', 'none');
        $('#poslovnice').css('display', 'inline');
        //$('#narudzba').css('display', 'none');
        //console.log('drugi');
    });


    var myOptionss = {
            zoom: 16,
            center: new google.maps.LatLng(45.153941, 18.022788),
            //mapTypeId: google.maps.MapTypeId.ROADMAP
        }

    var map1 = new google.maps.Map(document.getElementById("map_canvas"), myOptionss);

    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(45.153941, 18.022788),
        map: map1,
        title:"Trznica"
    });

    var myOptions = {
            zoom: 16,
            center: new google.maps.LatLng(45.157419, 18.032438),
            //mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    var map2 = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);

    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(45.157419, 18.032438),
        map: map2,
        title:"Hebrang"
    });

    /*
    $( "#gm3" ).click(function() {
        $('#kontakt').css('display', 'none');
        $('#poslovnice').css('display', 'none');
        $('#narudzba').css('display', 'inline');
        //console.log('treći');
    }); */

    

});