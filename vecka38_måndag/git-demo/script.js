document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');
  const modalBtn = document.getElementById('modalBtn');
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close');

  // List of Git commands and descriptions
  const commands = [
    { command: 'git init', description: 'Initializes a new Git repository.' },
    { command: 'git clone https://github.com/user/repo.git', description: 'Clones a remote repository.' },
    { command: 'git status', description: 'Shows the current status of the repository.' },
    { command: 'git add .', description: 'Stages all files for the next commit.' },
    { command: 'git commit -m "Initial commit"', description: 'Commits staged changes with a message.' },
    { command: 'git pull origin main', description: 'Pulls the latest changes from the remote main branch.' },
    { command: 'git push origin main', description: 'Pushes local commits to the remote repository.' },
  ];

  // Render commands and descriptions in the terminal output
  commands.forEach(cmd => {
    const cmdElement = document.createElement('p');
    cmdElement.innerHTML = `<span class="cmd">> ${cmd.command}</span> - ${cmd.description}`;
    output.appendChild(cmdElement);
  });

  // Open modal when button is clicked
  modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Show the modal
  });

  // Close modal when 'x' is clicked
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
  });

  // Close modal when clicking outside the modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none'; // Hide modal
    }
  });

  // Close modal when 'Esc' is pressed
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
});
