import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#8360c3", "#2ebf91"],
    title: "Haze",
    subtitle: "this wheather is Haze",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#544a7d", "#ffd452"],
    title: "Thunderstorm",
    subtitle: "천둥번개가 칩니다",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#005AA7", "#FFFDE4"],
    title: "Drizzle",
    subtitle: "보슬비가 내려요",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#00B4DB", "#0083B0"],
    title: "Rain",
    subtitle: "비가 내려요",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#74ebd5", "#ACB6E5"],
    title: "Snow",
    subtitle: "눈이 옵니다",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#F2994A", "#F2C94C"],
    title: "Clear",
    subtitle: "날씨가 맑네요",
  },
  Clouds: {
    iconName: "weather-partly-cloudy",
    gradient: ["#000046", "#1CB5E0"],
    title: "Clouds",
    subtitle: "구름이 끼었어요",
  },
  Mist: {
    iconName: "weather-partly-rainy",
    gradient: ["#159957", "#155799"],
    title: "Mist",
    subtitle: "미스트가 내려요",
  },
  Dust: {
    iconName: "weather-tornado",
    gradient: ["#000000", "#ADA996"],
    title: "Dust",
    subtitle: "아먼지씹",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
