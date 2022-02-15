// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
   // get the amount deposited
   const depositInput = document.getElementById('deposit-input')
   const newDepositText = depositInput.value;
   const newDepositAmount = parseFloat(newDepositText);
   // console.log(depositAmount);

   const depositTotal = document.getElementById('deposit-total')
   const previousDepositText = depositTotal.innerText;
   const previousDepositAmount = parseFloat(previousDepositText);
   const newDepositTotal = previousDepositAmount + newDepositAmount;

   depositTotal.innerText = newDepositTotal;
   // update account ballance
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
   const newBalanceTotal = previousBalanceTotal + newDepositAmount;
   balanceTotal.innerText = newBalanceTotal;

   // clear deposit input field
   depositInput.value = '';

});

// handle Withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function () {
   const withDrawInput = document.getElementById('withdraw-input');
   const withdrawAmountText = withDrawInput.value ;
   const newWithdrawAmount = parseFloat(withdrawAmountText);
   console.log(newWithdrawAmount);

   // set withdraw total
   const withdrawTotal = document.getElementById('withdraw-total');
   const previousWithdrawText = withdrawTotal.innerText;
   const previousWithdrawTotal =  parseFloat(previousWithdrawText);

   const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
   withdrawTotal.innerText = newWithdrawTotal;

   // update Balance
   const  balanceTotal = document.getElementById('balance-total');
   const previousBalanceText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceText);
   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
   balanceTotal.innerText = newBalanceTotal;



   // clear withdraw input field
   withDrawInput.value = '';
})