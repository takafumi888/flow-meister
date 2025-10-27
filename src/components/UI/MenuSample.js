"use client"

import { useState } from "react"

export default function MenuSample(props) {
  const [isOpen, setIsOpen] = useState(false)

  function handleButtonClick() {
    alert(isOpen)
  }

  return (
   
    <button type="button" onClick={handleButtonClick}>ボタン</button>
   
  );
}
