import { styles } from "./styles";
import { View, Image } from "react-native";
import { Fontisto } from '@expo/vector-icons'; 

const Menu = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/logo.png")}
      />

      <Fontisto name="nav-icon-a" size={30} color="white" />
    </View>
  );
}

export default Menu;