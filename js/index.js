
let kbdButtons = document.querySelectorAll('.kbd');
let selectedCount = 0;
let maxSelection = 4;

function handleClick(button) {
  // Toggle the selected
  button.classList.toggle('selected');
  // console.log(button.innerHTML);
  // Update the selected count
  selectedCount = document.querySelectorAll('.selected').length;
  // console.log(selectedCount);
  setValueById('select-set',selectedCount)
  let selectSet=getValueById('select-set')
  let updateLiftSet= (40 - selectSet);
  setValueById('lift-set',updateLiftSet)
  //add set number and deatils

  // If the selected count exceeds the maximum allowed, deselect the last selected button
  if (selectedCount > maxSelection) {
    let selectedButtons = document.querySelectorAll('.selected');
    selectedButtons[selectedButtons.length - 1].classList.remove('selected');
    selectedCount--;
    
  }
}

kbdButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    handleClick(button);
  });
});
// coupon verify
function couponCode() {
  let couponInput = document.getElementById('coupon-input').value;
  let couponList = ['NEW15', 'Couple 20'];
  let couponSuccessMessage = document.getElementById('coupon-display');

  // Check if the input value matches any coupon in the coupon list
  if (couponList.includes(couponInput)) {
    couponSuccessMessage.classList.add('hidden');
    document.getElementById('coupon-success-message').classList.remove('hidden');
  }
}