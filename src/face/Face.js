import './Face.css';
import { arc } from 'd3';

function Face() {
    const width = 960
    const height = 500
    const centerX = width / 2
    const centerY = height / 2
    const strokeWidth = 10
    const radius = centerY - strokeWidth / 2
    const eyeOffsetX = 100
    const eyeOffsetY = 100
    const eyeRadius = 50
    const mouthWidth = 20
    const mouthRadius = 130

    const mouthArc = arc()
        .innerRadius(mouthRadius)
        .outerRadius(mouthRadius + mouthWidth)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * 3 / 2)

    return (
        <div className="Face">
            <svg width={width} height={height}>
                <g transform={`translate(${centerX},${centerY})`}>
                    <circle
                        r={radius}
                        fill="yellow"
                        stroke="black"
                        strokeWidth={strokeWidth} />

                    <circle
                        cx={-eyeOffsetX}
                        cy={-eyeOffsetY}
                        r={eyeRadius} />

                    <circle
                        cx={eyeOffsetX}
                        cy={-eyeOffsetY}
                        r={eyeRadius} />

                    <path d={mouthArc()} />
                </g>
            </svg>
        </div>
    );
}

export default Face;
