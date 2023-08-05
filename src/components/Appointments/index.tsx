import { Text, View } from "react-native";
import { styles } from "./styles";
import { AppointmentsDb } from "../../types";
import { Fontisto } from "@expo/vector-icons"; 


const Appointments = () => {
  const appointments: AppointmentsDb[] = [
    {
      id: 1,
      title:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, nisl eget lorem ipsum dolor sit amet, ",
      badge: [
        { title: "Alto", color: "#009E53" },
        { title: "Indicador 01", color: "#005AE9" },
        { title: "AE 01", color: "#02CAED" },
      ],
      alert: false,
      icons: [
        { name: "like", color: "#009E53", notification: 0 },
        { name: "paperclip", color: "#000", notification: 0 },
        { name: "hipchat", color: "#000", notification: 0 },
      ],
    },

    {
      id: 2,
      title:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, nisl eget lorem ipsum dolor sit amet, ",
      badge: [{ title: "Alto", color: "#009E53" }],
      alert: false,
      icons: [
        { name: "dislike", color: "#FD4233", notification: 0 },
        { name: "paperclip", color: "#000", notification: 3 },
        { name: "hipchat", color: "#000", notification: 8 },
      ],
    },

    {
      id: 3,
      title:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, nisl eget lorem ipsum dolor sit amet, ",
      badge: [
        { title: "Alto", color: "#009E53" },
        { title: "Indicador 01", color: "#005AE9" },
        { title: "AE 01", color: "#02CAED" },
      ],
      alert: false,
      icons: [
        { name: "like", color: "#009E53", notification: 0 },
        { name: "paperclip", color: "#000", notification: 0 },
        { name: "hipchat", color: "#000", notification: 0 },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 15 }} numberOfLines={2}>
        Compromissos a serem entregues{"\n"}no próximo Comitê
      </Text>

      <View style={styles.containerCard}>
        {appointments.map((appointment) => (
          <View style={styles.appointmentContainer} key={appointment.id}>
            <View style={styles.appointment}>
              <View style={styles.badges}>
                {appointment.badge.map((badge, i) => (
                  <Text
                    key={i}
                    style={[
                      styles.badgesTitle,
                      { backgroundColor: badge.color },
                    ]}
                  >
                    {badge.title}
                  </Text>
                ))}
              </View>
              <Text style={styles.title}>{appointment.title}</Text>
            </View>

            <View style={styles.icons}>
              {appointment.icons.map((icon, i) => (
                <View style={styles.iconContainer} key={i}>
                  {icon.notification > 0 && (
                    <Text>{icon.notification}</Text>
                  )}
                  <Fontisto name={icon.name} size={20} color={icon.color} />
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export default Appointments;