import {Text, View } from "react-native";

import RNSpeedometer from "react-native-speedometer";
import styles from "./styles";
import { PropsGauges } from "../../types/Props";

const Gauges = ({ value, titleLabel }: PropsGauges) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titleLabel.split(" ").join('\n')}</Text>
      <RNSpeedometer
        value={value}
        size={100}
        minValue={0}
        maxValue={80}
        allowedDecimals={0}
        labels={[
          {
            name: "Low Risk",
            labelColor: "#FD4233",
            activeBarColor: "#FD4233",
          },
          {
            name: "Medium Risk",
            labelColor: "#FF9901",
            activeBarColor: "#FF9901",
          },
          {
            name: "High Risk",
            labelColor: "#009E53",
            activeBarColor: "#009E53",
          },
        ]}
        labelNoteStyle={{
          color: "black",
          display: "none",
        }}
        labelStyle={{
          display: "none",
        }}
      />
      <Text style={styles.label}>{String(value).replace(".", ",")}%</Text>
    </View>
  );
};

export default Gauges;


