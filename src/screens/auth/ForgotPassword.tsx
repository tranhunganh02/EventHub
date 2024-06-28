import { View, Text } from 'react-native'
import React from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, TextComponent } from '../../components'
import { ArrowRight, Sms } from 'iconsax-react-native'

const ForgotPassword = () => {

  const [email, setEmail] = React.useState('')
    
  return (
    <ContainerComponent isImageBackground back>
       <SectionComponent>
       <TextComponent title text='Reset password'/>
       <TextComponent text='Please enter your email addess to request a password reset'/>
       </SectionComponent>
       <SectionComponent>
       <InputComponent 
       placeholder='abc@gmail.com'
        value={email} 
        onChange={val => setEmail(val)} 
        affix={<Sms size={24} />} />
       </SectionComponent>
       <SectionComponent styles={{alignItems:'center'}}>
        <ButtonComponent 
            text='Send'
            type='primary'
            icon={<ArrowRight size={20} color='white' />}
            iconFlex='right'
        />
       </SectionComponent>
    </ContainerComponent>
  )
}

export default ForgotPassword