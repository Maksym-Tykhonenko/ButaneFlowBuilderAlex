import {
    Dimensions as BuilderRozmir,
    View as FloderanViewol,
    Text as Ildertext,
    TouchableOpacity as TapNodePulse,
    Image,
    Share,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Butanedient from '../Butanedient';
import { buflobuifonts } from '../buflobuifonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import utawolfactsild from '../ButaneData/utawolfactsild';

export default function WlofiubGasFacts({ hoonowBattlePage }: { hoonowBattlePage: string }) {
    const { width: flowidth, height: floheight } = BuilderRozmir.get('window');
    const [factIdx, setFactIdx] = useState(0);
    const [savedFacts, setSavedFacts] = useState<string[]>([]);

    useEffect(() => {
        AsyncStorage.getItem('enatubsavedFcts').then(res => {
            if (res) setSavedFacts(JSON.parse(res));
        });
    }, []);

    // Вибираємо масив для показу
    const isSavedPage = hoonowBattlePage === 'Saved of vuta facts';
    const factsToShow = isSavedPage ? savedFacts : utawolfactsild;
    const fact = factsToShow[factIdx];

    const isSaved = savedFacts.includes(fact);

    const handleSave = async () => {
        let updated;
        if (!isSaved) {
            updated = [...savedFacts, fact];
        } else {
            updated = savedFacts.filter(f => f !== fact);
        }
        setSavedFacts(updated);
        await AsyncStorage.setItem('enatubsavedFcts', JSON.stringify(updated));
    };

    const handleNext = () => {
        setFactIdx((prev) => (prev + 1) % factsToShow.length);
    };

    // Якщо на сторінці збережених і нема збережених фактів
    if (isSavedPage && factsToShow.length === 0) {
        return (
            <FloderanViewol style={{ flex: 1, alignItems: 'center' }}>
                <Ildertext style={{
                    marginTop: floheight * 0.1,
                    color: '#FFF0C8',
                    fontSize: flowidth * 0.07,
                    textAlign: 'center',
                    fontFamily: buflobuifonts.utafloNunitoBla,
                }}>
                    No saved.
                </Ildertext>
            </FloderanViewol>
        );
    }

    return (
        <FloderanViewol style={{ flex: 1, alignItems: 'center', paddingBottom: floheight * 0.08 }}>
            {/* Факт */}
            <FloderanViewol style={{
                marginTop: floheight * 0.1,
                height: floheight * 0.14,
                overflow: 'hidden',
                alignItems: 'center',
                borderRadius: flowidth * 0.05,
                justifyContent: 'center',
                width: flowidth * 0.88,
                backgroundColor: '#2C1C0C',
            }}>
                <Butanedient />
                <Ildertext style={{
                    lineHeight: floheight * 0.03,
                    fontSize: flowidth * 0.058,
                    textAlign: 'center',
                    color: '#FFF0C8',
                    paddingHorizontal: flowidth * 0.04,
                    fontFamily: buflobuifonts.utafloNunitoBod,
                }} numberOfLines={2} adjustsFontSizeToFit>
                    {fact}
                </Ildertext>
            </FloderanViewol>
            {/* Кнопки */}
            <FloderanViewol style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: floheight * 0.07,
                justifyContent: 'center',
                width: flowidth * 0.93,
                marginTop: floheight * 0.03,
            }}>
                {/* Зберегти */}
                <TapNodePulse
                    onPress={handleSave}
                    style={{
                        backgroundColor: '#232323',
                        borderRadius: flowidth * 0.025,
                        overflow: 'hidden',
                        height: floheight * 0.07,
                        width: flowidth * 0.15,
                        alignItems: 'center',
                        borderWidth: flowidth * 0.008,
                        borderColor: '#ef8c01ff',
                        justifyContent: 'center',
                    }}
                >
                    <Butanedient colors={['#828384ff', '#545557']} />
                    <Image
                        source={isSaved
                            ? require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/darkSavedBkmrk.png')
                            : require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/lightOrangeBkmrk.png')}
                        style={{
                            width: flowidth * 0.057,
                            height: flowidth * 0.057,
                            resizeMode: 'contain',
                        }}
                    />
                </TapNodePulse>
                {/* Next */}
                <TapNodePulse
                    onPress={handleNext}
                    style={{
                        alignItems: 'center',
                        overflow: 'hidden',
                        borderWidth: flowidth * 0.008,
                        height: floheight * 0.07,
                        borderRadius: flowidth * 0.025,
                        marginHorizontal: flowidth * 0.035,
                        borderColor: '#ef8c01ff',
                        width: flowidth * 0.4,
                        justifyContent: 'center',
                    }}
                >
                    <Butanedient colors={['#828384ff', '#545557']} />
                    <Ildertext style={{
                        color: '#ef8300ff',
                        fontFamily: buflobuifonts.utafloNunitoBla,
                        fontSize: flowidth * 0.058,
                    }}>
                        Next
                    </Ildertext>
                </TapNodePulse>
                {/* Поширити */}
                <TapNodePulse
                    style={{
                        borderRadius: flowidth * 0.025,
                        borderColor: '#ef8c01ff',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: flowidth * 0.008,
                        height: floheight * 0.07,
                        width: floheight * 0.07,
                        backgroundColor: '#232323',
                        overflow: 'hidden',
                    }}
                    onPress={() => {
                        Share.share({
                            message: `${fact} – i read it in Butane Flow Builder!`
                        })
                    }}
                >
                    <Butanedient colors={['#828384ff', '#545557']} />
                    <Image
                        source={require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/uildshare.png')}
                        style={{ resizeMode: 'contain', height: flowidth * 0.057, width: flowidth * 0.057, }}
                    />
                </TapNodePulse>
            </FloderanViewol>
        </FloderanViewol>
    );
}
