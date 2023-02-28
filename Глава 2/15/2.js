function checkAge1(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge2s(age) {
  return (age > 18) || confirm('Родители разрешили?');
}