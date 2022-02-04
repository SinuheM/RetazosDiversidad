(function () {
  const tabs = document.getElementsByClassName('tabs__el')
  console.log(tabs)
  for (let index = 0; index < tabs.length; index++) {
    const element = tabs[index];
    console.log(element)
    
    const tabsBody = document.getElementsByClassName('tabs__body-el')
    const tabsEl = document.getElementsByClassName('tabs__el')
    element.addEventListener('click', function (ev) {
      for (let indexBody = 0; indexBody < tabsBody.length; indexBody++) {
        const elementBody = tabsBody[indexBody];
        elementBody.classList.remove('tabs__body-el--active')
      }
      for (let indexBody = 0; indexBody < tabsEl.length; indexBody++) {
        const elementBody = tabsEl[indexBody];
        elementBody.classList.remove('tabs__el--active')
      }

      ev.currentTarget.classList.add('tabs__el--active')

      const id = ev.currentTarget.dataset.tab
      console.log(id);

      const tabEl = document.getElementById(id)
      tabEl.classList.add('tabs__body-el--active')
    })
  }

  var glideMulti1 = new Glide('.glide', {
    type: 'carousel',
    autoplay: 1500,
    perView: 2,
    focusAt: 'center',
    breakpoints: {
      800: {
        perView: 1
      },
      480: {
        perView: 1
      }
    }
  });
  glideMulti1.mount();
})()