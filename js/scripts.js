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

                // Calculate the offset for the header height (44px)
                var headerOffset = 44;

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



