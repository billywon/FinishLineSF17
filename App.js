import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Button, Platform, DatePickerIOS, TabBarIOS } from 'react-native';

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
      }],
      mileage: false,
      reservations: false,
      date: new Date(2017, 12, 5),
      selectedTab: 'welcome'
    },
    this.changeFlight = this.changeFlight.bind(this);
  }

  changeFlight(flight) {
    this.setState({
      current: flight
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<View style={{flex: 1, backgroundColor: 'powderblue', padding: 10}}>
          <View style={{flex: 1, margin: 20}}>
            <Text>
              Big Blue Airlines
            </Text>
          </View>
          <View style={{flex: 4}}>
            <Text style={{ fontSize: 20 }}> Welcome, Brianne! </Text>
            {/*photo*/}
            <Button title="Check Mileage" onPress={() => this.setState({
              mileage: !this.state.mileage
              })}
            />
            { this.state.mileage ? <Text> 500,000 miles </Text> : null}
            <Button title="Check Reservations" onPress={() => this.setState({
              reservations: !this.state.reservations
              })} /> 
            { this.state.reservations ? <Text> still loading... </Text> : null}
            <Button title="Get Our Mileage Program" />
          </View>
        </View>*/}
{/*        <View style={{flex: 1}}>
          {Platform.OS === 'ios' ? 
            <DatePickerIOS
              style={{ height: 150 }}
              date={this.state.date} onDateChange={(date)=>this.setState({date})}
              mode="date"
            />
           :
           <View />
          }
        </View>*/}
{/*        <View style={{flex: 1, backgroundColor: 'steelblue'}}>
          <Text> Flight Number : {this.state.current.number} </Text>
          <Text> Departure : {this.state.current.departure} </Text>
          <Text> Destination : {this.state.current.destination} </Text>
          <Text> Boarding Time : {this.state.current.boarding} </Text>
          <Text> Arrival Time : {this.state.current.arrival} </Text>
          <Text> Status : {this.state.current.status} </Text>
        </View>*/}
{/*        <View style={{width: 300, height: 300}}>
          <ScrollView>
            <FlightList flights={this.state.flights} changeFlight={this.changeFlight}/>
          </ScrollView>
        </View>*/}

     <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'welcome'}
          icon={{uri:'featured'}}
          onPress={() => {
              this.setState({
                  selectedTab: 'welcome',
              });
          }}>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'more'}
          icon={{uri:'contacts'}}
          onPress={() => {
                this.setState({
                    selectedTab: 'more',
                });
          }}>
        </TabBarIOS.Item>
      </TabBarIOS>
      </View>
    );
  }
}

const FlightList = (props) => (
  <View style={styles.flight}>
    {props.flights.map(flight => <FlightListItem key={flight.number} flight={flight} changeFlight={props.changeFlight} />)}
  </View>
)

const FlightListItem = (props) => (
  <TouchableHighlight onPress={() => {props.changeFlight(props.flight)}}>
    <View>
      <Text> Flight Number : {props.flight.number} </Text>
      <Text> Departure : {props.flight.departure} </Text>
      <Text> Destination : {props.flight.destination} </Text>
      <Text> Boarding Time : {props.flight.boarding} </Text>
      <Text> Arrival Time : {props.flight.arrival} </Text>
      <Text> Status : {props.flight.status} </Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  flight: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  toolBar: {
    flex: 2,
    backgroundColor: '#3B3B3B',
  }
});
