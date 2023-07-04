import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CountriesDetails = ({ countries, info }) => {
	// 3 estados 1 de la info,
	const [countryInfo, setCountryInfo] = useState([]);
	const [newCountryInfo, setNewCountryInfo] = useState([1]);
	const [allCountries, setAllCountries] = useState();
	
	function displayNewCountry(newCLickedCOuntry) {
		setCountryInfo(newCLickedCOuntry);
		setNewCountryInfo([newCLickedCOuntry]);
	}
	
useEffect(()=>{
	console.log("hoa");
	setAllCountries(countries);
	setCountryInfo(info);
	setNewCountryInfo([]);
},[]);

	if (countryInfo.length !== 0) {
		console.log(countryInfo);
		return (
			<div id="info">
				<img src={`https://flagpedia.net/data/flags/icon/72x54/${countryInfo.alpha2Code.toLowerCase()}.png`} alt="countryFlag" />
				<h3></h3>
				<div className='data'>
					<p>Capital</p>
					<p></p>
				</div>
				<div>
					<p>Area</p>
					<p></p>
				</div>
				<div>
					<p>Borders</p>
					<ul>
						<li>
							{countryInfo.borders.map(country => allCountries.map(borderCountry => {

								if (borderCountry.alpha3Code === country) {
									console.log(borderCountry);
									return (

										<p>
											<Link onClick={()=>displayNewCountry(borderCountry)}>{borderCountry.name.common}</Link>

										</p>
									)
								}
							}))}
						</li>
					</ul>
				</div>




			</div>
		)

	}
}
	;



export default CountriesDetails;
