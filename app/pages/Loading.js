import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Loading = () => {
  const rotationValue = new Animated.Value(0);

  const interpolatedRotation = rotationValue.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  const styles = StyleSheet.create({
    myView: {
      transform: [{ rotate: interpolatedRotation }],
    },
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationValue, {
        toValue: 360,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View className="w-full h-full flex justify-center items-center">
      <Animated.View style={styles.myView}>
        <Ionicons name="reload-circle-outline" color={"red"} size={80} />
      </Animated.View>
    </View>
  );
};

export default Loading;
