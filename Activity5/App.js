

import React, { useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'kumain',
    backgroundColor: 'red',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6b',
    title: 'maligo',
    backgroundColor: 'pink',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7c',
    title: 'matulog',
    backgroundColor: 'aqua',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7d',
    title: 'maglaro',
    backgroundColor: 'green',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7e',
    title: 'magbasketball',
    backgroundColor: 'violet',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7f',
    title: 'manood ng youtube',
    backgroundColor: 'magenta',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7g',
    title: 'workout',
    backgroundColor: 'aquamarine',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7h',
    title: 'maligo ulet',
    backgroundColor: 'gold',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7i',
    title: 'mag linis ng sala',
    backgroundColor: 'silver',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7j',
    title: 'maghugas ng pinggan',
    backgroundColor: 'pink',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7k',
    title: 'magpakain ng aso',
    backgroundColor: 'brown',
  },
  
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#00008B' : item.backgroundColor;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
