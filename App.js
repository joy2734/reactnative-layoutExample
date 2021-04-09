import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList} from "react-native";

class LayoutExample extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                  <View style={styles.leftTop}>
                    <View style={styles.a}><Text>A</Text></View>
                    <View style={styles.b}><Text>B</Text></View>
                  </View>
                  <View style={styles.c}>
                    <Text>C</Text>
                  </View>
                </View>
                <View style={styles.bottom}>
                  <View style={styles.d}></View>
                  <View style={styles.bottomRight}>
                    <View style={styles.e}>
                      <Text>D</Text>
                    </View>
                    <View style={styles.lastBox}>
                      <View style={styles.f}><Text>F</Text></View>
                      <View style={styles.g}><Text>G</Text></View>
                    </View>
                  </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    a:{
      flex: 1
    },  
    container:{
      flex: 1,
      flexDirection: "column"
    },
    top:{
      flex: 2,
      flexDirection: "row"
    },
    leftTop:{
      flex: 1,
      flexDirection: "column"
    },
    bottom:{
      flex: 1,
      flexDirection: "row"
    },
    bottomRight:{
      flex: 3,
      flexDirection: "row"
    },
    lastBox:{
      flex: 1,
      flexDirection: "column"
    },
    a:{
      flex: 1,
      borderColor: "red",
      borderWidth: 1
    },
    b:{
      flex: 3,
      borderColor: "green",
      borderWidth: 1
    },
    c:{
      flex: 3,
      borderColor: "black",
      borderWidth: 1
    },
    d:{
      flex: 1,
      borderColor: "blue",
      borderWidth: 1
    },
    e:{
      flex: 3,
      borderColor: "yellow",
      borderWidth: 1
    },
    f:{
      flex: 1,
      borderColor: "gray",
      borderWidth: 1
    },
    g:{
      flex: 1,
      borderColor: "pink",
      borderWidth: 1
    }

    // left:{
    //     flex: 1,
    //     flexDirection: "column",
    //     backgroundColor: "red",
    //     alignItems:"flex-start",
    //     width: "50%"
    // },
    // right:{
    //     flex: 1,
    //     flexDirection: "column",
    //     borderColor: "#0b64ca",
    //     alignItems:"flex-end",
    //     borderWidth: 1,
    //     width: "50%"
    // },
    // rightDown:{
    //     flex: 1,
    //     flexDirection: "row",
    //     backgroundColor: "#0b64cd",
    //     borderColor: "#0b64cd",
    //     borderWidth: 1
    // },
    // lastBox:{
    //     flex: 1,
    //     flexDirection: "column",
    //     backgroundColor: "#0b64ce",
    // }
});

export default LayoutExample;