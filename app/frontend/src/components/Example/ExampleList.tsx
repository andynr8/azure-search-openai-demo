import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "Wie ist der Umgang mit privaten Daten auf group24 Geräten geregelt ?",
    "Was ist beim Beantragung und Genehmigun von Berechtigungen zu berücksichtigen ?",
    "Wie melde ich einen Informationssicherheitsvorfall?"
];

const GPT4V_EXAMPLES: string[] = [
    "Vergleiche die Informationssicherheitslage von 2022 und 2023.",
    "Wie ist der erwartete Trend der Entwicklung von Schadcode für die nächsten 5 Jahre?",
    "Kannst du erläutern, wie Unternehmen sich am besten vor Cyberattacken schützen können?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
