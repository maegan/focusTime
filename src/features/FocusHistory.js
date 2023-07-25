import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { myColors } from '../utils/myColors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {

  if (!history || !history.length) return null;

  const renderItem = ({item}) => <Text style={styles.item}> - {item}</Text>

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Things we focused on:</Text>
    <FlatList 
    data = {history}
    renderItem={renderItem}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,  // by applying this it not only takes the space it needs, it's also scrollable
  },
  item: {
    color: myColors.sienna,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
  },
  title: {
    color: myColors.offWhite,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  }

})