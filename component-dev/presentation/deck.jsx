import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";
import SlideNotes from "./slide-notes";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg"),
  cyborg: require("./cyborg-ape.png"),
  webcomponentsLogo: require("./logos/webcomponents-logo.png"),
  brickLogo: require("./logos/brick-logo.png"),
  polymerLogo: require("./logos/polymer-logo.png")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Component Based Development
          </Heading>
          <Heading size={1} fit caps margin="-20px 0px">
            A ReactJS Presentation Library
          </Heading>
          <Heading size={2} fit caps textColor="black">
            Where You Can Write Your Decks In JSX
          </Heading>
          <Link href="https://github.com/FormidableLabs/spectacle">
            <Text bold caps textColor="tertiary">View on Github</Text>
          </Link>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="black" notes={SlideNotes.chimpSlide}>
          <Image src={images.cyborg.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Web Components? Polymer? React?
          </Heading>
        </Slide>

        <Slide
          transition={["spin"]}
          bgColor="secondary"
          bgImage={images.webcomponentsLogo.replace("/", "")}
          notes={SlideNotes.alexRussell}
        >
          <Text>Embed conference video?</Text>
        </Slide>

        <Slide
          transition={["spin", "fade"]}
          bgColor="secondary"
          bgImage={images.brickLogo.replace("/", "")}
          notes={SlideNotes.brickOverview}
        >
          <Text>Slide on Mozilla Brick</Text>
        </Slide>

        <Slide
          transition={["zoom", "fade"]}
          bgColor="primary"
          notes={SlideNotes.brickTemplateExample}
        >
          <Text textAlign="left" textSize={15} bold>Brick Template:</Text>
          <CodePane
            lang="html"
            source={require("raw!./snippets/brick-button.html")}
            margin="0 auto"/>
        </Slide>

        <Slide
          transition={["zoom", "fade"]}
          bgColor="primary"
          notes={SlideNotes.brickCodeExample}
        >
          <Text textAlign="left" textSize={15} bold>Brick Component Behavior:</Text>
          <CodePane
            lang="javascript" fontSize={10}
            source={require("raw!./snippets/brick-button.js")}
            margin="0 auto"/>
        </Slide>

        <Slide
          transition={["spin", "fade"]}
          bgColor="secondary"
          bgImage={images.polymerLogo.replace("/", "")}
          notes={SlideNotes.polymerOverview}
        >
          <Text>Slide on Google Polymer</Text>
        </Slide>

        <Slide
          transition={["zoom", "fade"]}
          bgColor="primary"
          notes={SlideNotes.polymerExample}
        >
          <Text textAlign="left" textSize={25} bold>Definition:</Text>
          <CodePane
            lang="html"
            source={require("raw!./snippets/polymer-definition.html")}
            margin="20px auto"/>
          <Appear>
          <Text textAlign="left" textSize={25} bold>Usage:</Text>
          <CodePane
            lang="html"
            source={require("raw!./snippets/polymer-usage.html")}
            margin="20px auto"/>
          </Appear>
        </Slide>

        <Slide
          transition={["zoom", "fade"]}
          bgColor="primary"
          notes="Polymer Example"
        >
          <Appear fid="6">
            <Layout>
              <Fill>
                <Text textAlign="left" bgColor="white" margin={10}>One</Text>
              </Fill>
              <Fill>
                <Text bgColor="white" margin={10}>Two</Text>
              </Fill>
              <Fill>
                <Text textAlign="right" bgColor="white" margin={10}>Three</Text>
              </Fill>
            </Layout>
          </Appear>
          <Appear fid="5">
            <Layout>
              <Fill>
                <Text bgColor="white" margin={10}>Four</Text>
              </Fill>
              <Fill>
                <Text bgColor="white" margin={10}>Five</Text>
              </Fill>
            </Layout>
          </Appear>
          <Layout>
            <Fill>
              <Appear fid="4">
                <Text bgColor="white" margin={10}>Six</Text>
              </Appear>
            </Fill>
            <Fill>
              <Appear fid="3">
                <Text bgColor="white" margin={10}>Seven</Text>
              </Appear>
            </Fill>
            <Fill>
              <Appear fid="2">
                <Text bgColor="white" margin={10}>Eight</Text>
              </Appear>
            </Fill>
            <Fill>
              <Appear fid="1">
                <Text bgColor="white" margin={10}>Nine</Text>
              </Appear>
            </Fill>
          </Layout>
          <Appear fid="7">
            <Layout>
              <Fill>
                <Text bgColor="white" margin={10}>Ten</Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Full Width
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Background Imagery
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">Inline style based theme system</Appear></ListItem>
            <ListItem><Appear fid="2">Autofit text</Appear></ListItem>
            <ListItem><Appear fid="3">Flexbox layout system</Appear></ListItem>
            <ListItem><Appear fid="4">React-Router navigation</Appear></ListItem>
            <ListItem><Appear fid="5">PDF export</Appear></ListItem>
            <ListItem><Appear fid="6">And...</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>

        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Back to main site
          </Heading>
          <Link href="http://code-chimp.info">&#171; thataway</Link>
        </Slide>
      </Deck>
    );
  }
}
