
// // Theme color change

// check if the theme is set. If not, the default theme is used.
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the current theme from local storage
    let currentTheme = localStorage.getItem('theme') || 'dark';
    
    setTheme(currentTheme);
  
    let toggleButton = document.getElementById("themeToggle");
  
    if (toggleButton) {
      toggleButton.addEventListener("click", function() {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        setTheme(currentTheme);
      });
    }
  
    function setTheme(theme) {
      document.body.className = theme;
    }
  
    console.log("Current theme: ", currentTheme);
  });



  //Theme changer for the contact form
  const radioButtons = document.querySelectorAll('input[name="theme"]');
  const body = document.body;

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', () => {
      if (radioButton.value === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
      } else if (radioButton.value === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
      }
    });
  });
