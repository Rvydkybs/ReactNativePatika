import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  bodyContainer: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  descpn: {
    fontStyle: "italic",
    marginVertical: 5,
  },
  price: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "right",
  },
  button: {
    borderRadius: 10,
  },
  input: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#990066",
    padding: 5,
    margin: 10,
    marginTop: 20,
    height: 45,
  },
  opcity: {
    backgroundColor: "#990066",
    height: 45,
    borderRadius: 10,
    padding: 5,
    margin: 10,
    alignItems: "center",
  },
  opcityText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
