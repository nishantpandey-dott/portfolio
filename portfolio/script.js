function toggleDescription(projectCard) {
    const description = projectCard.querySelector('.description');
    description.style.display = description.style.display === 'none' || description.style.display === '' ? 'block' : 'none';
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    this.reset();
});
