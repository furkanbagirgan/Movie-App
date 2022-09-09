import React from 'react';
import {ScrollView, TouchableWithoutFeedback, View, Text} from 'react-native';

import styles from './HorizontalFilters.style';

const HorizontalFilters = ({filters, activeFilter, setActiveFilter}) => {
  return (
    <ScrollView
      bounces={false}
      scrollEnabled={true}
      overScrollMode="never"
      horizontal={true}>
      <View style={styles.filterContainer}>
        {filters.map((item, index) => (
          <TouchableWithoutFeedback
            key={String(index)}
            onPress={() => setActiveFilter(item.key)}>
            <View
              style={
                activeFilter === item.key
                  ? styles.activeFilter
                  : styles.filterItem
              }>
              <Text style={styles.filterTitle}>{item.title}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  );
};

export default HorizontalFilters;
