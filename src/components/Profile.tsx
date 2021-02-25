import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';



export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/MarlonMascarenhas.png" alt="Marlon mascarenhas" />
        
            <div>
                <strong>Marlon Mascarenhas</strong>.
                <p>
                    <img src="icons/level.svg" alt="levelUp" />
                    Level {level}</p>
            </div>
        </div>
    );
}