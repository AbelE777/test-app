import {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {findMostRepeatedWords} from '../helpers/findRepeatedWords';
import {BarChart} from 'react-native-gifted-charts';
import {fetchPosts} from '../helpers/fetchPosts';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
type WordCount = {
  value: unknown;
  label: string;
};

export const MyChart = () => {
  const [topWords, setTopWords] = useState<WordCount[]>([]);

  useEffect(() => {
    fetchPosts()
      .then((res: Posts[]) => {
        let paragraph = '';
        res.forEach(item => {
          paragraph += `${item.body} `;
        });
        return paragraph;
      })
      .then(res => {
        const info = findMostRepeatedWords(res, 30);
        console.log(info);
        setTopWords(info);
      })
      .catch(error => {
        Alert.alert(`Error ${error}`);
        console.log('errorY***', error);
      });
  }, []);
  return (
    <>
      <Text style={styles.title}>This are the 30 most repeated words</Text>

      <View>
        <BarChart
          data={topWords}
          frontColor={'#177AD5'}
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 50
  }
});
