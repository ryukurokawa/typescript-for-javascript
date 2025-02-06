export{};

type Mojiretsu = string;

const fooString: string ='Hello'
const fooMojirtetsu: Mojiretsu='Hello'

const example1 ={
  name:'Ryu',
  age:25
}

 type profilel={
  name:string;
  age:number;
}

const examplel2: profilel = {
name:'Ryu',
age:25
}

type Profile2 =typeof example1;