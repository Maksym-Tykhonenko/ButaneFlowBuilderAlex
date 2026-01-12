import { buflobuifonts } from '../buflobuifonts';
import LinearGradient from 'react-native-linear-gradient';
import Butanedient from '../Butanedient';
import React, { useState, useEffect, useRef, } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Image,
    View as RedliViewboxwol,
    Dimensions as Mensdimen,
    TouchableOpacity as LiunatuTapzoneld,
    Text,
    Animated,
} from 'react-native';

// Імпорт зображень труб
const pipeImages = {
    end: require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/pipes/pipe_start_end.png'),
    straight: require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/pipes/pipe_straight.png'),
    corner: require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/pipes/pipe90.png'),
    triple: require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/pipes/pipe_triple.png'),
    quad: require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/pipes/pipe_quad.png'),
};

// pipe types: 'end', 'straight', 'corner', 'triple'
const pipesLevel1 = [
    { type: 'end', row: 0, col: 0, rotate: 0, correctRotate: 90 },
    { type: 'corner', row: 0, col: 1, rotate: 90, correctRotate: 90 },
    { type: 'straight', row: 1, col: 1, rotate: 0, correctRotate: 90 },
    { type: 'triple', row: 2, col: 1, rotate: 90, correctRotate: 270 },
    { type: 'corner', row: 2, col: 2, rotate: 180, correctRotate: 90 },
    { type: 'triple', row: 3, col: 1, rotate: 0, correctRotate: 270 },
    { type: 'corner', row: 3, col: 2, rotate: 180, correctRotate: 180 },
    { type: 'end', row: 4, col: 1, rotate: 180, correctRotate: 0 },
];
const pipesLevel2 = [
    { type: 'corner', row: 0, col: 0, rotate: 90, correctRotate: 0 },
    { type: 'triple', row: 0, col: 1, rotate: 90, correctRotate: 0 },
    { type: 'end', row: 0, col: 2, rotate: 0, correctRotate: 270 },

    { type: 'straight', row: 1, col: 0, rotate: 0, correctRotate: 90 },
    { type: 'triple', row: 1, col: 1, rotate: 90, correctRotate: 270 },
    { type: 'corner', row: 1, col: 2, rotate: 0, correctRotate: 90 },

    { type: 'corner', row: 2, col: 0, rotate: 180, correctRotate: 270 },
    { type: 'quad', row: 2, col: 1, rotate: 180, correctRotate: 180 },
    { type: 'corner', row: 2, col: 2, rotate: 180, correctRotate: 180 },
    { type: 'end', row: 3, col: 1, rotate: 180, correctRotate: 0 },
];
const pipesLevel3 = [
    { type: 'end', row: 0, col: 1, rotate: 0, correctRotate: 180 },

    { type: 'corner', row: 1, col: 0, rotate: 90, correctRotate: 0 },
    { type: 'triple', row: 1, col: 1, rotate: 90, correctRotate: 180 },
    { type: 'corner', row: 1, col: 2, rotate: 90, correctRotate: 90 },

    { type: 'straight', row: 2, col: 0, rotate: 90, correctRotate: 90 },
    { type: 'straight', row: 2, col: 2, rotate: 0, correctRotate: 90 },

    { type: 'corner', row: 3, col: 0, rotate: 180, correctRotate: 270 },
    { type: 'triple', row: 3, col: 1, rotate: 180, correctRotate: 0 },
    { type: 'corner', row: 3, col: 2, rotate: 180, correctRotate: 180 },

    { type: 'end', row: 4, col: 1, rotate: 180, correctRotate: 0 },
];
const pipesLevel4 = [
    { type: 'end', row: 0, col: 0, rotate: 0, correctRotate: 90 },
    { type: 'straight', row: 0, col: 1, rotate: 90, correctRotate: 180 },
    { type: 'corner', row: 0, col: 2, rotate: 90, correctRotate: 90 },

    { type: 'corner', row: 1, col: 0, rotate: 90, correctRotate: 0 },
    { type: 'straight', row: 1, col: 1, rotate: 90, correctRotate: 180 },
    { type: 'triple', row: 1, col: 2, rotate: 90, correctRotate: 90 },

    { type: 'triple', row: 2, col: 0, rotate: 90, correctRotate: 270 },
    { type: 'triple', row: 2, col: 1, rotate: 90, correctRotate: 0 },
    { type: 'triple', row: 2, col: 2, rotate: 90, correctRotate: 90 },

    { type: 'corner', row: 3, col: 0, rotate: 180, correctRotate: 270 },
    { type: 'quad', row: 3, col: 1, rotate: 180, correctRotate: 180 },
    { type: 'corner', row: 3, col: 2, rotate: 180, correctRotate: 180 },

    { type: 'end', row: 4, col: 1, rotate: 180, correctRotate: 0 },
];
const pipesLevel5 = [
    { type: 'end', row: 0, col: 2, rotate: 0, correctRotate: 270 },
    { type: 'corner', row: 0, col: 1, rotate: 90, correctRotate: 0 },

    { type: 'corner', row: 1, col: 0, rotate: 90, correctRotate: 0 },
    { type: 'quad', row: 1, col: 1, rotate: 90, correctRotate: 90 },
    { type: 'corner', row: 1, col: 2, rotate: 90, correctRotate: 90 },

    { type: 'triple', row: 2, col: 0, rotate: 90, correctRotate: 270 },
    { type: 'triple', row: 2, col: 1, rotate: 90, correctRotate: 180 },
    { type: 'triple', row: 2, col: 2, rotate: 90, correctRotate: 90 },

    { type: 'corner', row: 3, col: 0, rotate: 180, correctRotate: 270 },
    { type: 'triple', row: 3, col: 1, rotate: 180, correctRotate: 0 },
    { type: 'corner', row: 3, col: 2, rotate: 180, correctRotate: 180 },

    { type: 'end', row: 4, col: 1, rotate: 180, correctRotate: 0 },
];

const levels = [1, 2, 3, 4, 5];

export default function FloutaneBuildTubes({ started, setStarted, selectedLevel, setSelectedLevel }) {
    const { width: butlowid, height: butlohei } = Mensdimen.get('window');

    function getLevelPipes(level: number | null) {
        switch (level) {
            case 1: return pipesLevel1;
            case 2: return pipesLevel2;
            case 3: return pipesLevel3;
            case 4: return pipesLevel4;
            case 5: return pipesLevel5;
            default: return pipesLevel1;
        }
    }

    // --- FIX: track level pipes only when level is started ---
    const [pipes, setPipes] = useState<{ type: string, row: number, col: number, rotate: number, correctRotate: number }[]>([]);

    useEffect(() => {
        if (started && selectedLevel) {
            setPipes(getLevelPipes(selectedLevel).map(pipe => ({ ...pipe })));
        }
    }, [started, selectedLevel]);

    // --- refs для анімацій ---
    const animRefs = useRef<Animated.Value[]>([]);

    // --- Додаємо стан для disabledPipes ---
    const [disabledPipes, setDisabledPipes] = useState<boolean[]>([]);

    // Оновлюємо pipes, refs і disabledPipes при старті рівня
    useEffect(() => {
        if (started && selectedLevel) {
            const pipesData = getLevelPipes(selectedLevel).map(pipe => ({ ...pipe }));
            setPipes(pipesData);
            animRefs.current = pipesData.map(pipe => new Animated.Value(pipe.rotate));
            setDisabledPipes(pipesData.map(() => false));
        }
    }, [started, selectedLevel]);

    const [showModal, setShowModal] = useState(false);
    const [timer, setTimer] = useState(60);
    const [gameOver, setGameOver] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Таймер
    useEffect(() => {
        if (started && !showModal && !gameOver) {
            timerRef.current = setInterval(() => {
                setTimer(prev => {
                    if (prev <= 1) {
                        clearInterval(timerRef.current!);
                        setGameOver(true);
                        setShowModal(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [started, showModal, gameOver]);

    // Скидання таймера при старті рівня
    useEffect(() => {
        if (started) {
            setTimer(60);
            setGameOver(false);
        }
    }, [started]);

    // pipe rendering helpers
    const cellSize = butlowid * 0.25;
    const pipeWidth = cellSize * 0.32;

    // Перевірка чи всі труби повернуті правильно (з урахуванням типу)
    function isPipeCorrect(pipe) {
        const r = pipe.rotate % 360;
        const c = pipe.correctRotate % 360;
        if (pipe.type === 'straight') {
            return r === c || r === (c + 180) % 360;
        }
        if (pipe.type === 'quad') {
            return true; // будь-який кут
        }
        return r === c;
    }

    function checkSolution(pipesArr = pipes) {
        for (let i = 0; i < pipesArr.length; i++) {
            if (!isPipeCorrect(pipesArr[i])) return false;
        }
        return true;
    }

    // Викликаємо перевірку після кожного обертання
    function rotatePipe(idx: number) {
        if (disabledPipes[idx]) return;
        setDisabledPipes(prev => {
            const arr = [...prev];
            arr[idx] = true;
            return arr;
        });
        setPipes(prev => {
            const prevAngle = prev[idx].rotate;
            const nextAngle = (prevAngle + 90) % 360;
            const newPipes = prev.map((pipe, i) =>
                i === idx
                    ? { ...pipe, rotate: nextAngle }
                    : pipe
            );
            if (animRefs.current[idx]) {
                const anim = animRefs.current[idx];
                anim.stopAnimation((currentValue) => {
                    Animated.timing(anim, {
                        toValue: currentValue + 90,
                        duration: 220,
                        useNativeDriver: true,
                    }).start(() => {
                        setDisabledPipes(prev => {
                            const arr = [...prev];
                            arr[idx] = false;
                            return arr;
                        });
                    });
                });
            } else {
                setDisabledPipes(prev => {
                    const arr = [...prev];
                    arr[idx] = false;
                    return arr;
                });
            }
            console.log('Current rotates:', newPipes.map(p => p.rotate));
            if (checkSolution(newPipes)) {
                setTimeout(() => setShowModal(true), 300);
            }
            return newPipes;
        });
    }

    function renderPipe(pipe: typeof pipesLevel1[0], idx: number) {
        const imgSrc = pipeImages[pipe.type];
        const anim = animRefs.current[idx] || new Animated.Value(pipe.rotate);
        return (
            <LiunatuTapzoneld
                disabled={!!disabledPipes[idx]}
                onPress={() => rotatePipe(idx)}
                activeOpacity={0.7}
                key={idx}
                style={{
                    height: cellSize,
                    left: pipe.col * cellSize,
                    top: pipe.row * cellSize,
                    opacity: disabledPipes[idx] ? 0.7 : 1,
                    width: cellSize,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                }}
            >
                <Animated.Image
                    source={imgSrc}
                    style={{
                        height: cellSize,
                        resizeMode: 'contain',
                        width: cellSize,
                        transform: [{
                            rotate: anim.interpolate({
                                inputRange: [0, 360],
                                outputRange: ['0deg', '360deg'],
                                extrapolate: 'extend',
                            }),
                        }],
                    }}
                />
            </LiunatuTapzoneld>
        );
    }

    // Load completed levels from AsyncStorage
    const [completedLevels, setCompletedLevels] = useState<number[]>([]);
    useEffect(() => {
        AsyncStorage.getItem('libwolfenLvlsder').then(val => {
            if (val) setCompletedLevels(JSON.parse(val));
        });
    }, []);

    // Save completed levels to AsyncStorage
    const saveCompletedLevels = async (levelsArr: number[]) => {
        setCompletedLevels(levelsArr);
        await AsyncStorage.setItem('libwolfenLvlsder', JSON.stringify(levelsArr));
    };

    // When modal closes after win, unlock next level
    useEffect(() => {
        if (showModal && !gameOver && selectedLevel) {
            if (!completedLevels.includes(selectedLevel)) {
                const newCompleted = [...completedLevels, selectedLevel].sort((a, b) => a - b);
                saveCompletedLevels(newCompleted);
            }
        }
    }, [showModal, gameOver, selectedLevel]);



    // Level select screen
    if (!started) {
        // Determine level button states
        const getLevelState = (lvl: number) => {
            if (completedLevels.includes(lvl)) return 'completed';
            if (lvl === 1) return 'open';
            if (completedLevels.includes(lvl - 1)) return 'open';
            return 'locked';
        };



        return (
            <RedliViewboxwol style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <RedliViewboxwol style={{
                    alignSelf: 'center',
                    flexWrap: 'wrap',
                    marginBottom: butlohei * 0.04,
                    justifyContent: 'flex-start',
                    width: butlowid * 0.8,
                    flexDirection: 'row',
                }}>
                    {levels.map(lvl => {
                        const state = getLevelState(lvl);
                        let bgColor = '#888';
                        if (state === 'completed') bgColor = '#2ecc40';
                        else if (selectedLevel === lvl) bgColor = '#b85c2a';
                        else if (state === 'open') bgColor = '#fff';
                        else if (state === 'locked') bgColor = '#888';

                        const getColors = (lvlSt) => {
                            switch (lvlSt) {
                                case 'completed':
                                    return ['#40961f52', '#487E1F'];
                                case 'open':
                                    return ['#995515ff', '#993015'];
                                case 'locked':
                                    return ['#909294ff', '#545557'];
                                default:
                                    return ['#888', '#555'];
                            }
                        }

                        const colorsOfLevels = getColors(state);
                        return (
                            <LiunatuTapzoneld
                                key={lvl}
                                onPress={() => {
                                    if (state === 'open' || state === 'completed') setSelectedLevel(lvl);
                                }}
                                disabled={state === 'locked'}
                                style={{
                                    marginBottom: butlohei * 0.03,
                                    marginHorizontal: butlowid * 0.025,
                                    width: butlowid * 0.21,
                                    borderRadius: butlohei * 0.01,
                                    // opacity: state === 'locked' ? 0.5 : 1,
                                    backgroundColor: bgColor,
                                    justifyContent: 'center',
                                    borderWidth: 3,
                                    borderColor: selectedLevel === lvl ? '#ccc' : '#d18c2a',
                                    overflow: 'hidden',
                                    height: butlowid * 0.21,
                                    alignItems: 'center',
                                }}
                            >
                                <Butanedient colors={colorsOfLevels} />
                                <Text style={{
                                    color: '#ef8300ff',
                                    fontSize: butlohei * 0.035,
                                    fontFamily: buflobuifonts.utafloNunitoBla,
                                }}>{lvl}</Text>
                            </LiunatuTapzoneld>
                        );
                    })}
                </RedliViewboxwol>
                <LiunatuTapzoneld
                    onPress={() => {
                        if (selectedLevel) setStarted(true);
                    }}
                    disabled={!selectedLevel}
                    style={{
                        opacity: selectedLevel ? 1 : 0,
                        borderColor: selectedLevel ? '#d18c2a' : 'transparent',
                        borderRadius: butlohei * 0.01,
                        backgroundColor: selectedLevel ? '#b85c2a' : 'transparent',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 2,
                        marginTop: butlohei * 0.04,
                        height: butlohei * 0.07,
                        overflow: 'hidden',
                        width: butlowid * 0.55,
                    }}
                >
                    <Butanedient colors={['#995515ff', '#993015']} />
                    <Text style={{
                        color: '#ef8300ff',
                        fontSize: butlohei * 0.025,
                        fontFamily: buflobuifonts.utafloNunitoBla,
                    }}>
                        {selectedLevel ? `Start Level ${selectedLevel}` : 'Start Level'}
                    </Text>
                </LiunatuTapzoneld>
            </RedliViewboxwol>
        );
    }

    // Game screen
    if (started) {
        return (
            <RedliViewboxwol style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* Timer */}
                <RedliViewboxwol style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: butlohei * 0.04,
                    borderRadius: butlohei * 0.012,
                    alignSelf: 'center',
                    height: butlohei * 0.05,
                    borderColor: '#d18c2a',
                    backgroundColor: '#b85c2a',
                    marginTop: butlohei * 0.08,
                    width: butlowid * 0.28,
                    overflow: 'hidden',
                    borderWidth: 2.5,
                    position: 'absolute',
                }}>
                    <Butanedient colors={['#994a15ff', '#993015']} />
                    <Text style={{
                        color: '#ef9300ff',
                        fontSize: butlohei * 0.028,
                        fontFamily: buflobuifonts.utafloNunitoBla,
                    }}>
                        {`${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, '0')}`}
                    </Text>
                </RedliViewboxwol>
                {/* Pipes grid */}
                <RedliViewboxwol style={{
                    backgroundColor: 'transparent',
                    marginTop: butlohei * 0.09,
                    height: cellSize * 5,
                    width: cellSize * 3,
                }}>
                    {/* Render pipes */}
                    {pipes.map((pipe, idx) => renderPipe(pipe, idx))}
                </RedliViewboxwol>

                <LiunatuTapzoneld
                    style={{
                        borderColor: '#ff9c3a',
                        alignItems: 'center',
                        height: butlohei * 0.07,
                        borderRadius: butlohei * 0.02,
                        borderWidth: 2,
                        bottom: butlohei * 0.04,
                        width: butlohei * 0.07,
                        justifyContent: 'center',
                        position: 'absolute',
                        alignSelf: 'center',
                        backgroundColor: '#a44a1a',
                    }}
                    onPress={() => {
                        setShowModal(false);
                        setStarted(false);
                        setSelectedLevel(null);
                    }}
                >
                    <Image
                        source={require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/gasHome.png')}
                        style={{
                            width: butlowid * 0.057,
                            height: butlowid * 0.057,
                            resizeMode: 'contain',
                        }}
                    />
                </LiunatuTapzoneld>
                {/* Модалка */}
                {showModal && (
                    <RedliViewboxwol style={{
                        zIndex: 10,
                        position: 'absolute',
                        paddingTop: butlohei * 0.12,
                        top: 0,
                        width: butlowid,
                        height: butlohei,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        alignItems: 'center',
                        left: 0,
                    }}>
                        <LinearGradient
                            start={{ x: 0.5, y: 0 }}
                            style={{
                                position: 'absolute',
                                width: butlowid,
                                height: butlohei,
                            }}
                            colors={gameOver ? ['#100604', '#441600'] : ['#0A1004', '#204400']}
                            end={{ x: 0.5, y: 1 }}
                        />
                        <Image
                            source={gameOver
                                ? require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/gameOver.png')
                                : require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/gasDelivered.png')
                            }
                            style={{
                                width: butlowid * 0.91,
                                height: butlohei * 0.21,
                            }}
                            resizeMode='contain'
                        />
                        <Text style={{
                            marginBottom: butlohei * 0.07,
                            fontFamily: buflobuifonts.utafloNunitoBla,
                            fontSize: butlohei * 0.028,
                            fontWeight: '600',
                            textAlign: 'center',
                            color: '#ff9c3a',
                        }}>
                            {gameOver
                                ? 'Gas escaped! Try sealing the pipes faster next time.'
                                : 'Perfect flow! Gas reached its destination.'}
                        </Text>
                        <RedliViewboxwol style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <LiunatuTapzoneld
                                style={{
                                    alignItems: 'center',
                                    width: butlohei * 0.07,
                                    marginRight: butlowid * 0.04,
                                    justifyContent: 'center',
                                    borderColor: '#ff9c3a',
                                    backgroundColor: '#a44a1a',
                                    borderWidth: 2,
                                    borderRadius: butlohei * 0.02,
                                    height: butlohei * 0.07,
                                }}
                                onPress={() => {/* share logic */ }}
                            >
                                <Image
                                    source={require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/uildshare.png')}
                                    style={{
                                        width: butlowid * 0.057,
                                        height: butlowid * 0.057,
                                        resizeMode: 'contain',
                                    }}
                                />
                            </LiunatuTapzoneld>
                            <LiunatuTapzoneld
                                style={{
                                    borderRadius: butlohei * 0.02,
                                    width: butlowid * 0.45,
                                    justifyContent: 'center',
                                    marginHorizontal: butlowid * 0.01,
                                    borderWidth: 2,
                                    borderColor: '#ff9c3a',
                                    backgroundColor: '#a44a1a',
                                    alignItems: 'center',
                                    height: butlohei * 0.07,
                                }}
                                onPress={() => {
                                    setShowModal(false);
                                    setStarted(false);
                                    setSelectedLevel(null);
                                }}
                            >
                                <Text style={{
                                    color: '#ff9c3a',
                                    fontSize: butlohei * 0.028,
                                    fontFamily: buflobuifonts.utafloNunitoBla,
                                }}>
                                    {gameOver ? 'Try Again' : 'Next Level'}
                                </Text>
                            </LiunatuTapzoneld>
                            <LiunatuTapzoneld
                                style={{
                                    borderWidth: 2,
                                    height: butlohei * 0.07,
                                    borderRadius: butlohei * 0.02,
                                    borderColor: '#ff9c3a',
                                    marginLeft: butlowid * 0.04,
                                    justifyContent: 'center',
                                    backgroundColor: '#a44a1a',
                                    alignItems: 'center',
                                    width: butlohei * 0.07,
                                }}
                                onPress={() => {
                                    setShowModal(false);
                                    setStarted(false);
                                    setSelectedLevel(null);
                                }}
                            >
                                <Image
                                    source={require('../ButaneFlowBuilderAssets/ButaneFlowBuilderImages/gasHome.png')}
                                    style={{
                                        width: butlowid * 0.057,
                                        height: butlowid * 0.057,
                                        resizeMode: 'contain',
                                    }}
                                />
                            </LiunatuTapzoneld>
                        </RedliViewboxwol>
                    </RedliViewboxwol>
                )}
            </RedliViewboxwol>
        );
    }

    // Show start button after level select
    return (
        <RedliViewboxwol style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <LiunatuTapzoneld
                onPress={() => setStarted(true)}
                style={{
                    backgroundColor: '#b85c2a',
                    width: butlowid * 0.55,
                    justifyContent: 'center',
                    height: butlohei * 0.07,
                    borderColor: '#d18c2a',
                    alignItems: 'center',
                    borderWidth: 2,
                    borderRadius: butlohei * 0.035,
                }}
            >
                <Text style={{
                    color: '#fff',
                    fontSize: butlohei * 0.032,
                    fontWeight: 'bold',
                }}>
                    {`Start Level ${selectedLevel}`}
                </Text>
            </LiunatuTapzoneld>
        </RedliViewboxwol>
    );
}
