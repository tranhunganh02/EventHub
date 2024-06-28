import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { appColors } from '../../constants/appColor';
import { appInfo } from '../../constants/appInfors';
import { globalStyles } from '../../styles/globalStyles';
import { TextComponent } from '../../components';
import { fontFamilies } from '../../constants/fontFamilies';




const OnbroadingScreen = ({ navigation }: any) => {
  const [index, setIndex] = useState(0);

  return (
    <View style={[globalStyles.container]}>
      <Swiper
        style={{}}
        index={index}
        onIndexChanged={num => setIndex(num)}
        activeDotColor={appColors.white}
        //showsButtons
        loop={false}
      >
        <Image
          source={require('../../assets/images/onboarding-1.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        />
        <Image
          source={require('../../assets/images/onboarding-2.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        />
        <Image
          source={require('../../assets/images/onboarding-3.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        />
      </Swiper>
      <View
        style={[{
          flexDirection: 'row',
          position: 'absolute',
          paddingHorizontal: 25,
          paddingVertical: 15,

          bottom: 10,
          right: 20,
          left: 20,
          justifyContent: "space-between",
          alignItems: 'center'
        }]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}>
         <TextComponent 
         text='Skip'
         font={fontFamilies.medium}
         color={appColors.gray2}
         />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')
          }
        >
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnbroadingScreen;

const styles = StyleSheet.create({
  text: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});
