import "./App.css";
import Header from "./packages/headers/Header";
import OverlayStart from "./packages/overlays/OverlayStart";
import OverlayEnd from "./packages/overlays/OverlayEnd";
import OverlayWin from "./packages/overlays/OverlayWin";
import CardSection from "./layouts/cardsSection/CardSection";
import UseGameContex from "./hooks/UseGameContex";
import ManageTime, { TimeContext } from "./hooks/ManageTime";

function App() {
  return (
    <UseGameContex>
      <ManageTime>
        <Header />
        <OverlayStart />
        <OverlayEnd />
        <OverlayWin />
        <CardSection />
      </ManageTime>
    </UseGameContex>
  );
}

export default App;
