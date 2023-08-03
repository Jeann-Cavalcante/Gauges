import { SafeAreaView, Text, View } from "react-native";
import Gauges from "../../components/Gauges";
import { styles } from "./styles";


const Home = () => {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dp}>
        <Text style={styles.title}>Desempenho pessoal</Text>

        <View style={styles.containerGauges}>
          <Gauges titleLabel="PONTUAÇÃO MÉDIA" value={2.5} />
          <Gauges titleLabel="EXECUÇÃO" value={85} />
          <Gauges titleLabel="DESEMPENHO MÉDIO" value={40} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;