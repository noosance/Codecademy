const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 12
      break;
    case 'tuesday':
      return 7
      break;
    case 'wednesday':
      return 4
      break;
    case 'thursday':
     return 5
     break;
    case 'friday':
     return 6
     break;
    case 'saturday':
      return 6
      break;
    case 'sunday':
      return 6
      break;
   default:
    return 'Error!'
  }
};
const getActualSleepHours = () => 
  getSleepHours('monday')
  + getSleepHours('tuesday')
  + getSleepHours('wednesday')
  + getSleepHours('thursday')
  + getSleepHours('friday')
  + getSleepHours('saturday')
  + getSleepHours('sunday');
const getIdealSleepHours = idealHours => {
  return idealHours * 7;
};
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(5);
  if (actualSleepHours === idealSleepHours) {
    console.log('You slept the perfect amount!');
  }
  if (actualSleepHours > idealSleepHours) {
    console.log('You slept ' + (actualSleepHours-idealSleepHours)  + ' hour(s) more than you needed.');
  }
  if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest. You are currently at a ' + (idealSleepHours - actualSleepHours) + ' hour deficit!');
  }
};
calculateSleepDebt();