
<script>
    window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > 0) {
    // Change the background color based on scroll position
    const backgroundColor = scrollPosition > 500 ? 'lightblue' : 'lightgreen';
    document.body.style.backgroundColor = backgroundColor;
  } else {
    // Reset to initial background color when scrolled to the top
    document.body.style.backgroundColor = 'initial';
  }
});
</script>
