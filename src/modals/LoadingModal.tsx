import { View, Text, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyles';
import { TextComponent } from '../components';

interface Props {
    visible: boolean;
   mess?: string;
   onClose?:() => void;
}

const LoadingModal = (props: Props) => {
    const {visible, mess, onClose} = props;
  return (
   <Modal visible={visible} transparent statusBarTranslucent style={globalStyles.container} >
        <View style={{ flex:1 ,justifyContent:'center', alignItems:'center',}}>
            <ActivityIndicator />
            <TextComponent text='Loading'/>
        </View>
   </Modal>
  )
}

export default LoadingModal