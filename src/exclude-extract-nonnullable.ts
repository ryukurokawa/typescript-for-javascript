export {}

type DebugType = () => void
type SomeTypes = string | number | DebugType

type FunctionType = Exclude<SomeTypes, string | number>
type NumFunctionType = Exclude<SomeTypes, DebugType>
type TypeExcludingFunction = Exclude<SomeTypes, Function>

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>
type NumFunctionTypeByExtract = Extract<SomeTypes, string | number>
type FunctionTypeByExtractingFunction = Extract<SomeTypes, Function>

type Nullabletypes = string | number | null | undefined
type NonNullabletypes = NonNullable<Nullabletypes>