import React from 'react';
import { StyleSheet, Text, View} from 'react-native'
import { connect } from 'react-redux';
//import {profile} from '../actions';
import { StackActions,NavigationActions } from 'react-navigation';

class Splash extends React.Component{
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        setTimeout(this.validateUser,
            5000
        );
    }
    
    validateUser = ()=>{
        const {dispatch} = this.props;
        const loggedInAction = NavigationActions.navigate({
            routeName: 'drawerStack',
        });
        dispatch(loggedInAction);
    }

    
    
    render(){  
        return (
                <View style={styles.container}>
                    <Text style={styles.OnlineTitle}>Splash</Text>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }
});

function mapStateToProps(state) {
    return {
        token: state.token
    };
}



export default connect(mapStateToProps)(Splash);
