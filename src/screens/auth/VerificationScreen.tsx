import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ButtonComponent, ContainerComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { TextInput } from 'react-native'
import { appColors } from '../../constants/appColor'
import { fontFamilies } from '../../constants/fontFamilies'
import { ArrowRight } from 'iconsax-react-native'

const VerificationScreen = ({navigation, route}: any) => {
  return (
    <ContainerComponent isImageBackground back >
      <SectionComponent>
        <TextComponent title text='Verification' />
        <TextComponent text="We've send you the verification code on +123 456789" />
      </SectionComponent>
      <SectionComponent>
        <RowComponent styles={{justifyContent:'space-around'}}>
          <TextInput
           keyboardType='number-pad'
           style={[styles.input]} />
          <TextInput
           keyboardType='number-pad'
           style={[styles.input]} />
          <TextInput
           keyboardType='number-pad'
           style={[styles.input]} />
          <TextInput
           keyboardType='number-pad'
           style={[styles.input]} />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={50}/>
      <SectionComponent styles={{alignItems:'center'}}>
        <ButtonComponent type='primary' text='CONTINUE' iconFlex='right' icon={<ArrowRight color={appColors.white} size={24}/>} />
        <SpaceComponent height={20}/>
          <RowComponent>
          <TextComponent text='Re-send code in'/>
          <TextComponent text=' 00:20' color={appColors.primary}/>
          </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  )
}

export default VerificationScreen


const styles = StyleSheet.create({
  input: {
    height: 55,
    width: 55,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray2,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontFamily: fontFamilies.bold,
    textAlign: 'center',
  },
});