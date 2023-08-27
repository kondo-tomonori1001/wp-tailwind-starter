export default function sample() {
  console.log('sample');
  const button = document.querySelector('.js-button');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.toggle('is-active');
  });
}
