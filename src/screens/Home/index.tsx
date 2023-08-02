
import { useState } from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import RNSpeedometer from "react-native-speedometer";

const Home = () => {
  const [meterValue, setMeterValue] = useState(400);
  const [meterRange, setMeterRange] = useState(100);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.Go}>
          <RNSpeedometer
            value={meterValue}
            size={200}
            minValue={0}
            maxValue={100}
            allowedDecimals={35}
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
        </View>
        <Text style={styles.label}>{meterValue}%</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Go: {
    backgroundColor: "transparent",
  },
  label: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
