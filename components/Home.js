import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import CartItem from './generic/CartItem';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';

const Home = props => {
  const {navigation} = props;
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const getProductsApiCall = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    console.log(response.data.products);
    setProducts(response.data.products);
  };

  useEffect(() => {
    getProductsApiCall();
  }, []);

  const renderProduct = ({item, index}) => {
    console.log(item);
    const isEvenIndex = index % 2 === 0; // Check if the index is even
    return (
      <View
        style={{
          marginLeft: isEvenIndex ? 0 : 10, // Add left margin for even indices
          marginRight: isEvenIndex ? 10 : 0, // Add right margin for odd indices
          marginVertical: 10,
        }}>
        <CartItem item={item} navigation={navigation} />
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.topComp}>
        <View style={styles.cartView}>
          <View>
            <Text style={styles.headTxt}>Hey, Hem</Text>
          </View>
          <View>
            <Image
              style={styles.cartImg}
              source={require('../assets/bag.png')}
            />
          </View>
        </View>
        <View style={styles.input}>
          <Image
            style={styles.searchIcon}
            source={require('../assets/SearchIcon.png')}
          />
          <TextInput
            style={styles.inputField}
            placeholderTextColor={'#8891A5'}
            placeholder="Search Product or Stores"
          />
        </View>
        <View style={styles.cartView}>
          <View>
            <Text style={styles.deliveryTxt}>DELIVERY TO</Text>
            <Text style={styles.addressTxt}>Green Way 3000, Sylhet</Text>
          </View>
          <View>
            <Text style={styles.deliveryTxt}>WITHIN</Text>
            <Text style={styles.addressTxt}>1 Hour</Text>
          </View>
        </View>
      </View>
      <View style={styles.banner}>
        <View style={{marginTop: 'auto', marginBottom: 'auto'}}>
          <Image
            source={require('../assets/bannerIcon.png')}
            style={styles.bnrImg}
          />
        </View>
        <View style={{marginTop: 'auto', marginBottom: 'auto'}}>
          <Text style={styles.bnrGetTxt}>Get</Text>
          <Text style={styles.bnrTxt}>50% off</Text>
        </View>
      </View>
      <View>
        <Text style={styles.recomended}>Recommended</Text>
      </View>
      <View style={styles.productList}>
        <FlatList
          data={products}
          renderItem={(item, index) => renderProduct(item, index)}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{paddingBottom: 10}}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  topComp: {
    backgroundColor: '#2A4BA0',
    height: 240,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  cartImg: {
    width: 16,
    height: 18,
  },
  headTxt: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 22,
    color: '#fff',
  },
  cartView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 25,
  },
  input: {
    backgroundColor: '#153075',
    marginHorizontal: 25,
    borderRadius: 30,
    flexDirection: 'row',
    marginTop: 10,
  },
  inputField: {
    color: '#8891A5',
  },
  searchIcon: {
    height: 18,
    width: 18,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginHorizontal: 20,
  },
  deliveryTxt: {
    color: '#F8F9FB',
    fontWeight: '800',
    fontSize: 11,
    letterSpacing: 1,
  },
  addressTxt: {
    color: '#F8F9FB',
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.8,
  },
  banner: {
    backgroundColor: '#F9B023',
    width: 269,
    height: 123,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
    borderRadius: 20,
  },
  bnrImg: {
    height: 68,
    width: 68,
  },
  bnrTxt: {
    fontWeight: '800',
    fontSize: 26,
    color: '#fff',
    fontFamily: 'Manrope',
  },
  bnrGetTxt: {
    fontWeight: '300',
    fontSize: 20,
    color: '#fff',
  },
  recomended: {
    color: '#1E222B',
    fontSize: 30,
    fontWeight: '400',
    fontFamily: 'Manrope',
    marginLeft: 20,
  },
  productList: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
