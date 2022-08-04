export type Level  = {
    title: string;
    color: string;
    icon: 'up' | 'down';
    imc: number[]
    yourImc?: number | undefined;
}

export const levels: Level[] = [
    { title: 'magreza', color:'#96a3ab' , icon:'down', imc: [0, 18.5] },
    { title:'normal', color:'#0ead69', icon:'up', imc: [18.6, 24.9] },
    { title:'sobrepeso', color:'#22d3ee', icon:'down', imc: [25,30] },
    { title:'obeso', color:'#c3423f', icon: 'down', imc: [30.1, 99] },
];

export const calculateImc = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for (let i in levels) {
        if (imc >= levels [i].imc[0] && 
            imc < levels [i].imc[1]) {
                return levels[i];

        }
    }

    return null;
}