export {}

type MyExclude =  DebugType
type DebugType = () => void
type SomeTypes = string | number | DebugType

type FunctionType = Exclude<SomeTypes, string | number>
type MyFunctionType = MyExclude


type FunctionTypeByExtract = Extract<SomeTypes, DebugType>


type Nullabletypes = string | number | null | undefined
type NonNullabletypes = NonNullable<Nullabletypes>