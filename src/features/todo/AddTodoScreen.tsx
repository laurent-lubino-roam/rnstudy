import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import useAddTodoScreen from './viewModels/useAddTodoScreen';

const AddTodoScreen = () => {
  const {
    operations: {handleAddTodo},
  } = useAddTodoScreen();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  return (
    <View style={styles.container}>
      <Typography variant="title" text="Add Todo" />
      <Typography variant="button" text="Title :" />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="title"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.title && <Text>This is required.</Text>}
      <Typography variant="button" text="Description :" />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="description"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline
          />
        )}
      />
      {errors.description && <Text>This is required.</Text>}
      <Button title="Submit" onPress={handleSubmit(handleAddTodo)} />
    </View>
  );
};

export default AddTodoScreen;

const styles = StyleSheet.create({
  container: {padding: 6},
  input: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 6,
  },
});
