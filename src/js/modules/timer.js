
import {setZero} from '../utiles';

const  timer = () => {
  
  const today = new Date();
  const currentMounth = today.getMonth();
  const currentYear = today.getFullYear();
  const deadline = new Date(currentYear, currentMounth +1, 0)
  const deadlineDate = deadline.getDate();
  const deadlineMounth = deadline.getMonth();
  const mounthes = ['нваря', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря' ];
  
  document.querySelector('#deadline-date').textContent = deadlineDate;
  document.querySelector('#deadline-mounth').textContent = mounthes[deadlineMounth];
  console.log(deadlineMounth, deadlineDate)
  
  function getRemnant(){
    const now = Date.now();
    const remnant = deadline - now;
    const days = Math.floor(remnant / (1000 *60 *60 *24));
    const hours = Math.floor(remnant / (1000 *60 *60) %24);
    const minutes = Math.floor(remnant / (1000 *60) %60);
    const seconds = Math.floor(remnant / 1000 %60);
    
    return {
      remnant,
      days,
      hours,
      minutes,
      seconds
    }
  }

  function setTimerData(){
    const daysValue = document.querySelector('#days');
    const hoursValue = document.querySelector('#hours');
    const minutesValue = document.querySelector('#minutes');
    const secondsValue = document.querySelector('#seconds');
    const timeInterval = setInterval(updateData, 1000);

    updateData();
    
    function updateData(){
      const {remnant, days, hours, minutes, seconds} = getRemnant(deadline);
      daysValue.textContent = setZero(days);
      hoursValue.textContent = setZero(hours);
      minutesValue.textContent = setZero(minutes);
      secondsValue.textContent = setZero(seconds);

      if(remnant < 0){
        clearInterval(timeInterval);
      }
    }
  }

  setTimerData();

}

export default timer;