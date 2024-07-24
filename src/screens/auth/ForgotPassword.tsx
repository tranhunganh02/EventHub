import { View, Text, Alert } from 'react-native'
import React from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, TextComponent } from '../../components'
import { ArrowRight, Sms } from 'iconsax-react-native'
import { Validate } from '../../utils/validate'
import authenticationAPI from '../../apis/authApi'
import { LoadingModal } from '../../modals'

const ForgotPassword = () => {

  const [email, setEmail] = React.useState('')
  const [isDisable, setIsDisable] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false)
  
  const handleCheckEmail = () => {
    const isValidEmail = Validate.email(email)
    setIsDisable(!isValidEmail)
  }

  const handleForgotPassword = async () => {
    const api = "access/forgotPass"
    setLoading(true)

    try {
      const res = await authenticationAPI.HandleAuthentication(
        api,
        {email},
        'post',
      )
      console.log((res.data.metadata))
      Alert.alert("We just sent you a newpassword")
      setLoading(false)

    } catch (error) {
      Alert.alert("Please check your email address")
    }

  }

  return (
    <ContainerComponent isImageBackground back>
       <SectionComponent>
       <TextComponent title text='Reset password'/>
       <TextComponent text='Please enter your email addess to request a password reset'/>
       </SectionComponent>
       <SectionComponent>
       <InputComponent 
       onEnd={handleCheckEmail}
       placeholder='abc@gmail.com'
        value={email} 
        onChange={val => setEmail(val)} 
        affix={<Sms size={24} />} />
       </SectionComponent>
       <SectionComponent styles={{alignItems:'center'}}>
        <ButtonComponent 
        onPress={handleForgotPassword}
        disabled={isDisable}
            text='Send'
            type='primary'
            icon={<ArrowRight size={20} color='white' />}
            iconFlex='right'
        />
       </SectionComponent>
       <LoadingModal visible={isLoading} />
    </ContainerComponent>
  )
}

export default ForgotPassword