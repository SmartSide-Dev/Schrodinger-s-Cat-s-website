// Sample testimonials data
const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis augue ut imperdiet ultricies. Leo mauris rhoncus.",
      author: "ELLEN ROXY",
      stars: "★★★★★"
    },
    {
      text: "Suspendisse potenti. Curabitur euismod tincidunt augue, non fermentum velit laoreet vel.",
      author: "JOHN DOE",
      stars: "★★★★☆"
    },
    {
      text: "Aliquam erat volutpat. Duis hendrerit libero vitae ipsum auctor, sed sollicitudin leo iaculis.",
      author: "JANE SMITH",
      stars: "★★★★☆"
    }
  ];
  
  // Set the initial testimonial index
  let currentIndex = 0;
  
  // Function to update the testimonial content
  function updateTestimonial(index) {
    const testimonial = testimonials[index];
    
    // Update the text, author, and stars
    document.getElementById('testimonial-text').textContent = testimonial.text;
    document.getElementById('testimonial-author').textContent = testimonial.author;
    document.querySelector('.testimonial-stars').textContent = testimonial.stars;
  }
  
  // Add event listeners to the arrow buttons
  document.getElementById('prev').addEventListener('click', () => {
    // Go to the previous testimonial
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial(currentIndex);
  });
  
  document.getElementById('next').addEventListener('click', () => {
    // Go to the next testimonial
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateTestimonial(currentIndex);
  });
  
  // Initialize the first testimonial
  updateTestimonial(currentIndex);
  