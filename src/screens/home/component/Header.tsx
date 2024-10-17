import { View, Text, StatusBar, TouchableOpacity, Platform, TextInput } from 'react-native'
import React from 'react'
import { appColors } from '../../../constants/appColor'
import { appInfo } from '../../../constants/appInfors'
import { CircleComponent, IconButtonComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components'
import { ArrowDown, HambergerMenu, Heart, Menu, MenuBoard, Notification, User } from 'iconsax-react-native'
import { fontFamilies } from '../../../constants/fontFamilies'
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = ({onPressHome}: {onPressHome: () => void}) => {
    return (
        <View
            style={{
                backgroundColor: appColors.secondary,
                height: appInfo.sizes.HEIGHT * 0.23,
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
                paddingHorizontal: 15,
                paddingTop: Platform.OS === 'android' ? 35 : appInfo.sizes.HEIGHT * 0.05
            }}>
            <RowComponent justify='space-between' styles={{  }} >
                <TouchableOpacity
                onPress={onPressHome}
                >
                    <HambergerMenu size={24} color={appColors.white} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <RowComponent>
                        <TextComponent text='Current Loccation' size={14} color={appColors.white} />
                        <ArrowDown color={appColors.white} size={14} />
                    </RowComponent>
                    <TextComponent text='VietNam, Da Nang' size={16} font={fontFamilies.medium} color={appColors.white} />
                </View>
                <CircleComponent size={35} color="#5D56F3">
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
            {/* <SectionComponent
            styles={{paddingHorizontal:0}}
            >
            </SectionComponent> */}
            <RowComponent
                justify='space-between'
                styles={{  paddingVertical: 10 }}
            >
                <IconButtonComponent
                    icon={<Icon name='search' size={20} color={'white'} />}
                    stylesButton={{
                        marginRight: 10
                    }} />
                <View
                    style={{
                        flex: 1,
                        flexDirection:'row'
                    }}
                >
                    <Text style={{fontWeight:'200', fontSize:20, color: '#A29EF0'}}>|</Text>
                    <TextInput
                        placeholder=' Search...'
                        style={{
                            fontSize: 20,
                            fontFamily: fontFamilies.regular,
                            color: '#A29EF0'
                        }}
                        placeholderTextColor='#A29EF0'
                        focusable={false}
                    />
                </View>
                    <RowComponent
                    onPress={()=>{}}
                     styles={{ 
                        padding: 10,
                        backgroundColor: "#5D56F3",
                        borderRadius:50 }}>
                        <CircleComponent
                        size={35}
                        color={"#A29EF0"}
                        >
                            <MenuBoard size={16} color='#5D56F3' variant='Bold' />
                        </CircleComponent>
                        <SpaceComponent width={10}/>
                        <TextComponent
                            text={"Filters"}
                            size={15}
                            color={'white'}/>
                    </RowComponent>
            </RowComponent>
        </View>
    )
}

export default Header