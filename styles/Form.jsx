import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    height: '40%',
    backgroundColor:  '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical:10,
    marginHorizontal:20,
    borderRadius:5,
    elevation:2
  },
  text:{
    
    fontSize:22,
    color: '#272727'
  },
  btn: {
    height: 60,
    width: '100%',
    backgroundColor:'#030303',
    marginTop:20,
    justifyContent:'center',
    border:'#161616',
    borderWidth:1
    
  },
  btnText:{
    color: '#ffffff',
    fontSize:22,
    letterSpacing:3,
    textAlign:'center',
  }
})

export default styles