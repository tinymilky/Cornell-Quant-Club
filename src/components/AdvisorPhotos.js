import React, { Component } from "react";
import { Card, Row, Col} from 'antd';

const { Meta } = Card;

export default class photos extends Component {
  render() {
      return (
        <section id="photos" style={{ background: 'white' }}>
          <div className="row" >
            <div className="twelve columns" >
            <h1>Advisors</h1>
              <Row>
              <Col xs={8} sm={6} md={6} lg={6}></Col>
              <Col xs={8} sm={6} md={6} lg={6}>
                <Card
                  hoverable={false}
                  style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                  bordered={false}
                  cover={<a href="http://faculty.bscb.cornell.edu/~basu/"><img alt="example" src="CQ_images/t5.jpg" /></a>}
                >
                <Meta style={{ fontSize: '15px' }}
                  title="Basu Sumanta"
                  description="Assistant Professor of Department of Statistics and Data Science"
                />
                </Card>
              </Col>
              <Col xs={8} sm={6} md={6} lg={6}>
                <Card
                  hoverable={false}
                  style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                  bordered={false}
                  cover={<a href="http://mankad-research.hosting.cornell.edu/"><img alt="example" src="CQ_images/t6.jpg" /></a>}
                >
                <Meta style={{ fontSize: '15px' }}
                  title="Shawn Mankad"
                  description="Assistant Professor of Operations, Technology and Information Management"
                />
                </Card>
              </Col>
              <Col xs={8} sm={6} md={6} lg={6}></Col>
              </Row>
            </div>
          </div>
          <hr/>
        </section>
      )
  }
}