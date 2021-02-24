import { create } from 'domain';
import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';
interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge,
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}
interface ChallengesPoviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesPoviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    

    const [activeChallenge, setActiveChallenge] = useState(null);
    function levelUp() {
        console.log('oi')
    }
    
    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge (){
        setActiveChallenge(null);

    }
    return (
        <ChallengesContext.Provider value={{
            level, 
            currentExperience, 
            challengesCompleted,
            levelUp,
            startNewChallenge,
            activeChallenge,
            resetChallenge
            }}>
            {children}
        </ChallengesContext.Provider>
    )
}