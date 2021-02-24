import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);
    
    return (
        <div className={styles.ChallengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src= {`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={resetChallenge}
                        >Falhei</button>

                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                        >Completei</button>
                    </footer>
                </div>
            ) : (
                
                    <div className={styles.challengeNotActive}>
                        <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de level completando desafios
                        </p>
                    </div>
                
            )}
        </div>
    )
}