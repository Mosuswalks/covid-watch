import React, { useState } from 'react';
import { Card, Row, Col } from 'antd';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const [loading, setLoading] = useState(true);

  if (!confirmed) {
    return 'loading...';
  }

  return (
    <div className={styles.container}>
      <Row gutter={{ xs: 16, sm: 16, md: 24, lg: 32 }}>
        <Col lg={8} xs={24}>
          <Card hoverable className={cx(styles.card, styles.infected)}>
            <h1>Confirmed</h1>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={1.5}
              separator=","
            />
            <br />
            Last Updated: {new Date(lastUpdate).toDateString()}
          </Card>
        </Col>
        <Col lg={8} xs={24}>
          <Card hoverable className={cx(styles.card, styles.recovered)}>
            <h1>Recovered</h1>
            <CountUp
              start={0}
              end={recovered.value}
              duration={1.5}
              separator=","
            />
            <br />
            Last Updated: {new Date(lastUpdate).toDateString()}
          </Card>
        </Col>
        <Col lg={8} xs={24}>
          <Card hoverable className={cx(styles.card, styles.deaths)}>
            <h1>Deaths</h1>
            <CountUp
              start={0}
              end={deaths.value}
              duration={1.5}
              separator=","
            />
            <br />
            Last Updated: {new Date(lastUpdate).toDateString()}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
