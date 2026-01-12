import React, {
    useEffect as igniteFluxHook,
} from 'react';
import { useNavigation as useFluxSwirlNav } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import CirclesAnimationsAreSpinning from '../ButaneFlowBuilderComponents/CirclesAnimationsAreSpinning';
import { SafeAreaView as SafeFluxField } from 'react-native-safe-area-context';
const BUTAFLOLDER_FLAG_OF_ONB_KEY = 'hello-ledread-dfsjo-key';
import {
    View as ButalderShell,
    Dimensions as PrismBox,
} from 'react-native';


const ButaneFlowBuilderLoading: React.FC = () => {
    const fluxNav = useFluxSwirlNav();
    const { width: windSpan, height: skyTall } = PrismBox.get('window');

    igniteFluxHook(() => {
        let latchFlow = true;
        let swirlTimer: NodeJS.Timeout | null = null;

        const igniteFluxRoute = async () => {
            try {
                const hoofTag = await AsyncStorage.getItem(BUTAFLOLDER_FLAG_OF_ONB_KEY);
                const randomParticle = Math.floor(Math.random() * 900);

                //if (!hoofTag) {
                //    await AsyncStorage.setItem(BUTAFLOLDER_FLAG_OF_ONB_KEY, 'yes');
                //    setTimeout(() => {
                //        fluxNav.replace('ButaneFlowBuilderOnboarding');
                //    }, 6000 + randomParticle);
                //    return;
                //}

                // setTimeout(() => {
                //     cathButaneFlowBuilder();
                // }, 7445)

                //setTimeout(() => {
                //    fluxNav.replace('ButalobuilGeneralAppcontainer');
                //}, 6000 + randomParticle);

            } catch (errStorm) {
                if (__DEV__) console.warn('FluxPrime::recover', errStorm);
            }
        };

        igniteFluxRoute();

        return () => {
            latchFlow = false;
            if (swirlTimer) clearTimeout(swirlTimer);
        };
    }, [fluxNav, windSpan]);

    return (
        <SafeFluxField style={{
            justifyContent: 'center',
            flex: 1,
            width: windSpan,
            alignItems: 'center',
            height: skyTall,
        }}
        >
            <LinearGradient
                locations={[0, 0.23, 0.68]}
                end={{ x: 0.5, y: 1 }}
                start={{ x: 1, y: 0 }}
                colors={['#FC7500', '#FB7100', '#E24F00']}
                style={{
                    height: skyTall,
                    width: windSpan,
                    position: 'absolute',
                }}
            />

            <ButalderShell style={{ alignSelf: 'center', zIndex: 20 }}>
                <CirclesAnimationsAreSpinning />
            </ButalderShell>
        </SafeFluxField>
    );
};

export default ButaneFlowBuilderLoading;