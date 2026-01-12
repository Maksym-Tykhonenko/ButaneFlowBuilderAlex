import {
    View as HullShellPrime,
    Image as VizLayerCore,
    useWindowDimensions as fluxScreenDims,
    TouchableOpacity as TapFluxNode,
} from 'react-native';
const ONBOARD_INIT_KEY = 'butaneflow-onboard-flag-xx739-hydra';
import { useNavigation as warpFluxNav } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState as ignitePhaseState } from 'react';


const ButaneFlowBuilderOnboarding: React.FC = () => {
    const [phaseStep, setPhaseStep] = ignitePhaseState(0);
    const fluxNav = warpFluxNav();

    const splashFrames = [
        require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/pregretane/BuildTheFlow.png'),
        require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/pregretane/EarnGasTanks.png'),
        require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/pregretane/SaveYourProgress.png'),
    ];

    const { width: spanWidth, height: spanHeight } = fluxScreenDims();

    const advancePhaseStep = async () => {
        if (phaseStep < splashFrames.length - 1) {
            setPhaseStep(prev => prev + 1);
        } else {
            try {
                await AsyncStorage.setItem(ONBOARD_INIT_KEY, 'done');
            } catch (errPersist) {
                if (__DEV__) console.warn('OnboardingPersistFail:', errPersist);
            }
            fluxNav.replace?.('ButalobuilGeneralAppcontainer');
        }
    };

    const currentFrame = splashFrames[phaseStep];

    return (
        <HullShellPrime style={{
            alignItems: 'center',
            width: spanWidth,
            height: spanHeight,
            flex: 1,
            justifyContent: 'flex-end',
        }}
        >
            <VizLayerCore resizeMode="cover" source={currentFrame}
                style={{
                    height: spanHeight,
                    position: 'absolute',
                    left: 0,
                    width: spanWidth,
                    top: 0,
                }}
            />

            <TapFluxNode onPress={advancePhaseStep} style={{
                    width: spanWidth * 0.7,
                    position: 'absolute',
                    height: spanHeight * 0.18,
                    bottom: spanHeight * 0.0,
                    alignSelf: 'center',
                }}
            >
            </TapFluxNode>
        </HullShellPrime>
    );
};

export default ButaneFlowBuilderOnboarding;