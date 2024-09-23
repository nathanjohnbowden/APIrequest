
function sunAPI() {
    let myLat = $("#latitude").val();
    let myLong = $("#longitude").val();
    
    // console.log(myLat);

    $.ajax(`https://api.sunrise-sunset.org/json?lat=${myLat}&lng=${myLong}&date=today`, {
        success: function (sunData) {
            // console.log(sunData);
        let enjoyTheSun = $(`<p>You can enjoy the sunrise at ${sunData.results.sunrise} and the sunset at ${sunData.results.sunset}.</p>`);
        
        $("#sunWrapper").append(enjoyTheSun);
    }
    });
}