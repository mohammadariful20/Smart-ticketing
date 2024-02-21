//------------------
let kbdButtons = document.querySelectorAll('.kbd');
let selectedCount = 0;
let maxSelection = 4;

function handleClick(button) {
  // Toggle the selected class
  button.classList.toggle('selected');
  
  // Update the selected count
  selectedCount = document.querySelectorAll('.selected').length;
  setValueById('select-set',selectedCount);
  let selectSet=getValueById('select-set');
  let updateLiftSet= (40 - selectSet);
  setValueById('lift-set',updateLiftSet);
  // console.log(selectSet);
  //update tricket price
  let totalPrice= selectSet * 550;
  let totalPriceUpdate=setValueById('total-price',totalPrice)
  setValueById('grand-total-price',totalPrice)


  // If the selected count exceeds the maximum allowed, deselect the last selected button
  if (selectedCount > maxSelection) {
    let selectedButtons = document.querySelectorAll('.selected');
    selectedButtons[selectedButtons.length - 1].classList.remove('selected');
    selectedCount--;
  }
  //4 set select to apply button enable
  if (selectedCount === 4) {
    const elementId=document.getElementById('disable-btn')
    elementId.classList.remove('btn-disabled')
  }
  // Add selected items to the table
  updateSelectedItemsTable();
}
// set select and update show
function updateSelectedItemsTable() {
  let tableBody = document.querySelector('#table tbody');
  tableBody.innerHTML = ''; // Clear existing rows
  
  let selectedButtons = document.querySelectorAll('.selected');
  selectedButtons.forEach(button => {
    let itemName = button.textContent;
    let row = document.createElement('tr');
    let cell = document.createElement('td');
    cell.textContent = itemName;
    row.appendChild(cell);
    let cell2 = document.createElement('td');
    cell2.textContent = 'Economoy';
    row.appendChild(cell2);
    let cell3 = document.createElement('td');
    cell3.textContent = 550;
    row.appendChild(cell3);
    tableBody.appendChild(row);
  });
}

function setValueById(id, value) {
  document.getElementById(id).textContent = value;
}

function getValueById(id) {
  return parseInt(document.getElementById(id).textContent);
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
document.getElementById("scrollBtn").addEventListener("click", function() {
  // Get the position of the element with id "set-select"
  let scrollToPosition = document.getElementById('set-select').offsetTop;
  
  // Scroll smoothly to the calculated position
  window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
  });
});

