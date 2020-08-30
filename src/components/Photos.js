import React, { Component } from "react";
import { Card, Row, Col} from 'antd';

const { Meta } = Card;

export default class photos extends Component {
  render() {
      return (
        <section id="photos" style={{ background: 'white' }}>
          <div className="row" >
            <div className="twelve columns" >
            <h1>Team</h1>
              <Row>
                <Col xs={8} sm={6} md={6} lg={6}>
                  <Card
                    hoverable={false}
                    style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="CQ_images/t1.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Chao Li"
                    description="PhD@AEP"
                  />
                  </Card>
                </Col>
                <Col xs={8} sm={6} md={6} lg={6}>
                  <Card
                    hoverable={false}
                    style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<a href="https://www.aep.cornell.edu/research/grad-students/yandong-li"><img alt="example" src="CQ_images/t2.jpg" /></a>}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Yandong Li"
                    description="PhD@AEP"
                  />
                  </Card>
                </Col>
                <Col xs={8} sm={6} md={6} lg={6}>
                  <Card
                    hoverable={false}
                    style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<a href="http://tinymilky.github.io/"><img alt="example" src="CQ_images/t3.jpg" /></a>}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Hang Zhang"
                    description="PhD@ECE"
                  />
                  </Card>
                </Col>
                <Col xs={8} sm={6} md={6} lg={6}>
                  <Card
                    hoverable={false}
                    style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="CQ_images/t4.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Gufeng Yang"
                    description="MEng@Tech CS"
                  />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <hr/>
        </section>
      )
  }
}