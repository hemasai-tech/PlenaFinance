import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const CartItem = props => {
  const {item, navigation} = props;
  const [favIcon, setFavIcon] = useState(false);
  return (
    <View style={styles.cartView}>
      <TouchableOpacity onPress={() => props.navigation.navigate('ItemCard',{
        itemDetails:item
      })}>
        <TouchableOpacity onPress={()=>setFavIcon(!favIcon)}>
          {favIcon ? (
            <Image
              source={require('../../assets/favColor.png')}
              style={styles.fav}
            />
          ) : (
            <Image
              source={require('../../assets/fav.png')}
              style={styles.fav}
            />
          )}
        </TouchableOpacity>
        <View style={styles.imgView}>
          <Image source={{uri: item.thumbnail}} style={styles.img} />
        </View>
        <View style={styles.priceView}>
          <View>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.add}>
            <View style={styles.addView}>
              <Text style={styles.plus}>+</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartView: {
    height: 190,
    width: 150,
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#F8F9FB',
  },
  fav: {
    height: 14,
    width: 13,
    top: 10,
    left: 5,
    resizeMode: 'contain',
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  imgView: {
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  price: {
    fontWeight: '600',
    fontSize: 14,
    color: '#1E222B',
    fontFamily: 'Manrope',
    lineHeight: 20,
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: '#616A7D',
  },
  add: {
    backgroundColor: '#2A4BA0',
    height: 25,
    width: 25,
    borderRadius: 50,
  },
  plus: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  addView: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 40,
  },
});
