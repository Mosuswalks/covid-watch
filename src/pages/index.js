import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = () => {
	const [ confirmed, setConfirmed] = useState()
	const [ deaths, setDeaths ] = useState()
	const [ recovered, setRecovered ] = useState()
	
	const data = useStaticQuery(graphql`
		query MyQuery {
			deaths {
				value
			}
			recovered {
				value
			}
			confirmed {
				value
			}
		}
	`)



	useEffect(() => {
		async function fetchData() {
			await fetch('https://covid19.mathdro.id/api/countries/canada')
			.then(response => response.json())
			.then(resultData => {
				console.log(resultData.confirmed.value)
				setConfirmed(resultData.confirmed)
				setDeaths(resultData.deaths)
				setRecovered(resultData.recovered)
			})
		}
		fetchData()
	}, [])

	return(
		<Layout>
			<SEO title="Home" />

			<h1>Canadian Covid-19 Stats</h1>
			<h3>Confirmed Cases: {data.confirmed.value}</h3>
			<h3>Deaths: {data.deaths.value}</h3>
			<h3>Recovered: {data.recovered.value}</h3>
			<Link to="/page-2/">Go to page 2</Link>
		</Layout>
	)
}


export default IndexPage
