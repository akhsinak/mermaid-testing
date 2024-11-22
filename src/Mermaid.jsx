import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import PropTypes from 'prop-types';

const MermaidChart = ({ chart }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: true,
            securityLevel: 'loose'
        });
        // This will re-render the Mermaid diagram after the component mounts.
        mermaid.contentLoaded(); 
    }, [chart]);

    return (
        <div ref={chartRef}>
            <p>Mermaid Rendered</p>
            <pre className="mermaid">
                {chart}
            </pre>
        </div>
    );
};

MermaidChart.propTypes = {
    chart: PropTypes.string.isRequired,
};

export default MermaidChart;

