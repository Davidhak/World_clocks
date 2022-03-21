document.querySelector('body').addEventListener('click', function
  (event) {
  let aTag = event.target.closest('a');

  if (!aTag) { return; }

  let href = aTag.getAttribute('href');

  if (href.indexOf('http') === 0) {
    aTag.setAttribute('target', '_blank');
    return;
  }

  event.preventDefault();

  history.pushState(null, null, href);

  router();
});

function makeMenuChoiceActive(route) {
  // changes active link in the nav
  let aTagsInNav = document.querySelectorAll('nav a');
  for (let aTag of aTagsInNav) {
    aTag.classList.remove('active');
    let href = aTag.getAttribute('href');
    if (href === route) {
      aTag.classList.add('active');
    }
  }
}

async function router() {
  let route = location.pathname;
  makeMenuChoiceActive(route);

  route = route === '/' ? '/start' : route;
  route = '/partials' + route + '.html';
  // loads the content from the partial
  let content = await (await fetch(route)).text();
  // if no content is found, then load the start page
  content.includes('<title>Error</title>') && location.replace('/');
  // replace the content of the main element
  document.querySelector('main').innerHTML = content;

  if (route == '/partials/start.html') {
    analogClock();
    openDetailWindow();
  }

  if (route == '/partials/cities.html') {
    changeCity();
  }

  //route === '/partials/cities.html';
  //route === '/partials/add_city.html';
}

window.addEventListener('popstate', router);

router();


// For the responsive nav
const primaryNav = document.querySelector('.primary-navigation');
const navDropDown = document.querySelector('.mobile-nav-dropdown');

navDropDown.addEventListener('click', (event) => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true);
    navDropDown.setAttribute('aria-expanded', true);
  } else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    navDropDown.setAttribute('aria-expanded', false);
  }
});