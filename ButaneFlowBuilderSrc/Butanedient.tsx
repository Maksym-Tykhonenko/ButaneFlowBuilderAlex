import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

type ButanedientProps = {
    colors?: [string, string];
};

export default function Butanedient({ colors }: ButanedientProps) {
    const gradientColors = colors ?? ['#100604', '#441600'];
    return (
        <LinearGradient
            colors={gradientColors}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
            }}
        />
    );
}
