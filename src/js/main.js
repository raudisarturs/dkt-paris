// Initialize Lucide Icons
lucide.createIcons();

// Modal Elements
const modal = document.getElementById('bookingModal');
const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtn = document.getElementById('closeModal');
const bookingForm = document.getElementById('bookingForm');

const serviceSelect = document.getElementById('serviceType');
const customDetails = document.getElementById('customDetails');
const customLabel = document.getElementById('customLabel');

// Open/Close Booking Modal
openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // If clicked from a vehicle card, pre-fill vehicle choice in details
    const selectedVehicle = btn.getAttribute('data-vehicle');
    if (selectedVehicle && customDetails) {
      customDetails.value = `Vehicle Request: ${selectedVehicle}`;
    }

    modal.style.display = 'flex';
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

// Dynamic Handling: If "Custom / Other Request" is picked, require details & highlight
serviceSelect.addEventListener('change', () => {
  if (serviceSelect.value === 'Custom / Other Request') {
    customDetails.setAttribute('required', 'required');
    customLabel.innerHTML = 'Custom Request Details *';
    customDetails.focus();
  } else {
    customDetails.removeAttribute('required');
    customLabel.innerHTML = 'Custom Request / Additional Details';
  }
});

// Submit Form to WhatsApp
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('custName').value;
  const phone = document.getElementById('custPhone').value;
  const service = serviceSelect.value;
  const details = customDetails.value.trim();
  const time = document.getElementById('pickupTime').value;

  // Format WhatsApp message
  let message = `Hello DKT Paris! I would like to book a ride.%0A%0A` +
                `*Name:* ${encodeURIComponent(name)}%0A` +
                `*Phone:* ${encodeURIComponent(phone)}%0A` +
                `*Service:* ${encodeURIComponent(service)}`;
  
  if (details) {
    message += `%0A*Custom Details:* ${encodeURIComponent(details)}`;
  }

  message += `%0A*Requested Time:* ${encodeURIComponent(time)}`;
  
  // Open WhatsApp chat directly with DKT Paris
  window.open(`https://wa.me/33781473999?text=${message}`, '_blank');
  
  modal.style.display = 'none';
});

// ==========================================
// IMAGE LIGHTBOX POPUP (FULLSCREEN PHOTO VIEW)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeLightbox = document.getElementById('closeLightbox');
  const collageItems = document.querySelectorAll('.collage-item');

  // Open lightbox when clicking any vehicle photo
  collageItems.forEach(item => {
    item.addEventListener('click', () => {
      const bgStyle = item.style.backgroundImage;
      if (bgStyle) {
        // Extract URL string from inline style
        const imageUrl = bgStyle.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
        lightboxImg.src = imageUrl;
        lightbox.classList.add('active');
      }
    });
  });

  // Close when clicking 'X'
  if (closeLightbox) {
    closeLightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }

  // Close when clicking on dark backdrop
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
    }
  });
});