import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const LogoutCard = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Logout</Text>
          <Text style={styles.message}>Are you sure you want to logout?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
              <Text style={styles.confirmText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  card: {
    width: wp(80),
    padding: hp(3),
    backgroundColor: "white",
    borderRadius: 30,
    elevation: 5,
  },
  title: {
    fontSize: hp(3),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: hp(1),
  },
  message: {
    fontSize: hp(2),
    textAlign: "center",
    marginBottom: hp(2),
    color: "#555",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: hp(1.5),
    borderRadius: 15,
  },
  confirmButton: {
    backgroundColor: "#f43f5e",
    padding: hp(1.5),
    borderRadius: 15,
  },
  cancelText: {
    fontSize: hp(2),
    color: "#333",
    fontWeight: "bold",
  },
  confirmText: {
    fontSize: hp(2),
    color: "white",
    fontWeight: "bold",
  },
});

export default LogoutCard;
