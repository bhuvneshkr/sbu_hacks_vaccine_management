import React from 'react';
import {
  Row,
  Col,
  Progress,
  Table,
  Label,
  Input,
} from 'reactstrap';

import Widget from '../../components/Widget';

import Calendar from './components/calendar/Calendar';
import Map from './components/am4chartMap/am4chartMap';
import Rickshaw from './components/rickshaw/Rickshaw';

import AnimateNumber from 'react-animated-number';

import s from './Dashboard.module.scss';

import peopleA1 from '../../images/people/a1.jpg';
import peopleA2 from '../../images/people/a2.jpg';
import peopleA5 from '../../images/people/a5.jpg';
import peopleA4 from '../../images/people/a4.jpg';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      checkedArr: [false, false, false],
    };
    this.checkTable = this.checkTable.bind(this);
  }

  checkTable(id) {
    let arr = [];
    if (id === 0) {
      const val = !this.state.checkedArr[0];
      for (let i = 0; i < this.state.checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = this.state.checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }
      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }
    this.setState({
      checkedArr: arr,
    });
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">Dashboard &nbsp;
          <small>
            <small></small>
          </small>
        </h1>

        <Row>
          <Col lg={7}>
            <Widget className="bg-transparent">
              <Map />
            </Widget>
          </Col>
          <Col lg={1} />

          <Col lg={4}>
            <Widget
              className="bg-transparent"
              title={<h5> Map
                      <span className="fw-semi-bold">&nbsp;Statistics</span></h5>} settings refresh close
            >
              <p>Status: <strong>Live</strong></p>
              <p>
                <span className="circle bg-default text-white"><i className="fa fa-map-marker" /></span> &nbsp;
                50 States, 19,495 Cities
              </p>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Vaccinated</h6>
                  <p className="description deemphasize mb-xs text-white">Population</p>
                  <Progress color="success" value="80" className="bg-custom-dark progress-xs" />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small><AnimateNumber value={85} />%</small>
                  </span>
                </div>
              </div>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Infected</h6>
                  <p className="description deemphasize mb-xs text-white">Population</p>
                  <Progress color="danger" value="39" className="bg-custom-dark progress-xs" />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small><AnimateNumber value={35} />%</small>
                  </span>
                </div>
              </div>
              
              <h6 className="fw-semi-bold mt">Map Distributions</h6>
              <p>Tracking: <strong>Active</strong></p>
              
              <div className="input-group mt">
                <input type="text" className="form-control bg-custom-dark border-0" placeholder="Search Map" />
                <span className="input-group-btn">
                  <button type="submit" className={`btn btn-subtle-blue ${s.searchBtn}`}>
                    <i className="fa fa-search text-light" />
                  </button>
                </span>
              </div>

            </Widget>
          </Col>

        </Row>

        <Row>
          <Col lg={4} xs={12}>
            <Widget
              title={<h6><span className="badge badge-success">updates</span> Alerts</h6>}
              refresh close
            >
              <div className="widget-body undo_padding">
                <div className="list-group list-group-lg">
                  <button className="list-group-item text-left">
                    
                    <div>
                      <h6 className="m-0" className="fw-semi-bold">New York Times</h6>
                      <p className="help-block text-ellipsis m-0"> Under 10 Percent in U.S. Have Antibodies, Study Finds.</p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <div>
                      <h6 className="m-0" className="fw-semi-bold">CBS News</h6>
                      <p className="help-block text-ellipsis m-0">Coronavirus: The Race To Respond U.S. soars past </p>
                      <p> 7 million COVID-19 cases as some states relax restrictions.</p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <div>
                      <h6 className="m-0" className="fw-semi-bold">NIH: National Institutes of Health</h6>
                      <p className="help-block text-ellipsis m-0">Fourth large-scale COVID-19 vaccine trial begins </p>
                      <p> in the United States.</p>
                    </div>
                  </button>
                </div>
              </div>
              <footer className="bg-widget-transparent mt">
                <input type="search" className="form-control form-control-sm bg-custom-dark border-0" placeholder="Search" />
              </footer>

            </Widget>
          </Col>

          <Col lg={4} xs={12}>
            <Row>
            <Widget
              title={<h6> Vaccine <span className="fw-semi-bold">Stats</span></h6>} close
            >

              <div className="widget-body">
                <h3>328,000,000	Total Population   </h3>
              </div>
              <div className={`widget-table-overflow ${s.table}`}>
                <Table striped size="sm">
                  <thead className="no-bd">
                    
                  </thead>
                  <tbody>
                    <tr>
                    <td>
                        <div className="checkbox abc-checkbox">
                          <Input
                            className="mt-0"
                            id="checkbox214" onClick={() => this.checkTable(2)} type="checkbox"
                            checked={this.state.checkedArr[2]}
                            readOnly
                          />{' '}
                          <Label for="checkbox214" />
                        </div>
                      </td>
                      <td>Total people vaccinated </td>
                      <td className="text-align-right fw-semi-bold">64,800</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox abc-checkbox">
                          <Input
                            className="mt-0"
                            id="checkbox214" onClick={() => this.checkTable(2)} type="checkbox"
                            checked={this.state.checkedArr[2]}
                            readOnly
                          />{' '}
                          <Label for="checkbox214" />
                        </div>
                      </td>
                      <td>People yet to be vaccinated</td>
                      <td className="text-align-right fw-semi-bold">327,935,200</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="widget-body mt-xlg chart-overflow-bottom" style={{ height: '100px' }}>
                <Rickshaw height={100} />
              </div>

            </Widget>
            </Row>
            <Row>
            <Widget
              title={<h6> COVID <span className="fw-semi-bold">Stats</span></h6>} close
            >

              <div className="widget-body">
                <h3>7,250,984	Total infected cases          </h3>
              </div>
              <div className={`widget-table-overflow ${s.table}`}>
                <Table striped size="sm">
                  <thead className="no-bd">
                    
                  </thead>
                  <tbody>
                    <tr>
                    <td>
                        <div className="checkbox abc-checkbox">
                          <Input
                            className="mt-0"
                            id="checkbox214" onClick={() => this.checkTable(2)} type="checkbox"
                            checked={this.state.checkedArr[2]}
                            readOnly
                          />{' '}
                          <Label for="checkbox214" />
                        </div>
                      </td>
                      <td>New Cases</td>
                      <td className="text-align-right fw-semi-bold">+6,800</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox abc-checkbox">
                          <Input
                            className="mt-0"
                            id="checkbox214" onClick={() => this.checkTable(2)} type="checkbox"
                            checked={this.state.checkedArr[2]}
                            readOnly
                          />{' '}
                          <Label for="checkbox214" />
                        </div>
                      </td>
                      <td>New Deaths</td>
                      <td className="text-align-right fw-semi-bold">+184</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="widget-body mt-xlg chart-overflow-bottom" style={{ height: '100px' }}>
                <Rickshaw height={100} />
              </div>

            </Widget>
            </Row>
            
          </Col>

          <Col lg={4} xs={12}>
            <Widget title={<h6>Calendar</h6>} settings close bodyClass={"pt-2 px-0 py-0"}>
              <Calendar />
              <div className="list-group fs-mini">
                <button className="list-group-item text-ellipsis">
                  <span className="badge badge-pill badge-primary float-right">9/28</span>
                  New avialable slot: 
                </button>
                <button className="list-group-item text-ellipsis">
                  <span className="badge badge-pill badge-success float-right">9/26</span>
                  Booked slot: 
                </button>
              </div>
            </Widget>
          </Col>

        </Row>

      </div>
    );
  }
}

export default Dashboard;
