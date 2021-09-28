const tipCalculator = (quality, cost) =>{
  switch (quality){
    case 'bad':
      return cost * 0.05;
    case 'ok':
      return cost * 0.15;
    case 'good':
      return cost * 0.2;
    case 'excellent':
      return cost * 0.3;
    default: return cost * 0.18;
}
}
console.log(tipCalculator('excellent', 150))