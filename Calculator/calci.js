
document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons button');
  
    let expression = '';
  
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.dataset.value;
  
            if (value === 'AC') {
                expression = '';
            } else if (value === 'DEL') {
                expression = expression.slice(0, -1);
            } else if (value === '=') {
                try {
                    const result = eval(expression);
                    expression = result.toString();
                } catch (error) {
                    expression = 'Error';
                }
            } else {
                expression += value;
            }
  
            display.value = expression;
        });
    });
  });
  