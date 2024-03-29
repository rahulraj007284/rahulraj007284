import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputGroup, Icon } from 'patternfly-react';
import { Popover } from '@patternfly/react-core';
import TimeInput from './TimeComponents/TimeInput';

class TimePicker extends React.Component {
  getDateFromTime = time => {
    if (Date.parse(time)) {
      return new Date(time);
    }
    return new Date(`1/1/1 ${time}`);
  };
  state = {
    value: this.getDateFromTime(this.props.value),
  };
  formatDate = () => {
    const { locale } = this.props;
    const { value } = this.state;
    const options = { hour: 'numeric', minute: 'numeric' };
    return value.toLocaleString(locale, options);
  };
  setSelected = date => {
    if (Date.parse(date)) {
      const newDate = new Date(date);
      this.setState({ value: newDate });
    } else if (Date.parse(`1/1/1 ${date}`)) {
      const newDate = new Date(`1/1/1 ${date}`);
      this.setState({ value: newDate });
    }
  };
  render() {
    const { locale } = this.props;
    const popover = (
      <div
        className="row bootstrap-datetimepicker-widget timepicker-sbs"
        id="popover-date-picker"
      >
        <ul className="list-unstyled">
          <li className="picker-switch accordion-toggle">
            <table className="table-condensed">
              <tbody>
                <tr />
              </tbody>
            </table>
          </li>
          <li>
            <TimeInput
              time={this.state.value}
              setSelected={this.setSelected}
              locale={locale}
            />
          </li>
        </ul>
      </div>
    );
    return (
      <div>
        <Popover bodyContent={popover}>
          <InputGroup className="input-group date-time-picker-pf">
            <FormControl
              aria-label="date-time-picker-input"
              type="text"
              value={this.formatDate()}
              onChange={e => this.setSelected(e.target.value)}
            />
            <InputGroup.Addon className="date-picker-pf">
              <Icon type="fa" name="clock-o" />
            </InputGroup.Addon>
          </InputGroup>
        </Popover>
      </div>
    );
  }
}

TimePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  locale: PropTypes.string,
};
TimePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
};
export default TimePicker;
