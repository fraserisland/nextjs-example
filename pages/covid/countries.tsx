import Link from "next/link"
import kebabCase from "lodash.kebabcase"

import { getAllCountryDetails, CountryDetails } from "../../src/api/covid"

import { Header } from "../../src/components"

type CountriesOmitted = Omit<
  CountryDetails,
  "alpha2code" | "latitude" | "longitude"
>[]

function Cases({ countries }: { countries: CountriesOmitted }) {
  return (
    <div>
      <Header
        title="Covid Cases country list"
        subtitle="Click any of the links below to get data for your country."
      />
      <ul>
        {countries.map(country => (
          <li key={country.name}>
            <Link
              href={`/covid/countries/${kebabCase(country?.alpha3code ?? "")}`}
            >
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cases

export async function getStaticProps() {
  try {
    const countries = await getAllCountryDetails()

    if (!countries?.length) throw new Error(`Failed fetching countries.`)

    return {
      props: {
        countries: countries.map(({ alpha3code, name }) => ({
          alpha3code,
          name
        }))
      }
    }
  } catch (e) {
    throw e
  }
}
