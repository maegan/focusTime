import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { myColors } from '../utils/myColors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Focus = ({ addSubject} ) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
          theme={{
            colors: { primary: myColors.sienna}
          }}
        />
        <View style={styles.button} >
        <RoundedButton  title="+" size={50} 
        onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
   // by taking out this flex line we let it use the amount of space it needs to grow
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
    backgroundColor: myColors.offWhite,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
   
  },
});
