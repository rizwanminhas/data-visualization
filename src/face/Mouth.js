import { arc } from 'd3';


export function Mouth({ mouthWidth, mouthRadius }) {
    const smile = arc()
        .innerRadius(mouthRadius)
        .outerRadius(mouthRadius + mouthWidth)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * 3 / 2)

    return (
        <path d={smile()} />
    )
}