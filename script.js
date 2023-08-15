let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-link');


window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        console.log(top)
        console.log(height)

        if(top >= offset && top < offset + height ) {
            const targetId = '#' + sec.getAttribute('id');
            const activeNavLink = document.querySelector(`a[href="${targetId}"]`);
      
            // Remove active class from all navigation links
            document.querySelectorAll('.nav-link').forEach(link => {
              link.classList.remove('active');
            });
      
            // Add active class to the corresponding navigation link
            activeNavLink.classList.add('active');
        }
    })
}