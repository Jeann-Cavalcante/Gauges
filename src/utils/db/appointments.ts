import { AppointmentsDb } from "../../types";

export const appointments: AppointmentsDb[] = [
  {
    id: 1,
    title:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, nisl eget lorem ipsum dolor sit amet, ",
    badge: [
      { title: "Alto", color: "#009E53" },
      { title: "Indicador 01", color: "#005AE9" },
      { title: "AE 01", color: "#02CAED" },
    ],
    alert: "#009E53",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
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
    alert: "#FD4233",
    image:
      "https://e7.pngegg.com/pngimages/599/258/png-clipart-computer-icons-location-symbol-blue-symbol-miscellaneous-blue.png",
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
    icons: [
      { name: "like", color: "#000", notification: 0 },
      { name: "paperclip", color: "#000", notification: 0 },
      { name: "hipchat", color: "#000", notification: 0 },
    ],
  },
];
