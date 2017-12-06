import React from 'react';
import { StyleSheet, Text, View, ScrollView, TabBarIOS } from 'react-native';
import FlightInfo from './FlightInfo.js';
import CurrentFlightInfo from './CurrentFlightInfo.js';

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
        status: 'on time',
        date: 6,
      },
      flights: [{
        number: 'BBA019',
        departure: 'OAK',
        destination: 'LAX',
        boarding: '10:00',
        arrival: '14:30',
        status: 'delayed',
        date: 10,
      }, {
        number: 'BBA018',
        departure: 'SFO',
        destination: 'LAX',
        boarding: '10:15',
        arrival: '11:45',
        status: 'on time',
        date: 13,
      }, {
        number: 'BBA020',
        departure: 'SJC',
        destination: 'LAX',
        boarding: '13:00',
        arrival: '14:30',
        status: 'on time',
        date: 16,
      }],
      activeState: 'flights',
    }
  }

  renderProfile() {
    return (
      <View style={{backgroundColor: 'powderblue'}}>
        <Text> User Profile </Text>
        <Text> Name : Brianne Jane </Text>
        <Text> Age  : 38 </Text>
        <Text> TSA Precheck : true </Text>
      </View>
    );
  }

  renderCurrentFlight() {
    return (
      <CurrentFlightInfo 
        month="December"
        date={this.state.current.date} 
        departure={this.state.current.departure} 
        destination={this.state.current.destination} 
      />
    );
  }

  renderFlights() {
    return (
      <ScrollView>
        <FlightList flights={this.state.flights} />
      </ScrollView>
    );
  }

  render() {
    var activeState = this.state.activeState;
    var main;
    switch (activeState) {
      case 'profile':
        main = this.renderProfile();
        break;
      case 'flights':
        main = (
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', padding: 10}}>
            <View>{this.renderCurrentFlight()}</View>
            <View>{this.renderFlights()}</View>
          </View>
        )
        break;
    }
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.1, backgroundColor: 'steelblue', alignItems: 'center'}}>
          <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{fontSize: 20, color: 'white'}}>Big Blue Airline</Text>
          </View>
        </View>
        <View style={{flex: 0.8}}>
          {main}
        </View>
        {/* <View style={{flex: 0.1}}>
          <TabBarIOS itemPositioning='center' tint='gray'>
            <TabBarIOS.Item systemIcon='bookmarks' title='Flights' onPress={() => this.setTab('flight')}/>
          </TabBarIOS>
        </View> */}
      </View>
    );
  }
}

const FlightList = (props) => (
  <View>
    {props.flights.map(flight => 
      <FlightInfo 
        month="December" 
        date={flight.date} 
        departure={flight.departure} 
        destination={flight.destination} 
        key={flight.number}
      />
    )}
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 2,
  },
  flight: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
  }
});
