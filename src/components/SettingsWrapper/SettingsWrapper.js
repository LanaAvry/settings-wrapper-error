import React from 'react';
import './SettingsWrapperStyle.scss';
import PropTypes from 'prop-types';

export default class SettingsWrapper extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isSettingOn: props.isSettingOn || true
    };

    this.deleteSettings = this.deleteSettings.bind(this);
  }

  deleteSettings (e) {
    this.setState({
      isSettingOn: false
    });
  }
  render () {
    return (
      <div className='settings_grid'>
      <div className='name_and_button'>
        <p>{this.props.name}</p>
        <button className='delete_device_settings'
          onClick={()=>this.props.deleteItem(this.props.id)}
        />
        </div>
        {this.props.children}
      </div>
    );
  }
}

SettingsWrapper.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  isSettingOn: PropTypes.bool,
  deleteItem: PropTypes.func.isRequired,
  children: PropTypes.any
};
