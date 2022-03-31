import {View, Text, Image, StyleSheet, Alert, Dimensions} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Video from 'react-native-video';

import Popup from '../Popup/Popup.component';
import {PopupMainProps} from '../Popup/Popup';
import {sizes} from '../../../theme/sizes';
import {
  HeaderLarge,
  HeaderMedium,
  HeaderSmall,
} from '../Headers/Headers.component';
import Button from '../Button/Button.component';
import {color} from '../../../theme/color';

interface PrizePageProps {
  onClose: () => void;
  info: {
    phone: string;
    email: string;
  };
  prizeGoal: string;
  startDate: string;
  endDate: string;
  prize: string;
  conditions: string;
  videoPoster: string;
  videoUrl:
    | number
    | {
        uri?: string | undefined;
        headers?:
          | {
              [key: string]: string;
            }
          | undefined;
        type?: string | undefined;
      };
}

export default function PrizePage({
  challengeName,
  title,
  prizeGoal,
  onClose,
  info,
  videoPoster,
  videoUrl,
  startDate,
  endDate,
  prize,
  conditions,
}: PopupMainProps & PrizePageProps) {
  const [paused, setPaused] = React.useState(false);
  return (
    <Popup onClose={onClose} challengeName={challengeName} title={title}>
      <Image
        style={styles.banner}
        source={require('../../../../assets/banner.png')}
        resizeMode="contain"
      />
      <Image
        style={styles.bannerBottom}
        source={require('../../../../assets/number.png')}
        resizeMode="contain"
      />
      <View style={styles.videoContainer}>
        {paused && (
          <Icon
            onPress={() => setPaused(!paused)}
            style={styles.videoIcon}
            name="play"
            size={50}
            color={color.darkYellow}
          />
        )}
        <Video
          poster={videoPoster}
          resizeMode="cover"
          source={videoUrl} // Can be a URL or a local file.
          // Store reference
          repeat
          onTouchStart={() => setPaused(!paused)}
          onBuffer={() => Alert.alert('loading...')} // Callback when remote video is buffering
          onError={() => Alert.alert('error!')} // Callback when video cannot be loaded
          style={styles.video}
          paused={paused}
        />
      </View>
      <HeaderMedium color="#000" margin="20px 0 10px 0" fontWeight="normal">
        {title}
      </HeaderMedium>
      <HeaderMedium color="#000" fontWeight="normal">
        {prizeGoal}
      </HeaderMedium>
      <View style={styles.dateContainer}>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>Başlangıç Tarihi</Text>
          <Text style={styles.dateText}>{startDate}</Text>
          <Icon style={styles.icon} name="calendar-alt" />
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>Başlangıç Tarihi</Text>
          <Text style={styles.dateText}>{endDate}</Text>
          <Icon style={styles.icon} name="calendar-alt" />
        </View>
      </View>

      <HeaderMedium color="#000" fontWeight="normal" margin="0 0 10px 0">
        Ödül
      </HeaderMedium>
      <HeaderSmall color="#000" fontWeight="normal">
        {prize}
      </HeaderSmall>
      <Button
        textColor="#333"
        textSize="20"
        padding="15px"
        margin="20px 0"
        bgColor={color.darkYellow}
        activeColor={color.lightYellow}
        onPress={() => Alert.alert('Ödül alındı')}
        title="Mesaj Gönder"
        fontWeight="normal"
      />
      <View style={styles.section}>
        <HeaderMedium color="#000" fontWeight="normal" margin="0 0 10px 0">
          İletişim Bilgileri
        </HeaderMedium>
        <View style={[styles.dateBox, styles.infoBox]}>
          <Icon style={[styles.icon, styles.infoIcon]} name="phone-alt" />
          <Text style={styles.contactText}>{info.phone}</Text>
        </View>
        <View style={[styles.dateBox, styles.infoBox]}>
          <Icon style={[styles.icon, styles.infoIcon]} name="envelope" />
          <Text style={styles.contactText}>{info.email}</Text>
        </View>
      </View>
      <View
        style={[
          styles.section,
          {
            marginBottom: 120,
          },
        ]}>
        <HeaderMedium color="#000" fontWeight="normal" margin="0 0 10px 0">
          Katılım Koşulları
        </HeaderMedium>
        <HeaderSmall color="#000" fontWeight="normal">
          {conditions}
        </HeaderSmall>
      </View>
    </Popup>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    textAlign: 'right',
    color: 'rgba(0,0,0,0.3)',
  },
  infoIcon: {
    color: '#333',
    flex: 0,
    fontSize: sizes.medium + 5,
  },
  videoIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '40%',
    left: '40%',
    zIndex: 5,
  },
  video: {
    height: '100%',
    borderRadius: sizes.medium,
  },
  banner: {
    width: '100%',
    height: 160,
  },
  bannerBottom: {
    width: '100%',
    height: 80,
  },
  videoContainer: {
    height: 250,
    borderRadius: sizes.medium,
    overflow: 'hidden',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
    paddingVertical: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  dateBox: {
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: sizes.medium,
  },
  dateText: {
    color: '#000',
    justifyContent: 'space-around',
    fontSize: 17,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  section: {
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
    paddingVertical: 20,
  },
  contactText: {
    flex: 1,
    color: '#000',
    justifyContent: 'space-evenly',
    fontSize: 20,
    fontWeight: 'normal',
    marginBottom: 10,
    textAlign: 'center',
    paddingBottom: 0,
    margin: 0,
  },
  infoBox: {
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
