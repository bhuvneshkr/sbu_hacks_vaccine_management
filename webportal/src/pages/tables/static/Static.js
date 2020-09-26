import React from 'react';
import {
  Row,
  Col,
  Table,
  Progress,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Label,
  Badge,
} from 'reactstrap';
import { Sparklines, SparklinesBars } from 'react-sparklines';

import Widget from '../../../components/Widget';
import s from './Static.module.scss';

class Static extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tableStyles: [
        {
          id: 1,
          picture: require('../../../images/tables/1.png'), // eslint-disable-line global-require
          description: 'Vaccine Dose 1',
          info: {
            type: 'Dose 1',
            dimensions: 'Vaccinated successfully',
          },
          date: new Date('September 12, 2020'),
          size: '45.6 KB',
          progress: {
            percent: 100,
            colorClass: 'success',
          },
        },
        {
          id: 2,
          picture: require('../../../images/tables/2.png'), // eslint-disable-line global-require
          description: 'Vaccine Dose 2',
          info: {
            type: 'Dose 2',
            dimensions: 'To be vaccinated',
          },
          date: new Date('September 26, 2020'),
          progress: {
            percent: 50,
            colorClass: 'warning',
          },
        },
        {
          id: 3,
          picture: require('../../../images/tables/3.png'), // eslint-disable-line global-require
          description: 'Feedbacks',
          info: {
            type: 'Side effects',
            dimensions: 'No side effects reported yet',
          },
          date: new Date('October 10, 2020'),
          progress: {
            percent: 10,
            colorClass: 'danger',
          },
        },
      ],
      checkboxes1: [false, true, false, false],
      checkboxes2: [false, false, false, false, false, false],
      checkboxes3: [false, false, false, false, false, false],
    };

    this.checkAll = this.checkAll.bind(this);
  }

  parseDate(date) {
    this.dateSet = date.toDateString().split(' ');

    return `${date.toLocaleString('en-us', { month: 'long' })} ${this.dateSet[2]}, ${this.dateSet[3]}`;
  }

  checkAll(ev, checkbox) {
    const checkboxArr = (new Array(this.state[checkbox].length)).fill(ev.target.checked);
    this.setState({
      [checkbox]: checkboxArr,
    });
  }

  changeCheck(ev, checkbox, id) {
    //eslint-disable-next-line
    this.state[checkbox][id] = ev.target.checked;
    if (!ev.target.checked) {
      //eslint-disable-next-line
      this.state[checkbox][0] = false;
    }
    this.setState({
      [checkbox]: this.state[checkbox],
    });
  }

  render() {
    return (
      <div className={s.root}>
        <h2 className="page-title">Vaccine - <span className="fw-semi-bold">Tracker</span></h2>
        <Row>
          <Col>
            <Widget
              title={<h5>
                 <span className="fw-semi-bold">Status</span>
              </h5>} settings close
              bodyClass={s.mainTableWidget}
            >
              <Table striped>
                <thead>
                  <tr className="fs-sm">
                    <th className="hidden-sm-down">#</th>
                    <th>Description</th>
                    <th className="hidden-sm-down">Info</th>
                    <th className="hidden-sm-down">Date</th>
                    <th className="hidden-sm-down">Status</th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.state.tableStyles.map(row =>
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      
                      <td>
                        {row.description}
                        {row.label &&
                        <div>
                          <Badge color={row.label.colorClass}>{row.label.text}</Badge>
                        </div>
                        }
                      </td>
                      <td>
                        <p className="mb-0">
                          <small>
                            Type:
                            <span className="text-muted fw-semi-bold">&nbsp; {row.info.type}</span>
                          </small>
                        </p>
                        <p>
                          <small>
                            Details:
                            <span className="text-muted fw-semi-bold">&nbsp; {row.info.dimensions}</span>
                          </small>
                        </p>
                      </td>
                      <td className="text-muted">
                        {this.parseDate(row.date)}
                      </td>
                      
                      <td className="width-150">
                        <Progress
                          color={row.progress.colorClass} value={row.progress.percent}
                          className="progress-sm mb-xs"
                        />
                      </td>
                    </tr>,
                  )
                }
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row>
        
      </div>
    );
  }

}

export default Static;
