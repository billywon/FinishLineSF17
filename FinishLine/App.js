import React from 'react';
import { StyleSheet, Text, View, ScrollView, TabBarIOS, Image } from 'react-native';
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
      activeState: 'flights'
    }
  }

  renderProfile() {
    return (
      <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', marginTop: 100}}>
        <Text style={{margin: 10, fontSize: 20}}> Name : Brianne Jane </Text>
        <Image
          style={{width: 100, height: 100}}
          source={require('./Brianne.png')}
        />
        <Text style={{margin: 10, fontSize: 20}}> Age  : 38 </Text>
        <Text style={{margin: 10, fontSize: 20}}> TSA Precheck : true </Text>
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
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.2, backgroundColor: '#4A90E2', alignItems: 'center'}}>
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

        <TabBarIOS>
          <TabBarIOS.Item
            title='Flights'
            selected={this.state.activeState === 'flights'}
            onPress={() => {
              this.setState({
                activeState: 'flights'
              });
          }}>
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', padding: 10}}>
              <View style={{flex: 1}}>{this.renderCurrentFlight()}</View>
              <View style={{flex: 1}}>{this.renderFlights()}</View>
            </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Profile"
            selected={this.state.activeState === 'profile'}
            onPress={() => {
              this.setState({
                activeState: 'profile'
              });
          }}>
            <View>{this.renderProfile()}</View>
          </TabBarIOS.Item>
        </TabBarIOS>
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
