import "@/global.css";

import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-background dark:bg-slate">
      <SafeAreaView className="flex-1 items-center justify-center px-6">
        <View className="items-center gap-4">
          <Text className="text-5xl font-bold text-foreground dark:text-white leading-tight">
            Done
          </Text>
          <Text className="text-sm text-foreground/60 dark:text-white/60">
            Minimal notes. Fast. Modular. Agnostic.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
