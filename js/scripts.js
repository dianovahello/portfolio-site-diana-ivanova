console.log("sup I'm JavaScript");

// hamburger menu 

function menuToggle() {

    const element = document.getElementById("myNavtoggle");

    if (element.className === 'navtoggle') {
        element.classList.remove("navtoggle");
        element.classList.add("navtoggle-responsive")

    } else {
        element.className = 'navtoggle';
    }
}

// Smooth scrolling

// 1. select all links with #
$('a[href*="#"]')

    // 2. Remove links that don't link to anything
    .not('[href="#"]')
    .not('[href="#0"]')

    // 3. Add event

    .click(function (event) {

        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            // Figure out element to scroll to

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            // Does a scroll target exist?

            if (target.length) {

                // Only prevent default if animation is actually gonna happen
                event.preventDefault();

                // Calculate the offset for the header height (108px)

                var headerOffset = 108;

                $('html, body').animate({

                    scrollTop: target.offset().top - headerOffset // Subtract the header height from the target position
                }, 1000, function () {

                    // Callback after animation

                    // Must change focus!

                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// Subnav tabs

function openWork(evt, workName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        if (tablinks[i].getAttribute("onclick") === evt.currentTarget.getAttribute("onclick")) {
            tablinks[i].classList.add("active");
        } else {
            tablinks[i].classList.remove("active");
        }
    }
    document.getElementById(workName).style.display = "block";
}



// Side nav in project

function sideNavToggle() {
const element = document.getElementById("mySideNav");

    if (element.className === 'sidenav-closed') {
        element.classList.remove("sidenav-closed");
        element.classList.add("sidenav-250px")

    } else {
        element.className = 'sidenav-closed';
    }
}






// Function to handle smooth scrolling and close side nav

function handleLinkClick(event, targetSectionId) {

    // Close the side navigation
    sideNavToggle();

    // Get the target section to scroll to
    const targetSection = document.querySelector(targetSectionId);

    // Calculate the offset for the header height (44px)
    const headerOffset = 44;

    // Calculate the target position to scroll to
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    // Scroll to the target position with smooth animation
    window.scroll({
        top: targetPosition,
        behavior: "smooth"
    });

    // Prevent the default link behavior (i.e., navigating to the link)
    event.preventDefault();
}

// Get all links in the side navigation
const sidenavLinks = document.querySelectorAll("#mySidenav a");

// Add event listener to each link
sidenavLinks.forEach(link => {
    link.addEventListener("click", function (event) {

        // Get the target section's ID from the link's href attribute
        const targetSectionId = link.getAttribute("href");

        // Call the function to handle smooth scrolling and close side navigation
        handleLinkClick(event, targetSectionId);
    });
});
