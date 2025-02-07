export{};

interface Profile{
  name:string;
  underTwenty:boolean;
  [index:string]: string | number | boolean;
}

let profile: Profile = {name: 'nan', underTwenty:false};

// How to write index signaatures
//{[index: typeForIndex]: typeForValue}

profile.name ='nan';
profile.age = 20;
profile.nationality ='Japan';