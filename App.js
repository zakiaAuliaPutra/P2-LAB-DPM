import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Animated, Dimensions } from 'react-native';

const App = () => {
  const screenWidth = Dimensions.get('window').width; 
  const animation = useRef(new Animated.Value(0)).current; 
  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.centerText, { transform: [{ translateX: animation }] }]}>
        Zakia Aulia Putra
      </Animated.Text>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', 
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default App;
