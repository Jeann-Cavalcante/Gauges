import {Text, View } from "react-native";

import RNSpeedometer from "react-native-speedometer";
import styles from "./styles";
import { PropsGauges } from "../../types/Props";
import { useEffect, useState } from "react";

const Gauges = ({ value, titleLabel }: PropsGauges) => {
  const [colorText, setColorText] = useState("black");

  useEffect(() => {
    if (value < 30) {
      setColorText("#FD4233");
    } else if (value >= 30 && value < 60) {
      setColorText("#FF9901");
    } else {
      setColorText("#009E53");
    }
  }, [value]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titleLabel.split(" ").join('\n')}</Text>
      <RNSpeedometer
        value={value}
        size={80}
        minValue={0}
        maxValue={100}
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
      <Text style={[styles.label, {color: colorText} ] }>{String(value).replace(".", ",")}%</Text>
    </View>
  );
};

export default Gauges;


