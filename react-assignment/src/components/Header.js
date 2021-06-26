import React from "react";
import Logo from './Logo';

export default function Header() {

  const [date,setDate] = React.useState(new Date());
    
  React.useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  });
  
  return (
    <div className="header" style={{ display: "flex" }}>
      <Logo />

      <div style = {{ display: 'block', margin: '0 auto'}}>
        <h2>{`Current time is: ${date.toLocaleTimeString()}`}</h2>
      </div>
    </div>
  );
}
