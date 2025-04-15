const reasonInput = document.querySelector('#reason');
const amountInput = document.querySelector('#amount');
const clearBtn = document.querySelector('#clear');
const addBtn = document.querySelector('#add');
const expenesesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#totalExpenses');
const alert = document.querySelector('#ion-alert');
const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}
let totalExpenses = 0;


async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert';
    alert.subHeader = '';
    alert.message = 'Please add valid reason and amount!';
    alert.buttons = ['Action'];


    alert.buttons = [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
          },
        },
      ];

    document.body.appendChild(alert);
    await alert.present();
  }


addBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
       
            presentAlert();
        
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': ₹' + enteredAmount;

    expenesesList.appendChild(newItem);

    totalExpenses += +enteredAmount;

    totalExpensesOutput.textContent = totalExpenses

    clear();
    
})