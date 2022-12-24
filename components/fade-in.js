const fadeIn = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('showContent');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.notShow');
  hiddenElements.forEach((el) => observer.observe(el));
};

export default fadeIn;
