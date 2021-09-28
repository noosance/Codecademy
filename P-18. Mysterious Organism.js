const pAequorFactory = (number, array) => {
    return{ 
    specimenNum: number,
    dna: array,
    mutate (){
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase){
        newBase = returnRandBase()
      }
    this.dna[randIndex] = newBase;
    return this.dna;
    },
    compareDNA (specimen){
      let count = 0;
      for (let i = 0; i < 15; i++){
        if (this.dna[i] === specimen.dna[i]){
          count++
        }
      }
      let percentageSame = this.count/15*100;
      return percentageSame;
        },
    willLikelySurvive (){
      let count = 0;
      for (let i = 0; i < 15; i++){
        if (this.dna[i] == 'C' || this.dna[i] == 'G'){
          count++
          }
        let percentageCG = this.count/15*100;
        if (percentageCG >= 60){
          return true
        } else {
          return false
        }
      }
    }
  
      }
  }
  
  
  const sampleVial = [];
  let idCounter = 1;
  
  while (sampleVial.length < 30){
   let newOrg = pAequorFactory(idCounter, mockUpStrand());
   if (newOrg.willLikelySurvive()){
   sampleVial.push(newOrg)
   }
      idCounter++;
  
  }
  console.log(sampleVial)