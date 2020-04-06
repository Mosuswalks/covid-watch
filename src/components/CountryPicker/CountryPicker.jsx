import React, { useEffect, useState } from 'react';
import { Form, Select, Row, Col } from 'antd';
import { fetchCountries } from '../../services/covid-api';

import styles from './CountryPicker.module.css';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setCountries]);

  if (!countries) {
    return 'loading...';
  }

  return (
    <Row>
      <Col lg={12} offset={10}>
        <Select
          className={styles.select}
          defaultValue=" "
          onChange={handleCountryChange}
        >
          <Option value="">Global</Option>
          {countries.map((country) => (
            <Option key={country} value={country}>
              {country}
            </Option>
          ))}
        </Select>
      </Col>
    </Row>
  );
};

export default CountryPicker;
