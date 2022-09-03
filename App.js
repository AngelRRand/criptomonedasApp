import { View, Image } from 'react-native';
import styles from './styles/App';
import Header from './src/Header';
import Form from './src/Header';
import Cot from './src/Header';

export default function App() {
  return (
    <>

      <Header/> 
      <Image
        source={{uri:'https://i.postimg.cc/mg4P1LFD/cryptomonedas.png'}}
        style={styles.imagen}

      /> 
    </> 
  );
}
