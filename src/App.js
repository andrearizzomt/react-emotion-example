/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Heading = styled("h1")`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.fg};
  font-size: ${(props) => props.fntsz};
  text-align: ${(props) => props.txtalg};
  padding: ${(props) => props.pd};
`;

// extending styled components using withComponent
const Subheading = Heading.withComponent("h2");

const Quote = styled("blockquote")((props) => ({
  fontSize: 20,
  backgroundColor: "black",
  color: "blue",
  textAlign: "center",
}));

const Quote2 = styled("blockquote")(
  {
    fontWeight: 400,
  },
  (props) => ({
    fontWeight: props.weight,
  })
);

const Button = styled("button")`
  cursor: pointer;
  width: ${(props) => (props.primary ? "200px" : "300px")};
  color: ${(props) => (props.primary ? "black" : "white")};
  background-color: ${(props) => (props.primary ? "white" : "black")};
  border-radius: ${(props) => (props.primary ? "0px" : "5px")};
  &:hover {
    background-color: ${(props) => (props.primary ? "lime" : "red")};
  }
`;

const Container = styled("div")((props) => ({
  marginTop: "20px",
  display: "flex",
  flexDirection: props.column && "column",
  gap: "10px",
  alignItems: "center",
}));

function App() {
  return (
    <div>
      {/* object example */}
      <div
        css={css({
          margin: 10,
          padding: 10,
          backgroundColor: "green",
        })}
      >
        This is an example of <code>`css`</code> using an object.
      </div>

      {/* tagged template literal example */}
      <div
        css={css`
          margin: 10px;
          padding: 10px;
          background-color: red;
        `}
      >
        This is an example of <code>`css`</code> using a tagged template
        literal.
      </div>

      {/* styled component using props */}
      <Heading bg="#008f68" fg="#fae042" fntsz="1rem" txtalg="center" pd="20px">
        H1 heading with a green background and small yellow text centered with
        and large amount of padding.
      </Heading>

      <Subheading>Subheading with default colors.</Subheading>
      <Subheading fg="#6db65b">Subheading with light green text.</Subheading>
      <Subheading bg="#6db65b">
        Subheading with light green background.
      </Subheading>

      <Quote>
        This is a blockquote using styles as an object instead of as a string
      </Quote>

      {/* default fontWeight value */}
      <Quote2>
        This is a blockquote using styles as an object instead of as a string
        and even include an object of default styles that can be optionally set
        when using the component. - default fontWeight value
      </Quote2>

      {/* overridden fontWeight value using the weight prop */}
      <Quote2 weight={700}>
        This is a blockquote using styles as an object instead of as a string
        and even include an object of default styles that can be optionally set
        when using the component. - overridden fontWeight value using the weight
        prop
      </Quote2>

      <Button>Primary False</Button>
      <Button primary>Primary True</Button>

      <Container column>
        <Button primary>Primary True</Button>
        <Button>Primary False</Button>
      </Container>
    </div>
  );
}

export default App;
