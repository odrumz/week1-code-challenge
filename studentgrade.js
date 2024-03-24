const marks = prompt("Enter Your Mark");
Grade(marks);
// A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.
function Grade(Gradetype){

    let finalresult = ""
//returns A for grades above or equal to 79
    if(Gradetype >= 79){
         finalresult = "A";
//returns B for grades above or equal to 60 and less than 79
    }else if(Gradetype >= 60 && Gradetype < 79){
        finalresult = "B";
//returns C for grades above or equal to49 and less than or equal to 59        
    }else if(Gradetype >= 49 && Gradetype <= 59){
        finalresult = "C";
// returns C for grades above or equal to 40 and less than 49        
    }else if( Gradetype >=40 && Gradetype < 49){
        finalresult = "D";
//returns E for grades above or equal to 0 and less than 40        
    }else if( Gradetype >= 0 && Gradetype <40) {
        finalresult = "E";
    }
//returns results depending on grade entered    
    return finalresult
}
document.getElementById("response").innerHTML = finalresult
