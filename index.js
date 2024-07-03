const billAmountEl = document.getElementById("billAmount");
const percentTipEl = document.getElementById("percentTip");
const errorMessageEl = document.getElementById("errorMessage");
const tipAmtEL = document.getElementById("tipAmt");
const totalAmtEl = document.getElementById("totalAmt");
const errorMsgr = "please enter valid text";

function buttonEl(){
    let billAmt = billAmountEl.value;

    let percentAmt = percentTipEl.value;
  
    
    

    if(billAmt === ""){
        errorMessageEl.textContent = errorMsgr;
        
    }else if(percentAmt === ""){
        errorMessageEl.textContent = errorMsgr;
    }else{
        errorMessageEl.textContent = "";

        let billConvert = parseInt(billAmt);
        let percentConvert = parseInt(percentAmt);

        let calculatedTip = (percentConvert/100) * billConvert;
        let totalAmt = billConvert + percentConvert;
        
        tipAmtEL.value = calculatedTip;
        totalAmtEl.value= totalAmt;

    }
}