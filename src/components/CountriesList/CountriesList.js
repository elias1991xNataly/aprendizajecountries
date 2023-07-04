import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CountriesDetails from '../CountriesDetails/CountriesDetails';


const CountriesList = ({ url }) => {
	const [countries, setCountries] = useState([]);
	// console.log(countries);
	const [countrySelected, setCountrySelected] = useState([]);

	useEffect(() => {
		axios.get(url).then(response => {
			setCountries(response.data)
		});
	}, []);
	const showInfo = (country) => {
		setCountrySelected(country);
	}


	return (

		<div>
			<div>

				{/* ira la estructira de info del país:bandera y nombre */}
				{countries.map((country, i) => {
					return (<div key={i} id="main">
						<Link className='country' to={"/"} onClick={() => showInfo(country)}>
							{/* añadiri el onclickpara la funcion de carga de los detalles */}
							<img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="countryflag" />
							<p>{country.name.common}</p>
						</Link>

					</div>)
				})}
			</div>
			<CountriesDetails info={countrySelected} countries={countries}/>
		</div>
	)
}
	;




export default CountriesList;
