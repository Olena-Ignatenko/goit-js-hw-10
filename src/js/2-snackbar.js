import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Функція для створення промісу
function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => resolve(delay), delay);
    } else {
      setTimeout(() => reject(delay), delay);
    }
  });
}

// Вішаємо обробник на сабміт форми

const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Отримуємо значення з форми
  const delay = parseInt(this.elements.delay.value);
  const state = this.elements.state.value;

  // Створюємо проміс
  createPromise(delay, state)
    .then(result => {
      // Виконано вдало
      iziToast.success({
        title: 'Fulfilled',
        message: `✅ Fulfilled promise in ${result}ms`,
        position: 'topRight',
      });
    })
    .catch(result => {
      // Відхилено
      iziToast.error({
        title: 'Rejected',
        message: `❌ Rejected promise in ${result}ms`,
        position: 'topRight',
      });
    });
});
