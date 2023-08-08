console.log("sup I'm JavaScript");

// hamburger menu

function menuToggle() {
  const element = document.getElementById("myNavtoggle");

  if (element.className === "navtoggle") {
    element.classList.remove("navtoggle");
    element.classList.add("navtoggle-responsive");
  } else {
    element.className = "navtoggle";
  }
}

// Smooth scrolling function
function smoothScrollTo(target) {
  var headerOffset = 108;

  $("html, body").animate(
    {
      scrollTop: target.offset().top - headerOffset,
    },
    1000,
    function () {
      // Callback after animation
      var $target = $(target);
      $target.focus();
      if ($target.is(":focus")) {
        return false;
      } else {
        $target.attr("tabindex", "-1");
        $target.focus();
      }
    }
  );
}

// Add click event handler to links with hash references
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .on("click", function (event) {
    if (
      location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        smoothScrollTo(target);
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
    if (
      tablinks[i].getAttribute("onclick") ===
      evt.currentTarget.getAttribute("onclick")
    ) {
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

  if (element.className === "sidenav-closed") {
    element.classList.remove("sidenav-closed");
    element.classList.add("sidenav-250px");
  } else {
    element.className = "sidenav-closed";
  }
}
