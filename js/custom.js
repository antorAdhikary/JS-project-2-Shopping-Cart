// cross button event handler
function crossBtn(product){   
    const productRow = document.getElementById(product + "-row")
    productRow.style.display = "none";
}

// Get the value
function getInputValue(product) {
    const inputValue = document.getElementById(product + "-count").value;
    const inputValueNum = parseInt(inputValue);
    return inputValueNum;
}

// Plus & Minus Btn 
function handlerProductChange(product, isIncrease){
    const countProductNumber = getInputValue(product);
    let newIncreaseNumber = countProductNumber;
    if(isIncrease == true){
        newIncreaseNumber = countProductNumber + 1;       
    }
    if (isIncrease == false && countProductNumber > 0){
        newIncreaseNumber = countProductNumber -1;   
    }
    document.getElementById(product + "-count").value = newIncreaseNumber;

    let productPrice = 0;
    if(product == 'phone'){
        productPrice = newIncreaseNumber * 1000;
    }
    if(product == 'case'){
       productPrice = newIncreaseNumber * 50;
    }    
    document.getElementById(product + "-price").innerText = "$" + productPrice;
    totalPrice();
}

// Total Tax GrandTotal 
function totalPrice(){  
    const phoneTotalNum = getInputValue("phone");
    const caseTotalNum = getInputValue("case");

    const totalPrice = (phoneTotalNum * 1000) + (caseTotalNum * 50);
    document.getElementById("total").innerText = "$" + totalPrice;

    const taxPrice = totalPrice / 10  ;
    document.getElementById("tax").innerText = "$" + taxPrice ;

    const grandTotalPrice = taxPrice + totalPrice ;
    document.getElementById("grand-total").innerText = "$" + grandTotalPrice;

    return totalPrice;
}
document.getElementById("total").innerText = "$" + totalPrice();


