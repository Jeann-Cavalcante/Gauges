import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { PropsTabs } from "../../types/Props";

const Tabs = ({ active, handleActive }: PropsTabs) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          active == "pessoal" && { backgroundColor: "#004589" },
        ]}
        onPress={() => handleActive("pessoal")}
      >
        <Text style={[styles.text, active == "pessoal" && { color: "#fff" }]}>
          Pessoal
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          active == "departamento" && { backgroundColor: "#004589" },
        ]}
        onPress={() => handleActive("departamento")}
      >
        <Text
          style={[styles.text, active == "departamento" && { color: "#fff" }]}
        >
          Departamento
        </Text>
      </TouchableOpacity>
    </View>
  );
};



export default Tabs;