function speeddetector(speedin){
    let response = "";
    //this is to avoid negative values
    if(speedin < 0)
    {
        response = "null";
//should return ok if the speed is less than or equal to 70
    }else if(speedin >= 0 && speedin <= 70){
        response = "Ok";
        
        let perPoint = 5;

        let diff = speedin  - 70;
//return demerits point per speed input > 70
        demerits = Math.floor(diff / perPoint);

// If demerits point is more than 12 points license suspended
        if(demerits > 12){
            response = "License Suspended" + demerits;
        

    }
    return response;
}}