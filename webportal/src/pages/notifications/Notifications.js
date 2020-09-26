import React from 'react';
import {
  Row, Col, Button,
} from 'reactstrap';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'uuid/v4'
import Widget from '../../components/Widget';
import s from './Notifications.module.scss';

class Notifications extends React.Component {

  state = {
    options: {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true
    }
  }

  componentDidMount() {
    toast.success('Thanks for checking out Messenger!', {
      position: "bottom-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true
    });
  }

  addSuccessNotification = () => toast.success('Showing success message was successful!', this.state.options);

  toggleLocation = (location) => {
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        position: location
      }
    }));
  }

  addInfoNotification = () => {
    let id = uuid();
    toast.info(
    <div>
      Launching thermonuclear war...
      <Button onClick={() => this.launchNotification(id)} outline size="xs" className="width-100 mb-xs mr-xs mt-1">Cancel launch</Button>
    </div>,
    {...this.state.options,toastId: id},
    );
  }

  launchNotification = (id) => toast.update(id, { ...this.state.options, render: "Thermonuclear war averted", type: toast.TYPE.SUCCESS });

  addErrorNotification = () => {
    let id = uuid();
    toast.error(
    <div>
      Error destroying alien planet <br/>
      <Button onClick={() => this.retryNotification(id)} outline size="xs" className="width-100 mb-xs mr-xs mt-1">Retry</Button>
    </div>,
    {...this.state.options,toastId: id}
    );
  }

  retryNotification = (id) =>  toast.update(id, {...this.state.options, render: 'Alien planet destroyed!', type: toast.TYPE.SUCCESS });

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">Messages - <span className="fw-semi-bold">Notifications</span>
        </h1>

        <Widget title={<h6> Messenger </h6>} close collapse settings>
          <Row>
            <Col lg="4" xs="12">
              <h5 className="m-t-1">Appointment availablility</h5>
              <p>There are few slots options available for booking. </p>
            </Col>

            <Col lg="4" xs="12">
              <h5 className="m-t-1">Notification</h5>
              <p>Different types of notifications.</p>
              <p><Button color="info" id="show-info-message" onClick={this.addInfoNotification}>Upcoming
                </Button></p>
              <p><Button color="danger" id="show-error-message" onClick={this.addErrorNotification}>Pending task: Must check</Button></p>
              <p><Button
                color="success" id="show-success-message" onClick={this.addSuccessNotification}
              >Vaccine Done</Button></p>
            </Col>

            <Col lg="4" xs="12">
              <h5 className="m-t-1">Questionaire</h5>
              <p>Just answer a few questions to get updates for after effects of COVID:</p>
              <pre className={s.notificationsCode}><code>{'Question: Are you feeling any nausea");'}</code></pre>
              <pre className={s.notificationsCode}>
                <code>{'Question: Any hike in body temperature.'}
                </code>
              </pre>
            </Col>
          </Row>
        </Widget>
      </div>
    );
  }
}

export default Notifications;
