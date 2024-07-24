import { View, Text, StatusBar, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { appColors } from '../../../constants/appColor'
import { appInfo } from '../../../constants/appInfors'
import { CircleComponent, RowComponent, TextComponent } from '../../../components'
import { ArrowDown, HambergerMenu, Notification } from 'iconsax-react-native'
import { fontFamilies } from '../../../constants/fontFamilies'

const Header = () => {
    return (
        <View
            style={{
                backgroundColor: appColors.primary,
                height: appInfo.sizes.HEIGHT * 0.24,
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
                paddingHorizontal: 15,
                paddingTop: Platform.OS === 'android' ? 15 : appInfo.sizes.HEIGHT * 0.05
            }}>
            <RowComponent justify='space-between' >
                <TouchableOpacity>
                    <HambergerMenu size={24} color={appColors.white} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <RowComponent>
                        <TextComponent text='Current Loccation' size={14} color={appColors.white} />
                        <ArrowDown color={appColors.white} size={14} />
                    </RowComponent>
                    <TextComponent text='VietNam, Da Nang' size={16} font={fontFamilies.medium} color={appColors.white} />
                </View>
                <CircleComponent size={35} color="#524CE0">
                    <Notification size={23} color={appColors.white} />
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        right: 5,
                        backgroundColor: 'green',
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        borderWidth: 2,
                        borderColor: appColors.white,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                    </View>
                </CircleComponent>
            </RowComponent>
        </View>
    )
}

export default Header