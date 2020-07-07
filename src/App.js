import React, { useState } from "react";
import styled from "styled-components";
import TileGroup from "./TileGroup";
import AddButton from "./AddButton";
import { getFunName, getRandomReadTime, getArticleType } from "./helpers";

const Container = styled.div`
  display: grid;
  max-width: calc(100% - 120px);
  margin: 50px auto;

  @media (max-width: 768px) {
    max-width: calc(100% - 32px);
  }
`

const StyledH1 = styled.h1`
  color: #ebebeb;
  font-size: 5em;
  font-weight: 800;
  font-family: "Work Sans", -apple-system, ".SFNSText-Regular", "San Francisco",
    "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif !important;
  text-transform: uppercase;
  max-width: 1000px;

  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

const IntroText = styled.div`
  color: yellow;
  font-family: "Work Sans", -apple-system, ".SFNSText-Regular", "San Francisco",
    "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif !important;
  font-weight: 500;
  font-size: 1em;
  line-height: 1.45em;
  max-width: 500px;
  margin: auto;
`;

const App = () => {

  const [items, setItems] = useState([
    {
      id: 0,
      title: "Giraffe In Paris",
      subtitle: "New Article",
      readTime: "8"
    }
  ]);

  const addItem = () => {
    const timestamp = Date.now();
    setItems([
      ...items,
      {
        id: timestamp,
        title: getFunName(),
        subtitle: getArticleType(),
        readTime: getRandomReadTime()
      }
    ]);
  };

  const removeItem = id => {
    console.log("here is the " + id);
    // remove the clicked route from the array using an array filter
    // pass in each item via the filter and check if it doesn't equal
    // the id of the clicked item
    const newItems = [...items].filter(item => {
      return item.id !== id;
    });

    setItems(newItems);
  };

  return (
    <Container>
      <StyledH1>Dirty Transition Group Example - Yeeha</StyledH1>
      <IntroText>
        Here is a test of the transition group and styled components, wrapped
        into one. The point is to show how you can transition in elements and
        out elements by wrapping them in the transition group. You can do this
        using TransitionGroup and CSSTransition.
      </IntroText>
      <AddButton label={"Add an Item"} addItem={addItem}></AddButton>
      <TileGroup items={items} removeItem={removeItem}></TileGroup>
    </Container>
  );
};

export default App;
