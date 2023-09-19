import { StyleSheet, Text, View } from "react-native";

const MyTextTest = (props) =>{
    return(<View>
        <Text style={StyleSheet.create(
            {
                fontSize: 30,
                color: 'red',
                fontWeight: 'bold',
                
            }
        )}>
            {props.noidungText}
        </Text>
    </View>);
}
export default MyTextTest;