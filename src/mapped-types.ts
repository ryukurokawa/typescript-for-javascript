export {}

type Profile ={
  name:string
  age:number
}

type PartialProfile = Partial<Profile>
type ProfileTypes = keyof Profile

type Optional<T> = {[P in keyof T]?: T[P]}
type OptionalProfile = Optional<Profile>