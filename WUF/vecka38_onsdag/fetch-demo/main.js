const result = document.querySelector('#result');

// Function to fetch dog images from Dog API
function fetchDogImages() {
  const numberOfDogs = 5;
  // ${numberOfDogs} = template literal 
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response => response.json())
    .then(data => {
      const gallery = document.getElementById('gallery');
      gallery.innerHTML = ''; // Clear previous images
      data.message.forEach(imgUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imgUrl;
        imgElement.className = 'dog-image';
        gallery.appendChild(imgElement);
      });
    })
    .catch(error => console.error('Error fetching dog images:', error));
}

// Function to demonstrate a POST request (fake create post)
function createPost() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'New Post',
      body: 'This is a new post created via POST request.',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(data => {
      showAndPopulateResult(data);
    })
    .catch(error => console.error('Error in POST request:', error));
}

// Function to demonstrate a PUT request (fake update post)
function updatePost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'Updated Post',
      body: 'This post was updated via PUT request.',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(data => {
      showAndPopulateResult(data);
    })
    .catch(error => console.error('Error in PUT request:', error));
}

// Function to demonstrate a DELETE request (fake delete post)
function deletePost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) {
        result.textContent = 'Post deleted successfully';
      }
    })
    .catch(error => console.error('Error in DELETE request:', error));
}

const showAndPopulateResult = (dataFromFetch) => {
  if (dataFromFetch) {
    result.style.display = "block";
    result.textContent = JSON.stringify(dataFromFetch, null, 2);
  }
}

// Load initial dog images when the page loads + hide result elem
window.onload = () => {
  fetchDogImages();
  result.style.display = "none";
};
