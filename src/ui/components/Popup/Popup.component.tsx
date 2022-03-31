import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styled from 'styled-components';
import {color} from '../../../theme/color';

import {sizes} from '../../../theme/sizes';
import IconButton from '../Button/IconButton.component';
import {HeaderMedium} from '../Headers/Headers.component';
import {PopupMainProps, PopupProps} from './Popup';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const PopupContainer = styled(View)`
  position: absolute;
  width: ${deviceWidth}px;
  height: ${deviceHeight}px;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props: PopupProps) => props.bgColor || '#fff'};
  z-index: 5;
`;

const PopupInner = styled(View)`
  flex: 1;
  width: 100%;
  padding: 20px;
  padding-bottom: 0;
  height: ${deviceHeight}px;
  background-color: ${(props: PopupProps) => props.bgColor || '#fff'};
  border-radius: ${sizes.medium}px;
  border: 4px solid rgba(0, 0, 0, 0.06);
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export default function Popup({
  children,
  challengeName,
  onClose,
}: PopupMainProps) {
  return (
    <PopupContainer bgColor="#fff">
      <ImageBackground
        source={require('../../../../assets/bg.png')}
        style={styles.header}>
        <IconButton
          bgColor={'#fff'}
          onPress={onClose}
          icon="chevron-left"
          iconColor={color.darkYellow}
          iconSize={45}
          borderRadius={10}
          margin="20px"
        />
        <HeaderMedium color="#000" style={styles.headerTitle}>
          {challengeName}
        </HeaderMedium>
      </ImageBackground>
      <PopupInner>
        <ScrollView style={{width: '100%'}}>{children}</ScrollView>
      </PopupInner>
    </PopupContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    position: 'absolute',
    width: '100%',
    flex: 1,
    zIndex: -1,
  },
});
