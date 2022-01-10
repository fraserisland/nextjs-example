export interface CountryDetails {
  name: string
  alpha2code: string
  alpha3code: string
  latitude: number
  longitude: number
}

export interface CountryReport {
  country: string
  code: string
  confirmed: number
  recovered: number
  deaths: number
  critical: number
  latitude: number
  longitude: number
  lastChange: string
  lastUpdate: string
}
