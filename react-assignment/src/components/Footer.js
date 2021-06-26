import React from "react";

export default function Footer({count}) {

  return (
    <footer>
      <h3> {count > 0 ? `You clicked ${count} times`: ''}</h3>
    </footer>
  );
}
