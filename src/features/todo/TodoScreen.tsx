import {SafeAreaView, View, StyleSheet} from 'react-native';
import React from 'react';
import {useTodoScreen} from './viewModels/useTodoScreen';
import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamList} from '../../App';
import Typography from '../../components/Typography';
import CircularButton from '../../components/CircularButton';

const TodoScreen = () => {
  const {
    params: {id},
  } = useRoute<NativeStackScreenProps<ParamList, 'Todo'>['route']>();
  const {
    data: {todo},
    operations: {goBack},
  } = useTodoScreen(id);
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <CircularButton variant="back" style={styles.button} onPress={goBack} />
        <Typography variant="title" text={todo?.title ?? ''} />
      </View>
      <View style={styles.content}>
        <Typography
          variant="button"
          text="Description :"
          style={styles.subtitle}
        />
        <Typography variant="paragraph" text={todo?.description ?? ''} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 6,
    marginBottom: 6,
  },
  button: {
    marginRight: 6,
  },
  content: {
    padding: 6,
  },
  subtitle: {
    marginBottom: 6,
  },
});

export default TodoScreen;
