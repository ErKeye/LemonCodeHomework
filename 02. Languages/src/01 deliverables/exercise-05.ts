console.log("************** DELIVERABLE 05 *********************");


class SlothMachine {
    coinsCount : number = 0;
  
    private getRamdomBool = () : boolean => Math.random() * 10 > 3;
    
    private getPrize() : number {
      this.coinsCount++;
      const prize = (this.getRamdomBool() && this.getRamdomBool() && this.getRamdomBool()) ? this.coinsCount : 0;
      this.coinsCount -= prize;
      return prize; 
    }
  
    public play() : void {
      const prize = this.getPrize();
      console.log(prize > 0 ? `You won ${prize} coins` : "Good luck next time!!")
    }  
  }

  const machine1 = new SlothMachine();
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 3 coins!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 2 coins!!"

console.log ("");
console.log ("");