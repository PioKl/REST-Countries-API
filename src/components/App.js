import React, { Component } from 'react';
import '../style/App.scss';

class App extends Component {

  /* https://restcountries.eu/ */
  /* ALL  https://restcountries.eu/rest/v2/all */
  /* Name - Search by country name. It can be the native name or partial name
  https://restcountries.eu/rest/v2/name/{name}, https://restcountries.eu/rest/v2/name/united 
  */
  /* Full Name - Search by country full name
  https://restcountries.eu/rest/v2/name/{name}?fullText=true
  https://restcountries.eu/rest/v2/name/aruba?fullText=true
  */
  /* Region - Search by region: Africa, Americas, Asia, Europe, Oceania
  https://restcountries.eu/rest/v2/region/{region}
  https://restcountries.eu/rest/v2/region/europe
  */

  render() {

    return (
      <div className="App">
        <p>Rest Countries</p>
      </div>
    );
  }
}

export default App;