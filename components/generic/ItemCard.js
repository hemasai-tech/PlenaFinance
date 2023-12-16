import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Button from './Button';

const ItemCard = props => {
  const {itemDetails} = props.route.params;

  const Header = () => {
    return (
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.iconView}>
          <Image
            source={require('../../assets/left.png')}
            style={styles.leftIcon}
          />
        </TouchableOpacity>
        <View>
          <Image
            style={styles.cartImg}
            source={require('../../assets/bag.png')}
          />
        </View>
      </View>
    );
  };

  const renderImageItem = ({item}) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={{uri: item}} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header />
      <ScrollView>
        <View style={styles.brandView}>
          <Text style={styles.brand}>{itemDetails.brand}</Text>
          <Text style={styles.category}>{itemDetails.category}</Text>
        </View>
        <Rating
          count={5}
          ratingColor="#F9B023"
          unSelectedColor="#000"
          defaultRating={itemDetails.rating}
          imageSize={20}
          style={{paddingVertical: 10}}
          isDisabled
        />
        <View style={styles.carouselView}>
          <Image
            source={require('../../assets/fav.png')}
            style={styles.favIcon}
          />
          <Carousel
            data={itemDetails.images}
            renderItem={renderImageItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
            loop
            autoplay
          />
        </View>
        <View style={styles.discount}>
          <Text style={styles.priceTxt}>$ {itemDetails.price}</Text>
          <Text style={styles.discountTxt}>
            {itemDetails.discountPercentage} %
          </Text>
        </View>
        <View style={styles.btnView}>
          <View style={{marginLeft: 10}}>
            <Button text={'Add To Cart'} applyBg={false} />
          </View>
          <View style={{marginLeft: 10}}>
            <TouchableOpacity style={styles.btnViewBG}>
              <Text
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 10,
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: 14,
                  color: '#fff',
                }}>
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detView}>
          <Text style={styles.details}>Details</Text>
          <Text style={styles.des}>{itemDetails.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  leftIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cartImg: {
    width: 16,
    height: 18,
    tintColor: '#000',
  },
  iconView: {
    height: 40,
    width: 40,
    backgroundColor: '#F8F9FB',
    borderRadius: 50,
    justifyContent: 'center',
  },
  headerView: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 25,
  },
  brand: {
    fontWeight: '300',
    fontSize: 50,
    color: '#1E222B',
  },
  category: {
    fontWeight: '800',
    fontSize: 50,
    color: '#1E222B',
  },
  brandView: {
    marginLeft: 20,
    marginVertical: 20,
  },
  star: {
    width: 14,
    height: 14,
  },
  favIcon: {
    height: 19,
    width: 19,
    resizeMode: 'contain',
    marginLeft: 'auto',
    top: 15,
    right: 10,
    position: 'absolute',
    zIndex: 2,
  },
  carouselItem: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  carouselView: {
    height: 210,
    width: '100%',
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  discount: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  priceTxt: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2A4BA0',
  },
  discountTxt: {
    fontWeight: '400',
    fontSize: 16,
    backgroundColor: '#2A4BA0',
    color: '#fff',
    marginHorizontal: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  btnViewBG: {
    borderWidth: 1,
    marginVertical: 15,
    width: 100,
    borderRadius: 15,
    backgroundColor: '#2A4BA0',
    borderColor: '#2A4BA0',
  },
  details: {
    color: '#1E222B',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
  des: {
    fontWeight: '400',
    fontSize: 16,
    color: '#8891A5',
    lineHeight: 24,
  },
  detView: {
    marginHorizontal: 24,
  },
});
