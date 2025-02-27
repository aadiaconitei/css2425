// Crează un obiect Date
var currentDate = new Date();
// Obține anul curent
var currentYear = currentDate.getFullYear();
// Afișează anul curent în elementul cu id "currentYear"
document.getElementById('currentYear').textContent = currentYear;