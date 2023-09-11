import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SIZES } from "../../../constants";
import styles from "./tabs.style";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.btn(item, activeTab)}
            onPress={() => setActiveTab(item)}
          >
            <Text style={styles.btnText(item, activeTab)}>{item}</Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
