import React from 'react';
import { View, Modal, Text, TouchableOpacity, Animated } from 'react-native';

export default function ModalComponent(props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.modalView, { transform: [{ translateY: props.slideAnim }] }]}>
          <Text>Hello! This is a modal.</Text>
          <TouchableOpacity
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={() => {
              props.setModalVisible(!props.modalVisible);
            }}
          >
            <Text style={styles.textStyle}>Close Modal</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
}
