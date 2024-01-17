const registerButtons = document.querySelectorAll('.bthLogin-popup');
registerButtons.forEach(button => {
 button.addEventListener('click', async () => {
    const eventName = button.dataset.eventName;
    const personProfile = {
      name: 'John Doe',
      usn: '123456',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      branch: 'Computer Science'
    };

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ eventName, personProfile })
      });

      if (response.status === 200 || response.status === 201) {
        // Handle successful registration (e.g., show a success message, redirect to a thank-you page, etc.)
        console.log('Registration successful');
      } else {
        throw new Error('Failed to register for the event.');
      }
    } catch (error) {
      console.error(error.message);
      // Handle error (e.g., show an error message)
    } finally {
      // Disable the button to prevent further clicks
      button.disabled = true;
    }
 });
});