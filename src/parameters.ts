export{};

const debugProfile = (name:string,age:number)=>{
  console.log({name,age});
};

debugProfile('nan',20)

type Profile =Parameters<typeof debugProfile>;

const Profile:Profile =['Gloria',66]

debugProfile(...Profile);

type MyParameters <T extends (...args:any) => any> = T extends (
   ...args: infer P
) => any
  ? P
  : never;