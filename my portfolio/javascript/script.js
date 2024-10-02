// Add an event listener to the navbar to make it sticky
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});



const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');
const texts = ['WEB DEVELOPER', 'WEB DESIGNER', 'JUNIOR FRONT-END DEVELOPER'];
let currentTextIndex = 0;
let currentCharIndex = 0;

function typeText() {
  if (currentCharIndex < texts[currentTextIndex].length) {
    typedText.textContent += texts[currentTextIndex][currentCharIndex];
    currentCharIndex++;
    setTimeout(typeText, 100); // adjust the speed to your liking
  } else {
    setTimeout(eraseText, 2000); // adjust the delay to your liking
  }
}

function eraseText() {
  if (currentCharIndex > 0) {
    typedText.textContent = typedText.textContent.substring(0, currentCharIndex - 1);
    currentCharIndex--;
    setTimeout(eraseText, 50); // adjust the speed to your liking
  } else {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    currentCharIndex = 0;
    setTimeout(typeText, 500); // adjust the delay to your liking
  }
}

typeText();


const progressBars = document.querySelectorAll('.progress');

progressBars.forEach((bar, index) => {
  const width = [100, 96, 94, 87, 84, 90, 91][index];
  const interval = setInterval(() => {
    const currentWidth = parseInt(bar.style.width);
    if (currentWidth < width) {
      bar.style.width = `${currentWidth + 1}%`;
    } else {
      clearInterval(interval);
    }
  }, 10);
});



// Function to open the modal and display full image
function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');

  const projectImage = document.querySelector(`#${projectId} img`);
  modalImg.src = projectImage.src;

  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = "none";
}



