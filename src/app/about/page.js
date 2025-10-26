import ButtonSample from "../../components/UI/ButtonSample"
import CardSample from "../../components/UI/CardSample"

export default function About() {

  const boxClass = "box"

  return (
    <>
    <div className="{boxClass}">
      <p style={{color:"#333",backgroundColor: "pink" }}>段落が入ります。段落が入ります。<br />段落が入ります。</p>
    </div>
    <ButtonSample text="ボタン" type="submit" />
    <hr />
    <CardSample />
    <div></div>
    </>
  );
}

