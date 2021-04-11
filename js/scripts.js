  const html_image = portfolio.map((image) => {

      return `<div class="img_portfolio_box" id="">
                    <img src="img/portfolio/${image.img}">
                    <div class="img__description">
                        <div class="p_center">
                            <p class="upper-p">${image.name}</p>
                            <hr>
                            <p class="p_min">${image.description}</p>
                        </div>
                    </div>
                </div>`;

  });


  document.getElementById("img-json").innerHTML = html_image.join("");


  function activeTab(name) {

      let a_menu = document.getElementsByClassName('nav_link')

      let name_lower = name.toLowerCase();

      let link_menu = document.getElementsByClassName(name_lower)

      for (let i = 0; i < a_menu.length; i++) {
          a_menu[i].classList.remove('active');

      }
      for (let i = 0; i < link_menu.length; i++) {
          link_menu[i].className += " active";
      }

      let html_iamge_filter;

      if (name == 'All') {

          html_iamge_filter = portfolio.map((image) => {

              return `<div class="img_portfolio_box">
            <img src="img/portfolio/${image.img}">
            <div class="img__description">
                <div class="p_center">
                    <p class="upper-p">${image.name}</p>
                    <hr>
                    <p class="p_min">${image.description}</p>
                </div>
            </div>
        </div>`;

          });


      } else {

          const description_filter = portfolio.filter(function (descriptions) {

              if (descriptions.description == name) {

                  return descriptions;
              }

          });

          html_iamge_filter = description_filter.map((image) => {

              return `<div class="img_portfolio_box">
            <img src="img/portfolio/${image.img}">
            <div class="img__description">
                <div class="p_center">
                    <p class="upper-p">${image.name}</p>
                    <hr>
                    <p class="p_min">${image.description}</p>
                </div>
            </div>
        </div>`;

          });

      }

      let aimagen = document.getElementById('img-json');

      aimagen.parentNode.removeChild(aimagen);

      let loader = document.getElementById('pre-loader');
      loader.className += ' loader';

      setTimeout(function () {

          loader.classList.remove('loader')
          document.getElementById('img_portfolio').innerHTML = `<div id="img-json"></div>`
          document.getElementById("img-json").innerHTML = html_iamge_filter.join("");

      }, 1000);

  }

  function pre_loader() {
      let aimagen = document.getElementById('img-json');

      aimagen.parentNode.removeChild(aimagen);

      let loader = document.getElementById('pre-loader');
      loader.className += ' loader';
  }


  var menu = document.querySelector('.hamburger');

  function toggleMenu(event) {
      this.classList.toggle('is-active');
      document.querySelector(".menuppal").classList.toggle("is_active");
      event.preventDefault();
  }

  function ocultar() {

      let element = document.getElementById('menu_remove');
      element.classList.remove('is_active');
      let element2 = document.getElementById('remove_hamburger');
      element2.classList.remove('is-active');

  }


  menu.addEventListener('click', toggleMenu, false);


  function grid_list() {
      

      let img_por = document.getElementById("img_portfolio");
    //   img_por.style.columns = "1";
  }

  function grid_view() {

      let img_por = document.getElementById("img_portfolio");
    //   img_por.style.columns = "3";
  }