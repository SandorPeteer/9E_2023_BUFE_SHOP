function saveUser(email, password) {
  const user = {
    email: email,
    password: password
  };

  const userString = JSON.stringify(user);
  localStorage.setItem('userData', userString);
}

function getUser() {
  const userString = localStorage.getItem('userData');

  if (userString) {
    const user = JSON.parse(userString);
    return user;
  } else {
    return null;
  }
}

function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const user = getUser();

  if (user && user.email === email && user.password === password) {
    window.location.href = 'https://sandorpeteer.github.io/9E_2023_BUFE_SHOP/index.html';
  } else {
    alert('Érvénytelen email vagy jelszó. Kérlek, próbáld újra.');
  }
}

function register() {
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!email || !password || !confirmPassword) {
    alert('Kérlek, töltsd ki az összes mezőt.');
    return;
  }

  if (password !== confirmPassword) {
    alert('A jelszavak nem egyeznek. Kérlek, próbáld újra.');
    return;
  }

  saveUser(email, password);
  document.getElementById('check').checked = false;
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  login();
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  register();
});
