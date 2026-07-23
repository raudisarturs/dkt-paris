// Initialize Lucide Icons
lucide.createIcons();

// Modal & Form Elements
const modal = document.getElementById('bookingModal');
const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtn = document.getElementById('closeModal');
const bookingForm = document.getElementById('bookingForm');

const serviceSelect = document.getElementById('serviceType');
const vehicleSelect = document.getElementById('vehicleType');
const customDetails = document.getElementById('customDetails');
const customLabel = document.getElementById('customLabel');

// Mobile Menu Navigation
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile navigation dropdown when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ==========================================
// BOOKING MODAL & VEHICLE SELECT
// ==========================================
openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedVehicle = btn.getAttribute('data-vehicle');
    
    // Auto-select vehicle in dropdown if opened from vehicle card
    if (selectedVehicle && vehicleSelect) {
      vehicleSelect.value = selectedVehicle;
    }

    if (modal) {
      modal.style.display = 'flex';
    }
  });
});

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Dynamic Handling: Require details if "Custom / Other Request" is selected
if (serviceSelect && customDetails && customLabel) {
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
}

// ==========================================
// SUBMIT FORM TO WHATSAPP
// ==========================================
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const service = serviceSelect ? serviceSelect.value : '';
    const vehicle = vehicleSelect ? vehicleSelect.value : 'No Preference';
    const details = customDetails ? customDetails.value.trim() : '';
    const time = document.getElementById('pickupTime').value;

    // Format WhatsApp message
    let message = `Hello DKT Paris! I would like to book a ride.%0A%0A` +
                  `*Name:* ${encodeURIComponent(name)}%0A` +
                  `*Phone:* ${encodeURIComponent(phone)}%0A` +
                  `*Service:* ${encodeURIComponent(service)}%0A` +
                  `*Vehicle:* ${encodeURIComponent(vehicle)}`;
    
    if (details) {
      message += `%0A*Custom Details:* ${encodeURIComponent(details)}`;
    }

    message += `%0A*Requested Time:* ${encodeURIComponent(time)}`;
    
    // Open WhatsApp chat directly with DKT Paris
    window.open(`https://wa.me/33781473999?text=${message}`, '_blank');
    
    if (modal) {
      modal.style.display = 'none';
    }
  });
}

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
        // Extract Clean URL from inline background-image style
        const imageUrl = bgStyle.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
        if (lightboxImg) lightboxImg.src = imageUrl;
        if (lightbox) lightbox.classList.add('active');
      }
    });
  });

  // Close when clicking 'X'
  if (closeLightbox) {
    closeLightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }

  // Close when clicking on dark overlay backdrop
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