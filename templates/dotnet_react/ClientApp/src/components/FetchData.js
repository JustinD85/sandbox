import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = {
      forecasts: [], loading: true,
      test: ["Default"]
    };

    fetch('api/SampleData/WeatherForecasts')
      // .then(e => console.log(e))
      .then(response => response.json())
      .then(data => {
        this.setState({ forecasts: data, loading: false });
      })
      .catch(e => console.log(e));

    fetch('api/Sockets/Abc')
      .then(r => r.json())
      .then(d => this.setState({ test: d, loading: false }))
      .catch(e => console.log(e))
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.dateFormatted}>
              <td>{forecast.dateFormatted}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        <h1>{this.state.test.feelings}</h1>
        {contents}
      </div>
    );
  }
}
