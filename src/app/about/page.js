import ButtonSample from "../../components/UI/ButtonSample"
import CardSample from "../../components/UI/CardSample"
import TwoColumnSample from "../../components/layout/TwoColumnSample"
import MenuSample from "../../components/UI/MenuSample"

export default function About() {

  const boxClass = "box"

  return (
    <TwoColumnSample>
    <div className="{boxClass}">
      <p style={{color:"#333",backgroundColor: "pink" }}>段落が入ります。段落が入ります。<br />段落が入ります。</p>
    </div>
    <ButtonSample text="ボタン" type="submit" />
    <hr />
    <CardSample />
    <hr />
    <MenuSample />
    <div></div>
    </TwoColumnSample>
  );
}

