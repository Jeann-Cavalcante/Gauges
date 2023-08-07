import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { Fontisto } from "@expo/vector-icons";
import { appointments } from "../../utils/db/appointments";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Appointments = () => {
 
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 15 }} numberOfLines={2}>
        Compromissos a serem entregues{"\n"}no próximo Comitê
      </Text>

      <View style={styles.containerCard}>
        {appointments.map((appointment) => (
          <View
            style={[
              styles.appointmentContainer,
              appointment.alert
                ? { borderColor: appointment.alert }
                : { borderColor: "#BEBEBE" },
            ]}
            key={appointment.id}
          >
            <>
              {appointment.image && (
                <Image
                  style={styles.image}
                  source={{ uri: appointment.image }}
                />
              )}

              {appointment.arrow && (
                <MaterialCommunityIcons
                  style={styles.arrow}
                  name={appointment.arrow as any}
                  size={23}
                  color="#005AE9"
                />
              )}
            </>
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
                  {icon.notification! > 0 && (
                    <Text style={[styles.iconNotify, { color: "#005AE9" }]}>
                      {icon.notification}
                    </Text>
                  )}
                  <Fontisto
                    style={[
                      styles.icon,
                      icon.notification! > 0 && { color: "#005AE9" },
                    ]}
                    name={icon.name as any}
                    size={20}
                    color={icon.color}
                  />
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Appointments;
