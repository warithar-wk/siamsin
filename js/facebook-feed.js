function projectFinal(feedData) {
  feedData.map((x) => {
    var title = x.message.match(/.*/i);
    var depc = x.message.replace(/\s*\s*$/gm, "<br>");

    $(".active-project-carusel").append(`
    <a href="${x.permalink_url}" target="_blank">
    <div class="item">
        <div class="single-project" style="background: url(${x.full_picture});">
        <div class="overlay overlay-content">
            <h1>
            ${title}
            </h1>
            <p>
            ${depc}
            </p>
        </div>
        </div>
  </div>
  </a>`);
  });

  $(".active-project-carusel").owlCarousel({
    items: 4,
    loop: true,
    margin: 50,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1281: {
        items: 4,
      },
    },
  });
}

function facebookFeed(feedData) {
  feedData.map(function (x) {
    $(".active-testimonial").append(
      ` <a href="${x.permalink_url}" target="_blank">
            <div class="single-testimonial item d-flex flex-row blog-left">
          <div class="single-blog">
            <img class="mx-auto d-block img-fluid" src="${x.full_picture}" alt="" />
            <div class="desc">
              <!-- <a href="#"><h5>We do Believe in Quality</h5></a> -->
              <p class="mt-30">
                ${x.message}
              </p>
              </div>
            </div>
          </div>
        </div></a>`
    );
  });

  $(".active-testimonial").owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    nav: true,
    navText: ["<span class='lnr lnr-arrow-up'></span>", "<span class='lnr lnr-arrow-down'></span>"],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
}
