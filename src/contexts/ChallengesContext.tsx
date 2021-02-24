import { create } from 'domain';
import { createContext, useState, ReactNode } from 'react';

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
}
interface ChallengesPoviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesPoviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    
    function levelUp() {
        console.log('oi')
    }
    function startNewChallenge(){
        console.log('new challenge')
    }

    return (
        <ChallengesContext.Provider value={{
            level, 
            currentExperience, 
            challengesCompleted,
            levelUp,
            startNewChallenge,
            }}>
            {children}
        </ChallengesContext.Provider>
    )
}