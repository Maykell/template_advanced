import { StyleSheet } from 'react-native';
import { colors } from '~/styles';
import { fontSize, marginSize } from '~/styles/sizes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: fontSize.veryLarge,
    fontWeight: 'bold',
    color: colors.white,
  },
  description: {
    marginVertical: marginSize.large,
    fontSize: fontSize.medium,
    color: colors.grey,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    marginTop: marginSize.verySmall,
    fontSize: fontSize.small,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
