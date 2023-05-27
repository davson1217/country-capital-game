import React from 'react';
import ReactDOM from 'react-dom';
import CountryCapital from "./components/CountryCapital";

const data = {
    Germany: "Berlin",
    Lithuania: "Vilnius",
    Nigeria: "Lagos",
    "Papua New Guinea": "Port Moresby",
    Bulgaria: "Sofia"
}

const App = () => <CountryCapital data={data}/>

ReactDOM.render(<App/>, document.getElementById('root'))
