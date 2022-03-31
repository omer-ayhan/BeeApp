import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import styled from 'styled-components';
import {ButtonPropsTypes, ButtonTextProps, WrapperProps} from './Button';

const ButtonWrapper = styled(TouchableHighlight)`
  background-color: ${(props: WrapperProps) => props.backgroundColor};
  border-radius: ${(props: WrapperProps) => props.borderRadius}px;
  padding: ${(props: WrapperProps) => props.padding};
  margin: ${(props: WrapperProps) => props.margin};
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ButtonText = styled(Text)`
  color: ${(props: ButtonTextProps) => props.color};
  font-size: ${(props: ButtonTextProps) => props.fontSize}px;
  font-weight: ${(props: ButtonTextProps) => props.fontWeight};
  text-align: center;
`;

export default function Button({
  onPress,
  bgColor,
  activeColor,
  textColor,
  textSize,
  title,
  padding,
  margin,
  fontWeight,
}: ButtonPropsTypes) {
  return (
    <ButtonWrapper
      backgroundColor={bgColor}
      borderRadius={5}
      padding={padding || '10px'}
      margin={margin || '0'}
      underlayColor={activeColor}
      onPress={onPress}>
      <ButtonText
        color={textColor}
        fontSize={textSize}
        fontWeight={fontWeight || 'bold'}>
        {title}
      </ButtonText>
    </ButtonWrapper>
  );
}
