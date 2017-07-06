import React from 'react';
import PropTypes from 'prop-types';
import './RangeStyle.scss';
import '../SettingsWrapper/SettingsWrapperStyle.scss';

export default class RangeSettings extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      value: 0
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      value: e.target.value
    });
    this.props.setDevice('range', e.target.value);
  }

  render () {
    const { max, min } = this.props;

    return (
        <input
          type='range'
          onChange={ this.onChange }
          min={min || 0}
          max={max || 100}
          step={1}
          defaultValue={0}
        />
    );
  }
}

RangeSettings.propTypes = {
  max: PropTypes.string,
  min: PropTypes.string,
  setDevice: PropTypes.func.isRequired,
  sendRangeValue: PropTypes.func.isRequired
};
