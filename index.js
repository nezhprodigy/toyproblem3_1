//Check the console for the summary and deductions breakdown;


//input the gross pay here;

const inputGrossSalary = 130000;

//The function summarizing computations and printing to the console: DO NOT PASS ANY FIGURES HERE!!!

console.log(summary())

//The function applying PAYE deductions;

function payeDeductions(){

  if(inputGrossSalary<24000){
    return inputGrossSalary*0;

  }else if(inputGrossSalary === 24000){
    return inputGrossSalary*0.1;
  
  } else if(inputGrossSalary <= 32333){
    return inputGrossSalary*0.25;
    
  }else if(inputGrossSalary <= 500000){
    return inputGrossSalary*0.3;

  } else if(inputGrossSalary <= 800000){
    return inputGrossSalary*0.325;
  
  } else {
    return inputGrossSalary*0.35;
  }
}

//The function applying NHIF deductions;

function nhifDeductions(){

  if(inputGrossSalary <= 5999){
    return 150;
  
  }else if(inputGrossSalary <= 7999){
    return 300;
    
  }else if(inputGrossSalary <= 11999){
    return 400;

  }else if(inputGrossSalary <= 14999){
    return 500;
  
  }else if(inputGrossSalary <= 19999){
    return 600;

  }else if(inputGrossSalary <= 24999){
    return 750;
  
  }else if(inputGrossSalary <= 29999){
    return 850;

  }else if(inputGrossSalary <= 34999){
    return 900;

  }else if(inputGrossSalary <= 39999){
    return 950;
  
  }else if(inputGrossSalary <= 44999){
    return 1000;
    
  }else if(inputGrossSalary <= 49999){
    return 1100;

  }else if(inputGrossSalary <= 59999){
    return 1200;
  
  }else if(inputGrossSalary <= 69999){
    return 1300;

  }else if(inputGrossSalary <= 79999){
    return 1400;
  
  }else if(inputGrossSalary <= 89999){
    return 1500;

  }else if(inputGrossSalary <= 99999){
    return 1600;

  }else{
    return 1700;
  }
  
}

//The function applying NSSF deductions;

function nssfDeductions(){
  const deduction = Math.floor(inputGrossSalary*0.06);
  return Math.min(deduction, 500);
}

//The function applying Housing Levy deductions;

function housingLevy(){

  return inputGrossSalary*0.015;

}

//The function summarizing computations and printing to the console
function summary(){
  console.log("GROSS PAY: ", inputGrossSalary, "KES");
  console.log("PAYE: ", payeDeductions(), "KES");
  console.log("NHIF: ", nhifDeductions(), "KES");
  console.log("NSSF: ", nssfDeductions(), "KES");
  console.log("HOUSING LEVY: ", housingLevy(), "KES");
  console.log("TOTAL DEDUCTIONS: ",   payeDeductions() + nhifDeductions() + nssfDeductions() + housingLevy(), "KES");
  console.log("NET PAY: ", inputGrossSalary-payeDeductions()-nhifDeductions()-nssfDeductions()-housingLevy(), "KES" );
  }
