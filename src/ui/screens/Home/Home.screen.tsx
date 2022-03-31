import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {
  useAppDispatch,
  useAppSelector,
} from '../../../infrastructure/redux/hooks';
import {fetchPrize} from '../../../infrastructure/redux/reducers/prizeSlice';
import {color} from '../../../theme/color';
import Button from '../../components/Button/Button.component';
import PrizePage from '../../components/PrizePage/PrizePage.component';
import {StyledBackground} from '../../components/Views/Views.component';

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const prize = useAppSelector(state => state.prize);
  const [showPopup, setShowPopup] = React.useState(false);
  return (
    <View style={{flex: 1}}>
      <StyledBackground
        source={require('../../../../assets/bg.jpeg')}
        resizeMode="cover">
        {prize.loading ? (
          <ActivityIndicator
            size="large"
            color={color.primary}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          />
        ) : (
          showPopup && (
            <PrizePage
              prizeGoal={prize.prizeGoal}
              info={prize.info}
              videoPoster={prize.videoPoster}
              videoUrl={prize.videoUrl}
              startDate={prize.startDate}
              endDate={prize.endDate}
              prize={prize.prize}
              conditions={prize.conditions}
              title={prize.title}
              challengeName={prize.challengeName}
              onClose={() => setShowPopup(false)}
            />
          )
        )}
        <Button
          onPress={() => {
            dispatch(fetchPrize());
            setShowPopup(true);
          }}
          title="Show Challenge"
          bgColor={color.darkYellow}
          activeColor={color.lightYellow}
          textColor="#fff"
          textSize={'20'}
          margin="10px 70px"
        />
      </StyledBackground>
    </View>
  );
}
