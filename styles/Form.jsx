import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    backgroundColor:  '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
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
    height: 40,
    width: 120,
    backgroundColor:'#ffdb3c',
    marginTop:20,
    justifyContent:'center',
    borderRadius:10,
    border:'#161616',
    borderWidth:1
    
  },
  btnText:{
    color: '#161616',
    fontSize:18,
    textAlign:'center',
  }
})

export default styles