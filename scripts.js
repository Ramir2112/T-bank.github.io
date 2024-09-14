document.getElementById('contBtn').addEventListener('click', function() {
  // Close the Telegram Web App window
  if (window.opener) {
    window.opener.close();
  }
  // Close the current window
  window.close();
});
