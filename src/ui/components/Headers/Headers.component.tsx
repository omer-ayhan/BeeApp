import {Text} from 'react-native';
import styled from 'styled-components';

import {sizes} from '../../../theme/sizes';
import {HeaderTypes} from './Headers';

const HeaderLarge = styled(Text)`
  color: ${(props: HeaderTypes) => props.color};
  font-size: ${sizes.large}px;
  font-weight: ${(props: HeaderTypes) => props.fontWeight || 'bold'};
  text-align: center;
  margin: ${(props: HeaderTypes) => props.margin || '0'};
`;

const HeaderMedium = styled(Text)`
  color: ${(props: HeaderTypes) => props.color};
  font-size: ${sizes.medium}px;
  font-weight: ${(props: HeaderTypes) => props.fontWeight || 'bold'};
  text-align: center;
  margin: ${(props: HeaderTypes) => props.margin || '0'};
`;

const HeaderSmall = styled(Text)`
  color: ${(props: HeaderTypes) => props.color};
  font-size: ${sizes.small}px;
  font-weight: ${(props: HeaderTypes) => props.fontWeight || 'bold'};
  text-align: center;
  margin: ${(props: HeaderTypes) => props.margin || '0'};
`;

export {HeaderLarge, HeaderMedium, HeaderSmall};
