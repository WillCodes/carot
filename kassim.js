import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

import { useState } from 'react';

class Dog{

    hungry = false

    render() {
        return (
            <View
            style={{
              flexDirection: 'row',
              height: 100,
              padding: 20,
            }}>
            <View style={{backgroundColor: 'blue', flex: 0.3}} />
            <View style={{backgroundColor: 'red', flex: 0.5}} />
            <Text>Hello {name}</Text>
          </View>
        )
    }


}


const SelectGender = ({name, age, sex}) => {

    const [gender, setGender] = useState(undefined)
    const [age, setAge] = useState(0)

    return (
        <View>
    <Button text={"male"} onPress={() => setGender("male")}/>
    <Button text={"female"} onPress={() => setGender("female")}/>
    <Button text={"other"} onPress={() => setGender("other")}/>


    <TextInput setAge={setAge}>Enter your age</TextInput>
        </View>

  );
};

export default ViewBoxesWithColorAndText;
