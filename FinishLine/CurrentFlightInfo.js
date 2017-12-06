import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import PropTypes from 'prop-types';

class CurrentFlightInfo extends React.Component {
  static propTypes = {
    month: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    departure: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
  }

  viewDetails() {

  }

  render() {
    const {month, date, dayOfWeek, departure, destination} = this.props;

    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
        <View style={{flex: 0.8}}>
          <Text>Upcoming Flights</Text>
        </View>
        <View style={{marginBottom: 10, flex: 0.5, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 48, fontWeight: 'bold'}}>{date}</Text>
          <View style={{padding: 10, flex: 0.5, flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text>{month}</Text>
            <Text>{departure} -> {destination}</Text>
          </View>
        </View>
        {/* <View>
          <Button
            onPress={this.viewDetails}
            title="View details"
            color="transparent"
          />
        </View> */}
      </View>
    )
  }
}

export default CurrentFlightInfo;