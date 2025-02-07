export {}

//Record<K, T>

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | "Shiga"

type Covid19InfectionInfo = {
  Kanji_name:string
  confirmed_cases:number
}

const covid19Japan:Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo:{  Kanji_name:'東京', confirmed_cases:1960},
  Chiba:{  Kanji_name:'千葉', confirmed_cases:249},
  Tottori:{  Kanji_name:'鳥取', confirmed_cases:2},
  Shiga:{  Kanji_name:'滋賀', confirmed_cases:13}
}