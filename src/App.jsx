// import React from 'react';
import MermaidChart from './Mermaid';
import { useState, useEffect } from 'react';
import "./App.css"

const App = () => {

  const chart3Initial = `
%%{init: {'flowchart': {'curve': 'linear'}}}%%
graph TD;
        __start__([<p>__start__</p>]):::first
        web_search(web_search )
        retrieve(retrieve)
        grade_documents(grade_documents)
        generate(generate)
        transform_query(transform_query)
        finance_agent(finance_agent)
        reasoning_agent(reasoning_agent)
        __end__([<p>__end__</p>]):::last
        finance_agent --> reasoning_agent;
        reasoning_agent --> generate;
        retrieve --> grade_documents;
        transform_query --> retrieve;
        web_search --> generate;
        __start__ -.-> web_search;
        __start__ -. &nbsp;vectorstore&nbsp; .-> retrieve;
        grade_documents -.-> transform_query;
        grade_documents -. &nbsp;not_answerable&nbsp; .-> finance_agent;
        grade_documents -.-> generate;
        generate -. &nbsp;useful&nbsp; .-> __end__;
        generate -. &nbsp;not useful&nbsp; .-> transform_query;
        generate -. &nbsp;stop&nbsp; .-> __end__;
        generate -. &nbsp;not supported&nbsp; .-> generate;
        classDef default fill:#f2f0ff,line-height:1.2
        classDef first fill-opacity:0
        classDef last fill:#bfb6fc
        style grade_documents fill:#ddfa12
`

  const [chart3, setChart3] = useState(chart3Initial);

  const addLineToChart = (newLine) => {
    setChart3((prevChart) => `${prevChart}${newLine}`);
  };

  // addLineToChart("style grade_documents fill:#ddfa12")

  useEffect(() => {
    addLineToChart("style generate fill:#ddfa12");
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <h2>Mermaid Diagram</h2>
      {/* <pre>{chart3}</pre> */}
      <MermaidChart chart={chart3} />
    </div >
  );
};

export default App;
