let walletForm = document.querySelectorAll('.form-1'),
    bankBtn = document.querySelector('#bank-btn'),
    cardBtn = document.querySelector('#card-btn'),
    phoneBtn = document.querySelector('#phone-btn'),
    checkBtn = document.querySelector('#check-btn'),
    transactionBtn = document.querySelector('#transaction-btn'),
    statementBtn = document.querySelector('#statement-btn'),
    index = 1;

let transactionlocalBtn = document.getElementById('transactionlocal-account'),
    transactionforeignBtn = document.getElementById('transactionforeign-account'),
    stmntlocalBtn = document.getElementById('stmntlocal-account'),
    stmntforeignBtn = document.getElementById('stmntforeign-account');

let localstmntcloseBtn = document.querySelector('.ministmntcloseBtn-1'),
    foreignstmntcloseBtn = document.querySelector('.ministmntcloseBtn-2'),
    localtrnctioncloseBtn = document.querySelector('.transactioncloseBtn-1'),
    transactrnctioncloseBtn = document.querySelector('.transactioncloseBtn-2');
    
//Clear all walletForm
function reset(){
  for(let i = 0; i < walletForm.length; i++){
      walletForm[i].style.display = 'none';
  }
} 

//remove class active from btns
function resetBtn(){
  cardBtn.classList.remove('active');
  bankBtn.classList.remove('active');
  phoneBtn.classList.remove('active');
  stmntlocalBtn.classList.remove('active');
  stmntforeignBtn.classList.remove('active');
  transactionlocalBtn.classList.remove('active');
  transactionforeignBtn.classList.remove('active');
}

 //Init walletForm
 function dispalyForm(){
    reset();
    if(index > walletForm.length){index = 1}
        walletForm[index-1].style.display = "block";
}

//Show bank form
function bankForm(){
  reset();
  resetBtn();
  setTimeout(() => {
    bankBtn.classList.add('active');
    walletForm[0].style.display = 'block';
    walletForm[0].style.opacity = 0;
    setTimeout(() => (walletForm[0].style.opacity = 1), 500);
  });
}

//Show card form
function cardForm(){
  reset();
  resetBtn();
  cardBtn.classList.add('active');
  setTimeout(() => {
    walletForm[1].style.display = 'block';
    walletForm[1].style.opacity = 0;
    setTimeout(() => (walletForm[1].style.opacity = 1), 500);
  });
}

//Show phone form
function phoneForm(){
  reset();
  resetBtn();
  phoneBtn.classList.add('active');
  setTimeout(() => {
    walletForm[2].style.display = 'block';
    walletForm[2].style.opacity = 0;
    setTimeout(() => (walletForm[2].style.opacity = 1), 500);
  });
}

//Show check form
function checkForm(){
  reset();
  setTimeout(() => {
    walletForm[3].style.display = 'block';
    walletForm[3].style.opacity = 0;
    setTimeout(() => (walletForm[3].style.opacity = 1), 500);
  });
}

//Show transaction form
function transactionForm(){
  reset();
  setTimeout(() => {
    walletForm[4].style.display = 'block';
    walletForm[4].style.opacity = 0;
    setTimeout(() => (walletForm[4].style.opacity = 1), 500);
  });
}

//Show local transaction statement
function translocalStatement(){
  reset();
  resetBtn();
  transactionlocalBtn.classList.add('active');
  setTimeout(() => {
    walletForm[5].style.display = 'block';
    walletForm[5].style.opacity = 0;
    setTimeout(() => (walletForm[5].style.opacity = 1), 500);
});
}

//Show foreign transaction statement
function transforeignStatement(){
  reset();
  resetBtn();
  transactionforeignBtn.classList.add('active');
  setTimeout(() => {
    walletForm[6].style.display = 'block';
    walletForm[6].style.opacity = 0;
    setTimeout(() => (walletForm[6].style.opacity = 1), 500);
});
}

//Show statement form
function statementForm(){
  reset();
  setTimeout(() => {
    walletForm[7].style.display = 'block';
    walletForm[7].style.opacity = 0;
    setTimeout(() => (walletForm[7].style.opacity = 1), 500);
  });
}

//Show local mini-statements
function minilocalStatement(){
  reset();
  resetBtn();
  stmntlocalBtn.classList.add('active');
  setTimeout(() => {
    walletForm[8].style.display = 'block';
    walletForm[8].style.opacity = 0;
    setTimeout(() => (walletForm[8].style.opacity = 1), 500);
});
}

//Show foreign mini-statement
function miniforeignStatement(){
  reset();
  resetBtn();
  stmntforeignBtn.classList.add('active');
  setTimeout(() => {
    walletForm[9].style.display = 'block';
    walletForm[9].style.opacity = 0;
    setTimeout(() => (walletForm[9].style.opacity = 1), 500);
});
}

//bankBtn click
bankBtn.addEventListener('click',function(){
  bankForm();
});

//cardBtn click
cardBtn.addEventListener('click',function(){
  cardForm();
});

//phoneBtn click
phoneBtn.addEventListener('click',function(){
  phoneForm();
});

//checkBtn click
checkBtn.addEventListener('click',function(){
  checkForm();
});

//transactionBtn click
transactionBtn.addEventListener('click',function(){
  transactionForm();
});

//statementBtn click
statementBtn.addEventListener('click',function(){
  statementForm();
});

//stmntlocalBtn click
stmntlocalBtn.addEventListener('click',function(){
  minilocalStatement();
});

//stmntforeignBtn click
stmntforeignBtn.addEventListener('click',function(){
  miniforeignStatement();
});

// transactionlocalBtn click
transactionlocalBtn.addEventListener('click',function(){
  translocalStatement();
});

// transactionforeignBtn click
transactionforeignBtn.addEventListener('click',function(){
  transforeignStatement();
});

//closeBtn click
localstmntcloseBtn.addEventListener('click',function(){
  statementForm();
});

foreignstmntcloseBtn.addEventListener('click',function(){
  statementForm();
});

localtrnctioncloseBtn.addEventListener('click',function(){
  transactionForm();
});

transactrnctioncloseBtn.addEventListener('click',function(){
  transactionForm();
});

dispalyForm();