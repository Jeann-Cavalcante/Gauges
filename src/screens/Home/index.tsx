import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Gauges from "../../components/Gauges";
import { styles } from "./styles";
import Appointments from "../../components/Appointments";
import Pie from "../../components/Pie";
import Tabs from "../../components/Tabs";
import { useState } from "react";
import Menu from "../../components/Menu";

const Home = () => {
  const [active, setActive] = useState("pessoal" as "pessoal" | "departamento");

  const handleActive = (active: "pessoal" | "departamento") => {
    setActive(active);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Menu />
      <ScrollView style={styles.container}>
        <Tabs handleActive={handleActive} active={active} />
        <View style={styles.containerGauges}>
          <Text style={styles.title}>Desempenho pessoal</Text>

          <View style={styles.contentGauges}>
            <Gauges titleLabel="PONTUAÇÃO MÉDIA" value={2.5} />
            <Gauges titleLabel="EXECUÇÃO" value={85} />
            <Gauges titleLabel="DESEMPENHO MÉDIO" value={40} />
          </View>
        </View>

        <View style={styles.containerPie}>
          <View style={styles.pies}>
            <Pie title="ASSUMIDOS" value={"19"} />
            <Pie title="REALIZADOS" value={"10"} />
            <Pie title="PONTOS" value={"26/63"} />
          </View>

          <View style={styles.containerLegend}>
            <View style={styles.legend}>
              <Text
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: "#009E53",
                }}
              ></Text>
              <Text style={styles.legendText}>Alto Impacto</Text>
            </View>

            <View style={styles.legend}>
              <Text
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: "#FF9901",
                }}
              ></Text>
              <Text style={styles.legendText}>Médio Impacto</Text>
            </View>

            <View style={styles.legend}>
              <Text
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: "#FD4233",
                }}
              ></Text>
              <Text style={styles.legendText}>Baixo Impacto</Text>
            </View>
          </View>
        </View>

        <View style={styles.containerGauges}>
          <Text style={styles.title}>
            Nos ultimo comitê você fez{" "}
            <Text style={{ fontSize: 28, color: "#FF9901" }}>6</Text> Pontos
          </Text>

          <View style={styles.contentGauges}>
            <Gauges titleLabel="PONTUAÇÃO MÉDIA" value={2.5} />
            <Gauges titleLabel="EXECUÇÃO" value={85} />
            <Gauges titleLabel="DESEMPENHO MÉDIO" value={29} />
          </View>
        </View>

        <Appointments />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;