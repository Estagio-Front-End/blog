window.addEventListener('scroll', () => {
    (window.scrollY > 0) 
    ? document.querySelector("header").style.backgroundColor = "#1F2041" 
    : document.querySelector("header").style.backgroundColor = "rgba(18, 19, 38, 0.5)"
});

