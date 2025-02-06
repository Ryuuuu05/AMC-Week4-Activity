import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'Morning',
    title: 'BREAKFAST',
  },
  {
    id: 'Morning',
    title: 'shower',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'watching youtube',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'watching tv',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'go to school',
  },
];

const DATA1 = [
   {
    id: 'Morning',
    title: 'playing computer',
  },
  {
    id: 'Morning',
    title: 'watching tutorial',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'matulog sa',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'go to toilet',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'go to home',
  },
];

const DATA2 = [
   {
    id: 'Morning',
    title: 'matulog',
  },
  {
    id: 'Morning',
    title: 'manood ng youtube',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'kumain ng prutas',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'kumain nang kumain',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'pakainin yung aso',
  },
];

const DATA3 = [
   {
    id: 'Morning',
    title: 'maglaro ng games',
  },
  {
    id: 'Morning',
    title: 'magbasketball',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'mag encode',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'manood ng tutorial',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'mag workout',
  },
];

const DATA4 = [
   {
    id: 'Morning',
    title: 'play basketball',
  },
  {
    id: 'Morning',
    title: 'play table tennis',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'play soccer',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'play tennis',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'play pingpong',
  },
];
const Item = ({ title, onPress }: ItemProps) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);


const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>MORNING</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
     <Text style={styles.title}>AFTERNOON</Text>
        <FlatList
        data={DATA1}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.title}>EVENING</Text>
             <FlatList
        data={DATA2}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.title}>BREAKTIME</Text>
             <FlatList
        data={DATA3}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.title}>SPORTS</Text>
      <FlatList
        data={DATA4}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>


  
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'pink',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
