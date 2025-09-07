// script.js

// Form Validation
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let isValid = true;

  // Clear old errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (name.length < 3) {
    document.getElementById('nameError').textContent = 'Name must be at least 3 characters long';
    isValid = false;
  }

  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email format';
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
    isValid = false;
  }

  if (isValid) {
    document.getElementById('form-success').classList.remove('hidden');
  } else {
    document.getElementById('form-success').classList.add('hidden');
  }
});

// Filterable List
document.getElementById('filter-input').addEventListener('input', function() {
  const filterValue = this.value.toLowerCase();
  const items = document.querySelectorAll('#item-list li');
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(filterValue)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});

// Counter
let count = 0;
document.getElementById('increment').addEventListener('click', function() {
  count++;
  document.getElementById('count').textContent = count;
});
document.getElementById('decrement').addEventListener('click', function() {
  count--;
  document.getElementById('count').textContent = count;
});

// FAQ Collapsible Section
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', function() {
    const item = this.parentElement;
    item.classList.toggle('active');
  });
});

// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});