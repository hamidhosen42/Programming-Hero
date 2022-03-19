import React from 'react';
import DeviceDetail from '../DeviceDetail/DeviceDetail';

const Device = (props) => {
    return (
        <div>
            <h2>My Name is: {props.name}</h2>
            <DeviceDetail id={props.id}></DeviceDetail>
        </div>
    );
};

export default Device;