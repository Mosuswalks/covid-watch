import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components';

import { fetchData } from './services/covid-api';

const { Content, Footer } = Layout;

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function setApiData() {
      const response = await fetchData();
      setData(response);
    }
    setApiData();
  }, []);

  return (
    <Layout className="layout">
      <div className={styles.container}>
        <Content>
          <Cards data={data} />
          <CountryPicker />
          <Chart />
        </Content>
      </div>
      <Footer />
    </Layout>
  );
}

export default App;
