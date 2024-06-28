import { View, Text } from 'react-native'
import React from 'react'
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components'
import { appColors } from '../../../constants/appColor'
import { fontFamilies } from '../../../constants/fontFamilies'
import { Google } from 'iconsax-react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
 


const SocialLogin = () => {
    return (
        <SectionComponent styles={{alignItems:'center'}}>
            <TextComponent
                text='OR'
                styles={{ textAlign: 'center', color: appColors.gray3 }}
                size={16}
                font={fontFamilies.medium} />
            <SpaceComponent height={15} />
            <ButtonComponent
                type='primary'
                color={appColors.white}
                textColor={appColors.text}
                text="Login with Google"
                textFont={fontFamilies.regular}
                iconFlex="left"
                icon={ 
                    <View 
                    style={{
                        width: 40, 
                        height: 40, 
                        borderRadius: 20, 
                        backgroundColor: "red",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                
                <Icon name="google"  size={25} color={"white"} style={{
                   
                }} />
                </View> }
            />
              <ButtonComponent
                type='primary'
                color={appColors.white}
                textColor={appColors.text}
                text="Login with Facebook"
                ///textFont={fontFamilies.regular}
                iconFlex="left"
                icon={ 
                    <View 
                    style={{
                        width: 40, 
                        height: 40, 
                        borderRadius: 20, 
                        backgroundColor: "blue",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                
                <Icon name="facebook"  size={25} color={"white"} style={{
                   
                }} />
                </View> }
            />
        </SectionComponent>
    )
}

export default SocialLogin