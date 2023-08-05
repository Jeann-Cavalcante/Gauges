import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Gauges from "../../components/Gauges";
import { styles } from "./styles";
import Appointments from "../../components/Appointments";


const Home = () => {


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.dp}>
          <Text style={styles.title}>Desempenho pessoal</Text>

          <View style={styles.containerGauges}>
            <Gauges titleLabel="PONTUAÇÃO MÉDIA" value={2.5} />
            <Gauges titleLabel="EXECUÇÃO" value={85} />
            <Gauges titleLabel="DESEMPENHO MÉDIO" value={40} />
          </View>
        </View>

        <View style={styles.dp}>
          <Text style={styles.title}>
            Nos ultimo comitê você fez{" "}
            <Text style={{ fontSize: 28, color: "#FF9901" }}>6</Text> Pontos
          </Text>

          <View style={styles.containerGauges}>
            <Gauges titleLabel="PONTUAÇÃO MÉDIA" value={2.5} />
            <Gauges titleLabel="EXECUÇÃO" value={85} />
            <Gauges titleLabel="DESEMPENHO MÉDIO" value={40} />
          </View>
        </View>

        <Appointments />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;