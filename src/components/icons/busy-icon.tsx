export default function ProcessingSVG() {
    return (
        <>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
            >
                <circle cx="50" cy="50" r="40" strokeWidth="8" strokeOpacity="0.2" />
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="8"
                    strokeDasharray="62.8 62.8"
                    strokeLinecap="round"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 50 50"
                        to="360 50 50"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>
        </>
    );
}
