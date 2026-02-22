import styles from './styles.module.css';

export default function Profile({ github, name, role }) {
    return (
        <a className={styles.profile} href={`https://github.com/${github}`}>
            <img alt={name} src={`https://github.com/${github}.png`} className={styles.profileIcon} />
            <div>
                <h2 className={styles.profileName}>{name}</h2>
                <small title={role}>{role}</small>
            </div>
        </a>
    );
}
