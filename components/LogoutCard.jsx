import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const LogoutCard = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          {/* Title */}
          <Text style={styles.title}>Logout</Text>

          {/* Message */}
          <Text style={styles.message}>Are you sure you want to logout?</Text>

          {/* Buttons */}
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  card: {
    width: wp(85),
    padding: hp(3),
    backgroundColor: "white",
    borderRadius: 25,
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  title: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: "#333",
    marginBottom: hp(2),
  },
  message: {
    fontSize: hp(2),
    textAlign: "center",
    color: "#555",
    marginBottom: hp(3),
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Subtle gray color
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    borderRadius: 20,
  },
  confirmButton: {
    backgroundColor: "#f43f5e", // Vibrant rose color
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    borderRadius: 20,
  },
  cancelText: {
    fontSize: hp(2),
    color: "#555",
    fontWeight: "bold",
  },
  confirmText: {
    fontSize: hp(2),
    color: "white",
    fontWeight: "bold",
  },
});

export default LogoutCard;
