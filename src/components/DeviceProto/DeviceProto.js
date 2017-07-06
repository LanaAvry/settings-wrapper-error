import React, { Component } from 'react';
import './index.scss';
import { bindActionCreators } from 'redux';
import LineChart from '../LineChart/LineChart';
import { deleteItem } from '../../actions/deviceProtoActions';
import { connect } from 'react-redux';
import { DeviceItems } from '../DeviceItems/DeviceItems.js';

const width = {
  width:'600px'
};

class DeviceProto extends Component {
  render () {
    // const {name, location, items} = this.props.deviceProto;
    return (
        <div style={width} className='DeviceProto'>
          <p>{this.props.deviceProto.name}</p>
          <DeviceItems 
            deviceProto={this.props.deviceProto}
            deleteItem={this.props.deleteItem}  
          />
        </div>
    );
  }
}

function mapStateToProps (store) {
  return {
    deviceProto: store.deviceProto
  };
}
function mapDispatchToProps (dispatch) {
  return {
    deleteItem: bindActionCreators(deleteItem, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DeviceProto);
