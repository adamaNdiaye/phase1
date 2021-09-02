var sum = 0;
// ------------------------PRODUCT ONE----------------------------------
  function increment1(){

    var qty = document.querySelector('.qty1');
    var vqty = (Number(qty.value)+1).toString();


    qty.setAttribute('value', vqty);
    update_amount1(vqty);
    update_total();
  }

  function decrement1(){
    
    var qty = document.querySelector('.qty1');
    var vqty = (Number(qty.value)-1);

    if(vqty < 0){
        vqty = 0;
        vqty.toString();
    }
    else{
        vqty.toString();
    }

    qty.setAttribute('value', vqty);
    update_amount1(vqty);
    update_total();
  }

  function update_amount1(vqty){
    var elPrice = document.querySelector('.price1');
    var price = Number(elPrice.value);  
    
    var amount = Number(vqty)*price;

    var elAmount = document.querySelector('.amount1');
    elAmount.textContent = ""+amount;


  }

// ------------------------PRODUCT TWO----------------------------------
function increment2(){

    var qty = document.querySelector('.qty2');
    var vqty = (Number(qty.value)+1).toString();


    qty.setAttribute('value', vqty);
    update_amount2(vqty);
    update_total();
  }

  function decrement2(){
    
    var qty = document.querySelector('.qty2');
    var vqty = (Number(qty.value)-1);

    if(vqty < 0){
        vqty = 0;
        vqty.toString();
    }
    else{
        vqty.toString();
    }

    qty.setAttribute('value', vqty);
    update_amount2(vqty);
    update_total();
  }

  function update_amount2(vqty){
    var elPrice = document.querySelector('.price2');
    var price = Number(elPrice.value);  
    
    var amount = Number(vqty)*price;

    var elAmount = document.querySelector('.amount2');
    elAmount.textContent = ""+amount;


  }

  // ------------------------PRODUCT THREE----------------------------------
function increment3(){

    var qty = document.querySelector('.qty3');
    var vqty = (Number(qty.value)+1).toString();


    qty.setAttribute('value', vqty);
    update_amount3(vqty);
    update_total();
  }

  function decrement3(){
    
    var qty = document.querySelector('.qty3');
    var vqty = (Number(qty.value)-1);

    if(vqty < 0){
        vqty = 0;
        vqty.toString();
    }
    else{
        vqty.toString();
    }

    qty.setAttribute('value', vqty);
    update_amount3(vqty);
    update_total();
  }

  function update_amount3(vqty){
    var elPrice = document.querySelector('.price3');
    var price = Number(elPrice.value);  
    
    var amount = Number(vqty)*price;

    var elAmount = document.querySelector('.amount3');
    elAmount.textContent = ""+amount;


  }

// ------------------------PRODUCT THREE----------------------------------
function increment4(){

    var qty = document.querySelector('.qty4');
    var vqty = (Number(qty.value)+1).toString();


    qty.setAttribute('value', vqty);
    update_amount4(vqty);
    update_total();
  }

  function decrement4(){
    
    var qty = document.querySelector('.qty4');
    var vqty = (Number(qty.value)-1);

    if(vqty < 0){
        vqty = 0;
        vqty.toString();
    }
    else{
        vqty.toString();
    }

    qty.setAttribute('value', vqty);
    update_amount4(vqty);
    update_total();
  }

  function update_amount4(vqty){
    var elPrice = document.querySelector('.price4');
    var price = Number(elPrice.value);  
    
    var amount = Number(vqty)*price;

    var elAmount = document.querySelector('.amount4');
    elAmount.textContent = ""+amount;


  }
//-----------UPDATE TOTAL-----------------------------------------------------------
function update_total(){

    var elTotal = document.querySelector('.total');

    var amount1 = Number(document.querySelector('.amount1').textContent);
    var amount2 = Number(document.querySelector('.amount2').textContent);
    var amount3 = Number(document.querySelector('.amount3').textContent);
    var amount4 = Number(document.querySelector('.amount4').textContent);

    sum = amount1+amount2+amount3+amount4; 
    elTotal.textContent =""+sum;

  }

//-------------------------LIKE BUTTON SECTION-----------------------------------------

function change1(){

    let icon = document.querySelector("#heart1 i");
 
    if(icon.className == 'far fa-heart'){
        icon.className = 'fas fa-heart';
    }
    else{
        icon.className = "";
        icon.className="far fa-heart";
    }
    
}

function change2(){
    
    let icon = document.querySelector("#heart2 i");

    if(icon.className == 'far fa-heart'){
        icon.className = 'fas fa-heart';
    }
    else{
        icon.className = "";
        icon.className="far fa-heart";
    }
    
}

function change3(){
    
    let icon = document.querySelector("#heart3 i");
   
    if(icon.className == 'far fa-heart'){
        icon.className = 'fas fa-heart';
    }
    else{
        icon.className = "";
        icon.className="far fa-heart";
    }
    
}

function change4(){

    let icon = document.querySelector("#heart4 i");

    if(icon.className == 'far fa-heart'){
        icon.className = 'fas fa-heart';
        
    }
    else{
        icon.className = "";
        icon.className="far fa-heart";
    }
    
}