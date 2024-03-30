import { Button, StyleSheet, Text, View} from 'react-native';
import { MyChart } from '../../components';
import { RootStackParams } from '../../navigation/GeneralNavigation';
import { StackScreenProps } from '@react-navigation/stack';
type Props = StackScreenProps<RootStackParams>;

export const Grafica = ({navigation}: Props) => {

  return (
    <View>
      <View style={styles.btnContainer}>
      <Button
          title="Cerrar sesion"
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
      <MyChart />
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'center'
  },
})
