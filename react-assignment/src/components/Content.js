import React from "react";
import SideBar from "./SideBar";
import Footer from './Footer';

let timeData = [];

export default function Content() {

    const [time, setTime] = React.useState();
    const [count, setCount] = React.useState(0);

    const logTime = (data) => {
       setTime(data);
       setCount(count +1);
       timeData.push(data);
    }

  return (
    <div>
      <section>
        <SideBar logTime={logTime} />
        <article>
            {
                timeData.map( (data, index) => {
                    return <h3 id={index}> {`You clicked at ${data}`} </h3>
                })
            }
        </article>
      </section>
      <Footer count={count}/>
    </div>
  );
}
