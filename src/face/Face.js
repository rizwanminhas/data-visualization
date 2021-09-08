import './Face.css';
import { Eyes } from './Eyes'
import { Mouth } from './Mouth'

function Face({ width, height, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, mouthWidth, mouthRadius }) {
    const centerX = width / 2
    const centerY = height / 2
    const radius = centerY - strokeWidth / 2
    const eyeX = eyeOffsetX || parseInt(Math.min(width, height) * 0.2)
    const eyeY = eyeOffsetY || parseInt(Math.min(width, height) * 0.2)

    return (
        <svg class="face" width={width} height={height}>
            <g transform={`translate(${centerX},${centerY})`}>
                <circle
                    r={radius}
                    fill="yellow"
                    stroke="black"
                    strokeWidth={strokeWidth} />

                <Eyes eyeOffsetX={eyeX} eyeOffsetY={eyeY} eyeRadius={eyeRadius} />

                <Mouth mouthWidth={mouthWidth} mouthRadius={mouthRadius} />
            </g>
        </svg>
    );
}

export default Face;
