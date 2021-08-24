function hamburger(){
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
  };
  document.getElementById('hamburger').addEventListener('click',function(){
    hamburger();
  });
  document.getElementById('nav').addEventListener('click',function(){
    hamburger();
  });

  (function() {
  const target     = document.getElementById('video-area'),
        height     = 2000;
  let offset       = 0,
      lastPosition = 0,
      ticking      = false;

  function onScroll() {
    if (lastPosition > height) {
      if (lastPosition > offset) {
        target.classList.add('is_fixed');
      } else {
        target.classList.remove('is_fixed');
      }
      offset = lastPosition;
    }
  }

  window.addEventListener('scroll', function(e) {
    lastPosition = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        onScroll(lastPosition);
        ticking = false;
      });
      ticking = true;
    }
  });
})();