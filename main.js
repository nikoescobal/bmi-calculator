import './style.css';

export function calculateBMI() {
  let height = document.getElementById('#height').value;
  let result = (document.getElementById('#result').innerHTML =
    'you wrote' + height);
  console.log(result);
}
