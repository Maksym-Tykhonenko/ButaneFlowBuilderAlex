import {
    TouchableOpacity as TapBoxiew,
    Dimensions as Lowdimens,
    Text as Uiltextane,
    View as WolantViewboxild,
} from 'react-native';
import Butanedient from '../Butanedient';
import { buflobuifonts } from '../buflobuifonts';
import React from 'react';

export default function DieflowChooseNextRoute({ setCurrentSectionKey }: { setCurrentSectionKey: (key: string) => void; }) {
    const { width: flowidth, height: floheight } = Lowdimens.get('window');

    const buttonMargin = floheight * 0.012;

    const buttons = [
        { label: 'Play', pagtoroute: 'Butane Flow Build Tubes' },
        { label: 'Collection of Gas Tanks' },
        { label: 'Gas Facts' },
        { label: 'Saved', pagtoroute: 'Saved of vuta facts' },
    ];

    return (
        <WolantViewboxild style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end', alignItems: 'center',
            paddingBottom: floheight * 0.08
         }}>
            {buttons.map((btn, idx) => (
                <TapBoxiew
                    key={btn.label}
                    style={{
                        borderWidth: flowidth * 0.012,
                        overflow: 'hidden',
                        backgroundColor: '#2d1400',
                        borderRadius: flowidth * 0.04,
                        height: floheight * 0.1,
                        marginBottom: idx === buttons.length - 1 ? 0 : buttonMargin,
                        width: flowidth * 0.8,
                        justifyContent: 'center',
                        borderColor: '#ef6001ff',
                        alignItems: 'center',
                    }}
                    onPress={() => setCurrentSectionKey(btn.pagtoroute ? btn.pagtoroute : btn.label)}
                >
                    <Butanedient />
                    <Uiltextane style={{ color: '#ef8300ff', fontSize: flowidth * 0.057,
                        fontFamily: buflobuifonts.utafloNunitoBla,
                     }}>
                        {btn.label}
                    </Uiltextane>
                </TapBoxiew>
            ))}
        </WolantViewboxild>
    );
}
