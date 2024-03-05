const text = document.querySelector('.second-text')

const loadingText = () => {
    setTimeout(() => {
      text.textContent = 'Junior Developer';
    }, 0);
  };

  loadingText();
