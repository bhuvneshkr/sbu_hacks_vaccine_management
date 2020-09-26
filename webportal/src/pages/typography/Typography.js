import React from 'react';
import {
    Row,
    Col,
} from 'reactstrap';

import Widget from '../../components/Widget/Widget';

const Typography = () => (
    <div>
        <h1 className="page-title">CoVax - <span className="fw-semi-bold">Vaccine Tracker</span></h1>
        <Row>
            <Col xs={12} md={6}>
                <Widget
                    title={<h5></h5>}
                    close collapse
                >
                    <h4>COVID Vaccine Information</h4>
        
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                        <Row>
                        
                                <h4>COVID-vaccine results are on the way — and scientists’ concerns are growing
</h4>
                                <h4>Researchers warn that vaccines could stumble on safety trials, be fast-tracked because of politics or fail to meet the public’s expectations.</h4>
                                
                        </Row>
                    </div>
                </Widget>
            </Col>
            <Col xs={12} md={6}>
                <Widget
                    title={<h5></h5>}
                    close collapse
                >
                    <h4>COVID Infection Information</h4>
        
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                        <Row>
                        
                                <h4>Covid-19 Live Updates: Thousands Protest Lockdown Measures in London</h4>
                                <h4> Coronavirus news: US records highest daily death toll in weeks </h4>                              
                        </Row>
                    </div>
                </Widget>
            </Col>
            
        </Row>
    </div>
);

export default Typography;
