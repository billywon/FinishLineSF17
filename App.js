import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: {
        number: 'BBA017',
        departure: 'SFO',
        destination: 'LAX',
        boarding: '9:00',
        arrival: '10:30',
        status: 'on time'
      },
      flights: [{
        number: 'BBA019',
        departure: 'OAK',
        destination: 'LAX',
        boarding: '10:00',
        arrival: '14:30',
        status: 'delayed'
      }, {
        number: 'BBA018',
        departure: 'SFO',
        destination: 'LAX',
        boarding: '10:15',
        arrival: '11:45',
        status: 'on time'
      }, {
        number: 'BBA020',
        departure: 'SJC',
        destination: 'LAX',
        boarding: '13:00',
        arrival: '14:30',
        status: 'on time'
      }]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 300, height: 100, backgroundColor: 'powderblue', padding: 10}}>
          <Text> User Profile </Text>
          <Text> Name : Brianne Jane </Text>
          <Text> Age  : 38 </Text>
          <Text> TSA Precheck : true </Text>
        </View>
        <View style={{width: 300, height: 130, backgroundColor: 'steelblue', padding: 10}}>
          <Text> Flight Number : {this.state.current.number} </Text>
          <Text> Departure : {this.state.current.departure} </Text>
          <Text> Destination : {this.state.current.destination} </Text>
          <Text> Boarding Time : {this.state.current.boarding} </Text>
          <Text> Arrival Time : {this.state.current.arrival} </Text>
          <Text> Status : {this.state.current.status} </Text>
        </View>
        <View style={{width: 300, height: 300}}>
          <ScrollView>
            <FlightList flights={this.state.flights} />
           </ScrollView>
        </View>
      </View>
    );
  }
}

const FlightList = (props) => (
  <View>
    {props.flights.map(flight => <FlightListItem key={flight.number} flight={flight} />)}
  </View>
)

const FlightListItem = (props) => (
  <View style={styles.flight}>
    <Text> Flight Number : {props.flight.number} </Text>
    <Text> Departure : {props.flight.departure} </Text>
    <Text> Destination : {props.flight.destination} </Text>
    <Text> Boarding Time : {props.flight.boarding} </Text>
    <Text> Arrival Time : {props.flight.arrival} </Text>
    <Text> Status : {props.flight.status} </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flight: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
});
