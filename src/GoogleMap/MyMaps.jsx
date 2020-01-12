import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={ key:  }
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
                     //ВТОРОЙ ВАРИАНТ
      // <div style="overflow:hidden;width: 700px;position: relative;">
      //   <iframe width="700" height="440" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Armenia%2CYerevan+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
      //   </iframe>
      //   <div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;">
      //     <small style="line-height: 1.8;font-size: 2px;background: #fff;">
      //       Powered by 
      //       <a href="https://embedgooglemaps.com/ru/">
      //         embedgooglemaps RU
      //       </a> & 
      //       <a href="https://iamsterdamcard.it">iamsterdamcard</a>
      //     </small>
      //    </div>
      //    <style>#gmap_canvas img{max-width:none!important;background:none!important}
      //    </style></div><br />
    );
  }
}

export default SimpleMap;