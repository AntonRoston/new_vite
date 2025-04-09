const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Об'єкт formData з початковими порожніми значеннями
let formData = {
  email: '',
  message: ''
};

// 1. Завантаження збережених даних з localStorage при старті
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// 2. Відстеження введення даних та збереження у localStorage
form.addEventListener('input', (e) => {
  const { name, value } = e.target;
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 3. Обробка події submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const { email, message } = formData;

  if (email.trim() === '' || message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // Очищення всього
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
