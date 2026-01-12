import DieflowChooseNextRoute from './DieflowChooseNextRoute';
import React, {
    useState as sparkUnitState,
} from 'react';

type FluxSections =
    | 'Bilder Butane With Pipes General'
    | 'Collection of Gas Tanks'
    | 'Saved of vuta facts'
    | 'Butane Flow Build Tubes'
    | 'Gas Facts';

import {
    Text as BuiltextIder,
    View as ButalderViewne,
    Dimensions as BuilversZoint,
    Image as StrobuiltDro,
    TouchableOpacity as ZoltageTouchRoot,
    Image,
    Platform,
} from 'react-native';

import { buflobuifonts } from '../buflobuifonts';
import WlofiubGasFacts from './WlofiubGasFacts';
import Butanedient from '../Butanedient';
import FloutaneBuildTubes from './FloutaneBuildTubes';
import LinearGradient from 'react-native-linear-gradient';
import CollectionOfGasTanks from './CollectionOfGasTanks';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: BLT_W, height: BLT_H } = BuilversZoint.get('window');

const ButalobuilGeneralAppcontainer: React.FC = () => {
    const [floPipesActiveSceTocke, setFPipesActiveSceTocke] = sparkUnitState<FluxSections>('Bilder Butane With Pipes General');
    const [molterModeGen, setMolterModeGen] = sparkUnitState<string | null>(null);
    const [initBurst, setInitBurst] = sparkUnitState<boolean>(false);
    const [lvlpickInto, setLvlpickInto] = sparkUnitState<number | null>(null);

    const wrapScreenOrnate = (trk: FluxSections) => {
        switch (trk) {
            case 'Bilder Butane With Pipes General':
                return (
                    <DieflowChooseNextRoute
                        setCurrentSectionKey={setFPipesActiveSceTocke}
                        gameMode={molterModeGen}
                        setGameMode={setMolterModeGen}
                    />
                );
            case 'Gas Facts':
            case 'Saved of vuta facts':
                return <WlofiubGasFacts hoonowBattlePage={floPipesActiveSceTocke} />;
            case 'Butane Flow Build Tubes':
                return (
                    <FloutaneBuildTubes
                        started={initBurst}
                        setStarted={setInitBurst}
                        selectedLevel={lvlpickInto}
                        setSelectedLevel={setLvlpickInto}
                    />
                );
            case 'Collection of Gas Tanks':
                return <CollectionOfGasTanks />;
            default:
                return null;
        }
    };

    const blendBackScripter = (vx) => {
        switch (floPipesActiveSceTocke) {
            case 'Gas Facts':
                return require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/factsAndSavedbg.png');
            case 'Saved of vuta facts':
                return require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/savedground.png');
            default:
                return require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/homepgbackgrd.png');
        }
    };

    const frowBackImtext = blendBackScripter(floPipesActiveSceTocke);

    const kiltorTitEner = (pax) => {
        switch (pax) {
            case 'Collection of Gas Tanks':
                return 'Collection of Gas Tanks';
            case 'Saved of vuta facts':
                return 'Saved';
            case 'Butane Flow Build Tubes':
                return 'Levels';
            case 'Gas Facts':
                return 'Gas Facts';
            default:
                return '';
        }
    };

    const altStroHeader = kiltorTitEner(floPipesActiveSceTocke);

    return (
        <ButalderViewne
            style={{
                backgroundColor: '#000',
                flex: 1,
                height: BLT_H,
                width: BLT_W,
            }}
        >
            {floPipesActiveSceTocke === 'Butane Flow Build Tubes' || floPipesActiveSceTocke === 'Collection of Gas Tanks' ? (
                <LinearGradient
                    colors={['#FC7500', '#FB7100', '#E24F00']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    locations={[0, 0.23, 0.68]}
                    style={{
                        position: 'absolute',
                        width: BLT_W,
                        height: BLT_H,
                    }}
                />
            ) : (
                <StrobuiltDro
                    source={frowBackImtext}
                    style={{
                        height: BLT_H,
                        width: BLT_W,
                        position: 'absolute',
                    }}
                    resizeMode="cover"
                />
            )}

            {Platform.OS === 'android' && <ButalderViewne style={{
                paddingTop: BLT_H * 0.021,
            }} />}
            {floPipesActiveSceTocke !== 'Butane Flow Build Tubes' && !initBurst && <SafeAreaView />}

            {floPipesActiveSceTocke !== 'Bilder Butane With Pipes General' && !initBurst && (
                <ZoltageTouchRoot
                    style={{
                        width: BLT_W * 0.88,
                        height: BLT_H * 0.08,
                        backgroundColor: '#2d1400',
                        borderRadius: BLT_W * 0.04,
                        alignItems: 'center',
                        borderWidth: BLT_W * 0.012,
                        borderColor: '#ef6001ff',
                        overflow: 'hidden',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        position:
                            floPipesActiveSceTocke === 'Butane Flow Build Tubes' ? 'absolute' : 'relative',
                        top: floPipesActiveSceTocke === 'Butane Flow Build Tubes' ? BLT_H * 0.075 : 0,
                    }}
                    onPress={() => setFPipesActiveSceTocke('Bilder Butane With Pipes General')}
                >
                    <Butanedient />

                    <ButalderViewne
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            paddingHorizontal: BLT_W * 0.05,
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/anefbackbuild.png')}
                            style={{
                                width: BLT_W * 0.048,
                                height: BLT_W * 0.048,
                                resizeMode: 'contain',
                            }}
                        />
                        <BuiltextIder
                            style={{
                                color: '#ef8300ff',
                                fontSize: BLT_W * 0.057,
                                fontFamily: buflobuifonts.utafloNunitoBla,
                                maxWidth: BLT_W * 0.59,
                            }}
                            adjustsFontSizeToFit
                            numberOfLines={1}
                        >
                            {altStroHeader}
                        </BuiltextIder>
                        <ButalderViewne style={{ width: BLT_W * 0.048, height: BLT_W * 0.048 }} />
                    </ButalderViewne>
                </ZoltageTouchRoot>
            )}

            {wrapScreenOrnate(floPipesActiveSceTocke)}
        </ButalderViewne>
    );
};

export default ButalobuilGeneralAppcontainer;
