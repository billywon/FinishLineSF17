import React from 'react';
import { StyleSheet, Text, View, ScrollView, TabBarIOS } from 'react-native';
import PropTypes from 'prop-types';

class FlightInfo extends React.Component {
  static propTypes = {
    month: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    departure: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
  }

  render() {
    const {month, date, dayOfWeek, departure, destination} = this.props;

    return (
      <View style={{
          marginBottom: 10, 
          flex: 1, 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          borderWidth: 1, 
          borderBottomColor: 'lightgray'
      }}>
        <Text style={{fontSize: 48, fontWeight: 'bold'}}>{date}</Text>
        <View style={{padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text>{month}</Text>
          <Text>{departure} -> {destination}</Text>
        </View>
      </View>
    )
  }
}

export default FlightInfo;