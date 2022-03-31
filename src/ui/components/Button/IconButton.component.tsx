import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import {IconButtonProps, IconButtonWrapperProps} from './Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconButtonContainer = styled(TouchableOpacity)`
  margin: ${(props: IconButtonWrapperProps) => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  background-color: ${(props: IconButtonWrapperProps) => props.bgColor};
  border-radius: ${(props: IconButtonWrapperProps) =>
    props.borderRadius || 0}px;
  justify-content: center;
  align-items: center;
  border: 4px solid rgba(0, 0, 0, 0.1);
  z-index: 5;
`;

export default function IconButton({
  onPress,
  padding,
  margin,
  icon,
  iconColor,
  iconSize,
  ...rest
}: IconButtonProps) {
  return (
    <IconButtonContainer
      onPress={onPress}
      margin={margin}
      padding={padding}
      {...rest}>
      <Icon name={icon} color={iconColor} size={iconSize} />
    </IconButtonContainer>
  );
}
