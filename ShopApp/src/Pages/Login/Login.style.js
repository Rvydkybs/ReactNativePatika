import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00695C",
  },
  logo: {
    height: Dimensions.get("window").height / 2.4,
    width: Dimensions.get("window").width,
    resizeMode: "contain",
    alignSelf: "center",
    tintColor: "white",
  },
  body: {
    margin: 5,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "grey",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },
  outButton: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "black",
    borderWidth: 2,
  },
  title: {},
  buttonOutText: {
    color: "blue",
    fontWeight: "700",
    fontSize: 20,
  },
  register: {
    borderRadius: 10,
    backgroundColor: "#00695C",
  },
  registerText: {
    fontSize: 20,
    color: "white",
  },
  registercontain: {
    alignItems: "center",
  },
});
