import React from "react";

export default function SideBar(props) {
    
    // const [time,setTime] = React.useState(new Date());

    // React.useEffect(() => {
    //     const timer = setInterval(()=>setTime(new Date()), 1000 )
    //     return function cleanup() {
    //         clearInterval(timer)
    //     }
    // });

    const handleClick = () => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return props.logTime(time)
    }

  return (
      <nav>
        <button onClick={handleClick} className="button">Click here</button>
      </nav>
  );
}
