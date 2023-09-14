import { useState } from "react";



const Country = ({ country,handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(country)
    const { name, flags, population} = country;

    const [visited,setVisited]=useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    // console.log(handleVisitedCountry);
    const passWithParams = () => handleVisitedCountry(country);
    

    return (
        <div className="country">
            <h3>CountryName:{name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>population
                :{population
                } </p>
                <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
                <br />
                <button onClick={() =>  handleVisitedFlags(country.flags.png) }>add flag</button>
                <br />
                <button onClick={handleVisited} >{visited ? 'Visited' : 'Going'}</button>
        </div>
    );

};


export default Country;