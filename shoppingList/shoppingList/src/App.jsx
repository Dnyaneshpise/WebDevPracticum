import "./App.css";

import ShoppingList from "./shoppingList";
import PropertyList from "../PropertyList";
import ColorBox from "./ColorBox";
import 
ColorBoxGrid from "./ColorBoxGrid";

import "./Colorbox.css";
import ScoreKeeper from "./Scorekeeper";
import Lucky7 from "./Lucky7";
import LuckyN from "./LuckyN";
import BoxGrid from "./BoxGrid";
import FetchQuote from "./FetchQuote";
import ProfileViewerWithSearch from "./ProfileViewerWithSearch";
const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "Mongo", quantity: 5, completed: true },
  { id: 3, item: "berry", quantity: 7, completed: false },
  { id: 4, item: "Orange", quantity: 2, completed: true },
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];
function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}
function App() {
  return (
    <>
      <ScoreKeeper numPlayers={3} target={5} />
      <hr />
      
      <FetchQuote />
      <hr />
      <Lucky7 />
      <hr />
      <PropertyList properties={properties} />
      <hr />
      <ProfileViewerWithSearch />
      <hr />
      <LuckyN winCheck={allSameValue} />
      <hr />
      <BoxGrid />
      <hr />
      <ColorBoxGrid colors={colors} />
      <hr />
      <div>
      <ShoppingList />
      </div>
      <hr />
      <h5>END</h5>
    </>
  );
}

export default App;
