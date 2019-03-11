import React from 'react';
import {ScrollView, View ,Text } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(    
            <ScrollView>    
            <View>
                <Text >Welcome</Text> 
            </View>
        </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}



export default connect(mapStateToProps)(Home);
