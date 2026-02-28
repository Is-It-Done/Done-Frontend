import { Spacing } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.heroSection}>
          <Text style={styles.brand}>Done</Text>
          <Text style={styles.subtitle}>
            Minimal notes. Fast. Modular. Agnostic.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "center",
    justifyContent: "center",
  },
  heroSection: {
    alignItems: "center",
    gap: Spacing.three,
  },
  brand: {
    fontSize: 48,
    lineHeight: 52,
    fontWeight: "700",
    color: "#2D3436",
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: "#60646C",
  },
});
