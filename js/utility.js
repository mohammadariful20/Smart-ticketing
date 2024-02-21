function setValueById(elementId,value) {
    const elenemt=document.getElementById(elementId);
    elenemt.innerText=value;
}
function getValueById(elementId) {
    const elenemt=document.getElementById(elementId);
    const elenemtInnerText=elenemt.innerText;
    const elenemtNumber=parseInt(elenemtInnerText);
    return elenemtNumber;
}
function displayHidden(){
    const elementId=document.getElementById('coupon-success-message')
    elementId.classList.add('hidden')
}