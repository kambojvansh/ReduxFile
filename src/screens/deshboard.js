import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Deshboard extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 3, backgroundColor: 'white', marginVertical: 1 }}>
                </View>
                <View style={{
                    flex: 2,
                    marginVertical: 1,
                    flexDirection: 'row',
                }}>
                    <View style={{ flex: 1, backgroundColor: 'white', marginRight: 1 }}>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white', marginLeft: 1 }}>
                    </View>
                </View>
                <View style={{ flex: 5, backgroundColor: 'white', marginVertical: 1 }}>
                </View>

            </View>
        )
    }
}
export default Deshboard