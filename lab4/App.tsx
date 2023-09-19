/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { Component, PropsWithChildren } from 'react';
import MyTextTest from './Text_Test';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  ToastAndroid,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
  myState?: any;

}>;


function Section({ children, title, myState }: SectionProps): JSX.Element {

  const [myState1, setMyState1] = useState('bam 2');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState<any>([
    { key: 'Devin', sdt: '034884' },
    { key: 'Dan', sdt: '034884' },
    { key: 'Dominic', sdt: '034844' },
    { key: 'Jackson', sdt: '034384' },

  ])

  const isDarkMode = useColorScheme() === 'dark';
  function updateButton() {
    if (myState1 == 'bam 2') {
      setMyState1('bam 4')

    }
    else {
      setMyState1('bam 2')
    }

  }
  function AddItem() {
    let _data = [...data]; // tạo ra biến _data clone lại giá trị của biến data
    _data.push({ key: 'Quan', sdt: '034884' })
    setData(_data)
  }
  function DeleteItem() {
    let _data = [...data];
    _data.splice(0, 1);
    setData(_data);

  }
  function SubmitGmail() {
    if (email.length == 0 || password.length == 0) {
      
      Alert.alert(title='Thông Báo','Không để trống email hoặc password')
    }
    else {
      const Regexemail = /^\S+@\S+\.\S+$/;
      const Regexpassword = /^\d{8,}$/;
      if (!Regexemail.test(email)) {
        Alert.alert(title='Thông Báo','Email không đúng định dạng')
      }
      else if(!Regexpassword.test(password)){
        Alert.alert(title='Thông Báo','Mật khẩu phải có ít nhất 8 ký tự')
      }
      else {
        let _data = [...data];
        _data.push({ key: email, sdt: password })
        setData(_data)
        setEmail('')
        setPassword('')
        ToastAndroid.show('Submit thành công',2);
      }
    }







  }



  // useEffect(() => {
  //   setTimeout(() => {
  //     setMyState1('bam 3')
  //   }, 3000)
  // }, [])

  return (

    <View style={styles.sectionContainer}>

      <Text
        style={styles.colorText}>
        Hello,My Name Is Quan {myState}
      </Text>

      < Button
        onPress={() => updateButton()}
        title="Click Here"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <MyTextTest noidungText='Code Lab 2' />
      <View style={styles.Viewbox}>
        <View style={styles.redbox} />
        <View style={styles.bluebox} />
        <View style={styles.yellowbox} />

      </View>

      <Text
        style={[

          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
            fontSize: 30,
          },
        ]}>
        Hello Toi Ten La Quan Rat Vui Duoc Gap Ban {myState1}
      </Text>
      <Text style={{ color: 'red', fontSize: 30, fontWeight: 'bold' }}>Code Lab 4</Text>
      <View >
        <TextInput placeholder='Nhập gmail của bạn' style={styles.TextInput}
          onChangeText={(text) => setEmail(text)}
          value={email}



        />
        <TextInput placeholder='Nhập mật khẩu' style={styles.TextInput}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry = {true}
        />

      </View>
      <View style={{ marginTop: 10, width: 200, height: 40 }}>
        <Button
          onPress={() => SubmitGmail()}
          title='Submit'
          color="pink"
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => String(index)} // trong Flatlist luôn có keyExtractor (keyExtractor: là 1 giá trị duy nhất) để tối uy hiệu năng của app
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('' + item.key + '-' + item.sdt)

              }}
            >
              <SafeAreaView>
                <View style={{ flexDirection: 'row', backgroundColor: 'red' }}>
                  <Text style={styles.item}>{item.key}-

                  </Text>
                  <Text style={styles.item}>{item.sdt}

                  </Text>
                </View>
              </SafeAreaView>
            </TouchableOpacity>


          }
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <View style={{ marginLeft: 20, width: 100, height: 40 }}>
          < Button
            onPress={() => AddItem()}
            title="Add"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"

          />
        </View>
        <View style={{ marginLeft: 20, width: 100, height: 40 }} >
          < Button
            onPress={() => DeleteItem()}
            title="Delete"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>







    </View>
  );
}




class App extends Component {
  // constructor(props: any) {

  //   super(props);
  //   this.state = {
  //     myState: 'bam 1'
  //   }

  // }


  render() {
    return (

      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <ScrollView
          // contentInsetAdjustmentBehavior="automatic"
          style={{ backgroundColor: 'white' }}>
          <Header />
          <View
            style={{
              backgroundColor: Colors.white,
            }}>
            <Section title="Step One" options={''} >
              Edit <Text style={styles.highlight}>Quan Quan</Text> to change this
              screen and then come back to see your edits.
            </Section>
            {/* <Section title="See Your Changes" options={''}>
              <ReloadInstructions />
            </Section>
            <Section title="Debug" options={''}>
              <DebugInstructions />
            </Section>
            <Section title="Learn More" options={''}>
              Read the docs to discover what to do next:
            </Section> */}
            {/* <LearnMoreLinks /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    // height: '100%',
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',


  },
  TextStyles: {
    fontSize: 20
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  colorText: {
    color: 'red'
  },
  Viewbox: {
    marginTop: 20,
    flexDirection: 'row',

  },
  redbox: {
    flex: 1,
    width: 60,
    height: 60,
    backgroundColor: 'red',
  }
  ,
  bluebox: {
    flex: 3,
    width: 60,
    height: 60,
    backgroundColor: 'blue',
  }
  ,
  yellowbox: {
    flex: 1,
    width: 60,
    height: 60,
    backgroundColor: 'yellow',


  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  TextInput: {
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 2,
    width: 300,
    height: 40,
    marginTop: 10,

  }
});

export default App;
