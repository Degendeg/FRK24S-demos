const baseUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchRandomUser() {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    document.getElementById('output').textContent = `Slumpmässig användare: ${data[Math.floor(Math.random() * data.length)].name}`;
  } catch (error) {
    console.error('Error fetching data', error);
  }
}

async function createUser() {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'New User',
        username: 'newuser',
        email: 'newuser@example.com',
      }),
    });
    const data = await response.json();
    console.log('Created User:', data);
    document.getElementById('output').textContent = `Användare skapad: ${data.name}`;
  } catch (error) {
    console.error('Error creating user', error);
  }
}

async function updateUser() {
  try {
    const userId = 1; // Statiskt ID - byt ut om ni vill
    const response = await fetch(`${baseUrl}/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: userId,
        name: 'Updated User',
        username: 'updateduser',
        email: 'updateduser@example.com',
      }),
    });
    const data = await response.json();
    console.log('Updated User:', data);
    document.getElementById('output').textContent = `Användare uppdaterad: ${data.name}`;
  } catch (error) {
    console.error('Error updating user', error);
  }
}

async function deleteUser() {
  try {
    const userId = 1; // Statiskt ID - byt ut om ni vill
    const response = await fetch(`${baseUrl}/${userId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      console.log(`User with ID ${userId} deleted.`);
      document.getElementById('output').textContent = `Användare med ID ${userId} borttagen.`;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error deleting user', error);
  }
}