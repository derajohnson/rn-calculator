import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
} from 'react-native';

import colors from '../display/colors';

const Main = props => {
  const [inputText, setInputText] = useState ('0');
  const [operator, setOperator] = useState ('');
  const [number, setNumber] = useState ('');
  const [multiply, setMultiply] = useState ('');
  const [clearBtn, setClearBtn] = useState ('AC');

  const handleNine = () => {
    if (inputText === '0') {
      setInputText ('9');
      setClearBtn ('C');
    } else {
      setInputText (previousState => previousState + '9');
      setClearBtn ('C');
    }
  };

  const handleEight = () => {
    if (inputText === '0') {
      setInputText ('8');
      setClearBtn ('C');
    } else {
      setInputText (previousState => previousState + '8');
      setClearBtn ('C');
    }
  };

  const handleSeven = () => {
    if (inputText === '0') {
      setInputText ('7');
      setClearBtn ('C');
    } else {
      setInputText (previousState => previousState + '7');
      setClearBtn ('C');
    }
  };
  const handleSix = () => {
    if (inputText === '0') {
      setInputText ('6');
      setClearBtn ('C');
    } else {
      setInputText (previousState => previousState + '6');
      setClearBtn ('C');
    }
  };

  const handleFive = () => {
    if (inputText === '0') {
      setInputText ('5');
      setClearBtn ('C');
    } else {
      setInputText (previousState => previousState + '5');
      setClearBtn ('C');
    }
  };

  const handleFour = () => {
    if (inputText === '0') {
      setInputText ('4');
      setClearBtn ('C');
    } else {
      setInputText (previousState => previousState + '4');
      setClearBtn ('C');
    }
  };

  const handleThree = () => {
    if (inputText === '0') {
      setInputText ('3');
      setClearBtn ('C');
    } else {
      setInputText (previousState => previousState + '3');
      setClearBtn ('C');
    }
  };

  const handleTwo = () => {
    if (inputText === '0') {
      setInputText ('2');
      setClearBtn ('C');
    } else {
      setInputText (previousState => previousState + '2');
      setClearBtn ('C');
    }
  };
  const handleOne = () => {
    if (inputText === '0') {
      setInputText ('1');
      setClearBtn ('C');
    } else {
      setInputText (previousState => previousState + '1');
      setClearBtn ('C');
    }
  };

  const handleZero = () => {
    if (inputText === '0') {
      setInputText ('0');
    } else {
      setInputText (previousState => previousState + '0');
      setClearBtn ('C');
    }
  };

  const handleDecimal = () => {
    if (inputText.includes ('.')) {
      setInputText (previousState => previousState);
    } else {
      setInputText (previousState => previousState + '.');
    }
  };

  const handleClear = () => {
    setInputText ('0');
    setClearBtn ('AC');
  };

  //solve for percentage
  const percentage = () => {
    let number = Number (inputText);
    let newInput = number / 100;
    return setInputText (newInput.toString ());
  };

  //solve for positive and negative

  const togglePositiveOrNegative = () => {
    let number = Number (inputText);
    if (Math.sign (number) === 1) {
      let value = number.toString ();
      setInputText ('-' + value);
    } else {
      if (Math.sign (number) === -1) {
        let value = Math.abs (number);
        let stringValue = value.toString ();
        setInputText (stringValue);
      }
    }
  };

  const handleAddition = () => {
    setOperator ('+');
    let add = inputText;
    setNumber (add);
    setInputText ('0');
  };

  const handleMultiplication = () => {
    setOperator ('*');
    let multiply = inputText;
    setNumber (multiply);
    setInputText ('0');
  };

  const handleDivision = () => {
    setOperator ('/');
    let divide = inputText;
    setNumber (divide);
    setInputText ('0');
  };

  const handleMinus = () => {
    setOperator ('-');
    let minus = inputText;
    setNumber (minus);
    setInputText ('0');
  };

  const handleEquals = () => {
    let input = number + operator + inputText;
    let calculatedString = eval (input);
    let answer = calculatedString.toString ();
    setInputText (answer);
  };

  return (
    <View style={styles.container}>

      {inputText.length >= 6
        ? <TextInput
            style={styles.input2}
            defaultValue={inputText}
            editable={false}
            onChangeText={text => setInputText (text)}
          />
        : <TextInput
            style={styles.input}
            defaultValue={inputText}
            editable={false}
            onChangeText={text => setInputText (text)}
          />}

      <View style={styles.inputBtn}>
        <TouchableHighlight style={styles.btn} onPress={handleClear}>
          <Text style={styles.text}>{clearBtn}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btn}
          onPress={togglePositiveOrNegative}
        >
          <Text style={styles.text}>+/-</Text>

        </TouchableHighlight>
        <TouchableHighlight style={styles.percentage} onPress={percentage}>
          <Text style={styles.text}>%</Text>

        </TouchableHighlight>
        <TouchableHighlight style={styles.operator2} onPress={handleDivision}>
          <View>
            <Text style={styles.num}>/</Text>
          </View>

        </TouchableHighlight>

      </View>
      <View style={styles.inputBtn}>
        <TouchableHighlight style={styles.number} onPress={handleSeven}>
          <Text style={styles.num}>7</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.number} onPress={handleEight}>
          <Text style={styles.num}>8</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.number} onPress={handleNine}>
          <Text style={styles.num}>9</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.operator2}
          onPress={handleMultiplication}
        >
          <View>
            <Text style={styles.num}>x</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.inputBtn}>
        <TouchableHighlight style={styles.number} onPress={handleFour}>
          <Text style={styles.num}>4</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.number} onPress={handleFive}>
          <Text style={styles.num}>5</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.number} onPress={handleSix}>
          <Text style={styles.num}>6</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.operator2} onPress={handleMinus}>
          <View>
            <Text style={styles.num}>-</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.inputBtn}>
        <TouchableHighlight style={styles.number} onPress={handleOne}>
          <Text style={styles.num}>1</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.number} onPress={handleTwo}>
          <Text style={styles.num}>2</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.number} onPress={handleThree}>
          <Text style={styles.num}>3</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.operator2} onPress={handleAddition}>
          <View>
            <Text style={styles.num}>+</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.inputBtn}>
        <TouchableHighlight style={styles.number} onPress={handleZero}>
          <Text style={styles.zero}>0</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.number} onPress={handleDecimal}>
          <Text style={styles.num}>.</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.operator2} onPress={handleEquals}>
          <Text style={styles.num}>=</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    marginTop: '30%',
  },
  input: {
    color: colors.text,
    fontSize: 90,
    fontWeight: '300',
    textAlign: 'right',
    marginRight: 20,
  },
  input2: {
    color: colors.text,
    fontSize: 65,
    fontWeight: '300',
    textAlign: 'right',
    marginRight: 20,
    marginTop: 39,
  },
  inputBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: colors.func,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 40,
    width: 80,
  },
  percentage: {
    backgroundColor: colors.func,
    paddingVertical: 20,
    paddingHorizontal: 27,
    borderRadius: 40,
  },
  number: {
    color: '#FFFFFF',
    backgroundColor: colors.secondary,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 40,
    marginTop: 10,
  },
  operator2: {
    color: '#FFFFFF',
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 40,
    marginTop: 10,
  },
  operators: {
    backgroundColor: colors.primary,
    padding: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 40,
  },
  text: {
    fontSize: 27,
    textAlign: 'center',
  },
  operatorText: {
    color: colors.text,
    fontSize: 27,
  },
  num: {
    color: colors.text,
    fontSize: 27,
    fontWeight: '500',
  },
  zero: {
    color: colors.text,
    fontSize: 27,
    width: 100,
    fontWeight: '500',
  },
});

export default Main;
