import './ChartItem.css'

export default function ChartItem({ month, val, maxVal }) {
    const fillHeight = maxVal > 0 ? Math.round((val / maxVal) * 100) : 0
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{
                    height: fillHeight + '%'
                }} />
            </div>
            <div className='chart-bar__label'>{month}</div>
        </div>
    )
}