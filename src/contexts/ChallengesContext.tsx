import { create } from 'domain';
import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({});

interface ChallengesPoviderProps {
    children: ReactNode;
}

export function ChallengesProvider({children}: ChallengesPoviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    
    return (
        <ChallengesContext.Provider value={{level, currentExperience, challengesCompleted}}>
            {children}
        </ChallengesContext.Provider>
    )
}