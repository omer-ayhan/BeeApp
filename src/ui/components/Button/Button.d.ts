export type WrapperProps = {
  children: React.ReactNode;
  backgroundColor: string;
  borderRadius: number | string;
  padding: string;
  margin: string;
};

export type ButtonTextProps = {
  color: string;
  fontSize: string;
  fontWeight: string;
};

export interface ButtonPropsTypes {
  onPress: () => void;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  textColor: string;
  textSize: string;
  fontWeight?: string;
  textWeight?: string;
  title: string;
  bgColor: string;
  activeColor: string;
}

export interface IconButtonProps extends IconButtonWrapperProps {
  padding?: string;
  margin?: string;
  icon: string;
  iconColor: string;
  iconSize: number;
  onPress: () => void;
}

export type IconButtonWrapperProps = {
  padding?: string;
  margin?: string;
  bgColor?: string;
  borderRadius?: number | string;
};
