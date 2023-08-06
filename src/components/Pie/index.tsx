import { Text, View } from "react-native";
import {
  VictoryPie,
} from "victory-native";
import { PropsPie } from "../../types/Props";
import styles from "./styles";



export default function Pie({ title, value }: PropsPie) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <VictoryPie
        padAngle={({ datum }) => datum.y}
        colorScale={["#FD4233", "#FF9901", "#009E53"]}
        data={[
          { x: 1, y: 2, label: "" },
          { x: 2, y: 3, label: "" },
          { x: 3, y: 5, label: "" },
        ]}
        innerRadius={40}
        radius={() => 25}
        width={80}
        height={80}
        labels={() => null}
      />
    </View>
  );
}
