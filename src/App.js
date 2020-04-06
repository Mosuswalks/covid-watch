import React, { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components';

import { fetchData } from './services/covid-api';
import image from './images/image.png';

const { Content, Footer } = Layout;

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    async function setApiData() {
      const response = await fetchData();
      setData(response);
    }
    setApiData();
  }, []);

  const handleCountryChange = async (countrySelected) => {
    const fetchedCountry = await fetchData(countrySelected);
    setCountry(countrySelected);
    setData(fetchedCountry);
  };

  return (
    <Layout className="layout">
      <div className={styles.container}>
        <Content>
          <Row>
            <Col offset={8}>
              <img className={styles.image} src={image} alt="COVID-19" />
            </Col>
          </Row>
          <Cards data={data} />
          <CountryPicker handleCountryChange={handleCountryChange} />
          <Chart data={data} country={country} />
        </Content>
      </div>
      <Footer />
    </Layout>
  );
}

export default App;
