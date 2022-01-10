import { CountryDetails, CountryReport } from "./types"

const client = async (
  endpoint: string,
  customConfig?: RequestInit
): Promise<any> => {
  try {
    const headers = {
      "x-rapidapi-host": process.env.RAPID_API_HOST,
      "x-rapidapi-key": process.env.RAPID_API_KEY
    }

    const config = {
      method: "GET",
      ...customConfig,
      headers: {
        ...headers,
        ...(customConfig?.headers ?? {})
      }
    }

    const res = await fetch(`${process.env.RAPID_API_URL}/${endpoint}`, config)
    const resJSON = await res.json()

    return resJSON
  } catch (e) {
    console.log(e)
  }
}

const getAllCountryDetails = (): Promise<CountryDetails[]> => {
  return client("help/countries")
}

const getCountryReport = ({
  countryCode
}: {
  countryCode: string
}): Promise<CountryReport[]> => {
  return client(`country/code?code=${countryCode}`)
}

export { getAllCountryDetails, getCountryReport }
export type { CountryDetails, CountryReport }
