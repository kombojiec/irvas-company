
const tabs = (tabsHeaderSelector, tabsItemSelector, tabsContentSelector, activeClass, display = 'block') => {

  const tabsHeader = document.querySelector(tabsHeaderSelector);
  const tabsItems = document.querySelectorAll(tabsItemSelector);
  const tabs = document.querySelectorAll(tabsContentSelector);

  tabs.forEach(tab => tab.classList.add('faded'));

  function showTabContent(index = 0){
    tabs.forEach((tab, i) => {
      if(i == index){
        tab.style.display = display;
        tabsItems[index].classList.add(activeClass);
      }
    })
  }

  function hideTabContent(){
    tabs.forEach((tab, index) => {
      tab.style.display = 'none';
      if(tabsItems[index].classList.contains(activeClass)){
        tabsItems[index].classList.remove(activeClass);
      }
    })
  }

  tabsHeader.addEventListener('click', event => {
    if(event.target.classList.contains(tabsItemSelector.replace(/\./, '')) ||
      event.target.parentNode.classList.contains(tabsItemSelector.replace(/\./, ''))){
      hideTabContent();
      tabsItems.forEach((item, index) => {
        if(event.target == item || event.target.parentNode == item){
          showTabContent(index);          
        }
      })
    }
  })

  hideTabContent();
  showTabContent();

}

export default tabs;