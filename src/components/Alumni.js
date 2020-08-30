import React, { Component } from 'react';
import { Carousel } from 'antd';

export default class Alumni extends Component {
  render() {
    return (
      <section id="alumni" style={{ background:'white' }}>
        <div className="row" >
          <div className="twelve columns" >
          <h1>Alumni</h1>
          <Carousel autoplay>
            <div><h3>Yiming Yan, MEng 2018 student at ECE<br/>
                    SDE at Amazon, Seattle</h3></div>
            <div><h3>ShiShi Zhang, MEng 2018 student at SE<br/>
                    RDE at Schlumberger, Beijing</h3></div>
            <div><h3>Jiamin Zeng, MEng 2017 student at ECE<br/>
                    SDE at Oracle, Silicon Valley</h3></div>
            <div><h3>Haoyuan Zheng, MEng 2017 student at ECE<br/>
                    SDE at Google, Sunnyvale</h3></div>
            <div><h3>Rongguang Wang, MEng 2017 student at ECE<br/>
                    PhD student at ECE of University of Pennsylvania</h3></div>
          </Carousel>
          </div>
        </div>
      </section>
    );
  }
}