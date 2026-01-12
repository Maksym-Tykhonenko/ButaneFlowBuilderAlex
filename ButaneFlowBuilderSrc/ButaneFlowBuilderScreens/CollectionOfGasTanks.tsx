import React, { useState, useEffect } from 'react';
import { buflobuifonts } from '../buflobuifonts';
import { ScrollView } from 'react-native-gesture-handler';
import Butanedient from '../Butanedient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View as BuilBoxluta,
    Dimensions as FutaloDimen,
    Text as BuderaneTxt,
    Image,
} from 'react-native';

export default function CollectionOfGasTanks() {
    const { width: flowidth, height: floheight } = FutaloDimen.get('window');

    const gasTanks = [
        {
            name: 'First Flow',
            tankimg: require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/firstFlow.png'),
        },
        {
            name: 'Stable Pressure',
            tankimg: require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/stablePressure.png'),
        },
        {
            name: 'Perfect Stream',
            tankimg: require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/perfectStream.png'),
        },
        {
            name: 'Pipe Master',
            tankimg: require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/pipeMaster.png'),
        },
        {
            name: 'Gas Legend',
            tankimg: require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/gasLegend.png'),
        },
    ]

    const [completedLevels, setCompletedLevels] = useState<number[]>([]);

    useEffect(() => {
        AsyncStorage.getItem('libwolfenLvlsder').then(val => {
            if (val) setCompletedLevels(JSON.parse(val));
        });
    }, []);

    const tanksToShow = gasTanks.slice(0, completedLevels.length);

    return (
        <BuilBoxluta style={{
            alignItems: 'center',
            paddingBottom: floheight * 0.08,
            flex: 1,
        }}>
            {tanksToShow.length === 0 ? (
                <BuderaneTxt style={{
                    fontFamily: buflobuifonts.utafloNunitoBod,
                    color: '#622307',
                    marginTop: floheight * 0.15,
                    fontSize: floheight * 0.03,
                }}>
                    You have no awards...
                </BuderaneTxt>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={tanksToShow.length > 2} contentContainerStyle={{ paddingBottom: floheight * 0.08 }}>
                    <BuilBoxluta style={{
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        marginTop: floheight * 0.019,
                        justifyContent: 'space-between',
                        width: flowidth * 0.92, // додати ширину контейнера для правильного вирівнювання
                        flexDirection: 'row',
                        alignSelf: 'center',    // центрувати контейнер
                    }}>
                        {tanksToShow.map((tank, idx) => (
                            <BuilBoxluta
                                style={{
                                    borderRadius: flowidth * 0.035,
                                    height: floheight * 0.35,
                                    borderWidth: flowidth * 0.008,
                                    margin: flowidth * 0.02,
                                    width: flowidth * 0.41,
                                    overflow: 'hidden',
                                    borderColor: '#6B0D0D',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                key={idx}
                            >
                                <Butanedient />
                                <BuilBoxluta style={{
                                    width: '95%',
                                    height: '86%',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <BuderaneTxt style={{
                                        color: '#ef8300ff',
                                        fontSize: floheight * 0.023,
                                        maxWidth: '90%',
                                        fontFamily: buflobuifonts.utafloNunitoBod,
                                    }} numberOfLines={1} adjustsFontSizeToFit>{tank.name}</BuderaneTxt>
                                    <Image
                                        source={tank.tankimg}
                                        style={{
                                            resizeMode: 'contain',
                                            height: '80%',
                                            width: '80%',
                                        }}
                                    />
                                </BuilBoxluta>
                            </BuilBoxluta>
                        ))}
                    </BuilBoxluta>
                </ScrollView>
            )}
        </BuilBoxluta>
    );
}
