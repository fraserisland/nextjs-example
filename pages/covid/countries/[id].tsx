import React from "react"
import kebabCase from "lodash.kebabcase"

import {
  getAllCountryDetails,
  getCountryReport,
  CountryReport
} from "../../../src/api/covid"

import { Header } from "../../../src/components"

function CountryReportPage({ report }: { report: CountryReport }) {
  return (
    <div>
      <Header
        title={`${report.country} Covid CountryReport`}
        subtitle="See all the latest covid report"
      />
      <ul>
        <li>Confirmed: {report.confirmed}</li>
        <li>Recovered: {report.recovered}</li>
        <li>Critical: {report.critical}</li>
        <li>Deaths: {report.deaths}</li>
      </ul>
    </div>
  )
}

export default CountryReportPage

export async function getStaticProps({ params }) {
  try {
    const report = await getCountryReport({ countryCode: params.id })

    if (!report?.[0]?.confirmed) return { notFound: true }

    return {
      props: {
        report: report[0]
      },
      revalidate: 60 * 15
    }
  } catch (e) {
    throw e
  }
}

export async function getStaticPaths() {
  try {
    const countries = await getAllCountryDetails()

    if (!countries?.length) throw new Error(`Failed fetching countries.`)

    const paths = countries.map(country => ({
      params: { id: kebabCase(country.alpha3code ?? "") }
    }))

    return { paths, fallback: false }
  } catch (e) {
    throw e
  }
}
