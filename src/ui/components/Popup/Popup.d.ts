export type PopupProps = {
  bgColor?: string;
};

export interface PopupMainProps {
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
  challengeName: string;
}
