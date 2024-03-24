function tax(incomeSalary){
    let taxes = 0;
    let grossTax = 0;
    let amount = 0;
    //calculation of gross income before NHIF AND NSSF deductions

    if(incomeSalary > 0 && incomeSalary <= 24000){
        grossTax = (incomeSalary*0.10);
        taxes = incomeSalary - grossTax;
    }else if (incomeSalary >= 24001 && incomeSalary <= 32333){
        amount = (incomeSalary - 24000) * 0.25;
        grossTax = 2400 + amount
        taxes = incomeSalary-grossTax;
    }else if (incomeSalary >= 32334 && incomeSalary <= 500000){
        amount = (incomeSalary - 32333) * 0.30;
        grossTax = 2400 + 2083.25 + amount
        taxes = incomeSalary-grossTax;
    }else if (incomeSalary >= 500001 && incomeSalary <= 800000){
        amount = (incomeSalary - 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + amount
        taxes = incomeSalary-grossTax;  
    }else if(incomeSalary > 800000){
        amount = (incomeSalary - 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + amount
        taxes= incomeSalary-grossTax;
    }
    return taxes;
}




//NHIF and NSSF calculations

function kratax(basicSalary, benefits){
    let NSSF = 0;
    let NHIF = 0;

//NHIF if statements which deducts depending on the basicSalary amount

    function benefitsfunction(BasicSalary, benefits = 0){
        let  NHIFDeduction = 0
     
         if (BasicSalary > 0  && basicSalary <= 5999){
           NHIFDeduction  = 150
           
         }else if (BasicSalary >= 6000 && BasicSalary <= 7999){
           NHIFDeduction =300
     
         }else if(BasicSalary >= 8000 && BasicSalary <= 11999){
           NHIFDeduction =400
     
         }else if(BasicSalary >= 12000 && BasicSalary <= 14999){
           NHIFDeduction =500
         }
         else if(BasicSalary >= 15000 && BasicSalary <= 19999){
           NHIFDeduction =600
     
         }
         else if(BasicSalary >= 20000 && BasicSalary <= 24999){
           NHIFDeduction =750
     
         }
         else if(BasicSalary >= 25000 && BasicSalary <= 29999){
           NHIFDeduction =850
     
         }
         else if(BasicSalary >= 30000 && BasicSalary <= 34999){
           NHIFDeduction =900
     
         }
         else if(BasicSalary >= 35000 && BasicSalary <= 39999){
           NHIFDeduction =950
     
         }else if(BasicSalary >= 40000 && BasicSalary <= 44999){
           NHIFDeduction =1000
     
         }
         else if(BasicSalary >= 50000 && BasicSalary <= 59999){
           NHIFDeduction =1200
     
         }
         else if(BasicSalary >= 60000 && BasicSalary <= 69999){
           NHIFDeduction =1300
     
         }
         else if(BasicSalary >= 70000 && BasicSalary <= 79999){
           NHIFDeduction =1400
     
         }
         else if(BasicSalary >= 80000 && BasicSalary <= 89999){
           NHIFDeduction =1500
     
         }
         else if(BasicSalary >= 90000 && BasicSalary <= 99999){
           NHIFDeduction =1600
     
         }
         else if (BasicSalary >= 100000){
           NHIFDeduction =1700
         }
     
         // NSSF = (benefit > 0 ) ? benefit : BasicSalary * 0.06;
     
         if(benefits > 0){
             NSSF = benefits;
         }else{
             NSSF = BasicSalary * 0.06;
         }
     
         NHIF = NHIFDeduction;
         Tincome = BasicSalary - (NSSF + NHIF);
             return{
                 NSSF,
                 NHIF,
                 Tincome, 
             }
    }    

    function tax(Tincome){
    let paye = 0;
    let grossTax = 0;
    let amount = 0; 
    let Personnalrelief = 2400;

// grosstax function

    if(Tincome > 0 && Tincome <= 24000){
        grossTax = (Tincome*0.10);
    }else if (Tincome >= 24001 && Tincome <= 32333){
        amount = (Tincome - 24000) * 0.25;
        grossTax = 2400 + amount
    }else if (Tincome >= 32334 && Tincome <= 500000){
        amount = (Tincome - 32333) * 0.30;
        grossTax = 2400 + 2083.25 + amount
    }else if (Tincome >= 500001 && Tincome <= 800000){
        amount = (Tincome - 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + amount  
    }else if(Tincome > 800000){
        amount = (Tincome - 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + amount
    }
    paye =  ~~(grossTax - Personnalrelief);
    netsalary = (Tincome - paye);
    return { paye, netsalary } 
    }
    
    let myTincome  = benefitsfunction(basicSalary,benefits);
    let taxed = tax(myTincome.Tincome);

    //the final results returned
    return {
        NSSFDeductions:  myTincome.NSSF,
        NHIFDeductions:  myTincome.NHIF,
        payee:  taxed.paye,
        grosssalary:  basicSalary,
        netsalary:  taxed.netsalary
    }
}


show(kratax(75000, 8222))