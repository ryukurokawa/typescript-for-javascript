export{};

type Pitcher1 ={
  throwwingSpeed:number;
}

type Batter1={
  battingAverage:number;
};


const DaimajinSasaki:Pitcher1 ={
  throwwingSpeed: 154
};

const OchiaiHiromitsu: Batter1={
  battingAverage:0.367
};

//type TwoWayPlayer = {
 // throwwingSpeed:number;
  //battingAverage:number
//}

type TwoWayPlayer =Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer={
  throwwingSpeed:165,
  battingAverage:0.286
}