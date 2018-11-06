import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import MarkdownContainer from "./MarkdownContainer.styled";

const initialSource = `

## Navelicious

Sometimes you need that fancy navbar!

## API

\`\`\`html
<Navbar justify="space-between" background="">
  <NavbarCustomSection>
    <YourLogo />
  </NavbarCustomSection>
  <NavbarSection
    ease="easeOutExpo"
    duration={500}
    dropdownBackground="white"
    titleColor="white"
    arrowsColor="white"
  >
    <NavbarItem title="Products">
      <YourCustomContent />
    </NavbarItem>
    <NavbarItem title="On Click" onClick={this.yourClickFunction} />
    <NavbarItem title="Link" linkTo="/" />
  </NavbarSection>
</Navbar>
\`\`\`

### Navbar

| Param | Description | Type | Default value |
| ----- | ----------- | ---- | ------------- |
| background | background color | string | #999 |
| justify | justify the content inside the navbar | Any value of the CSS syntax justify-content | center |
| className | ClassName | string |  |

### NavbarCustomSection

| Param | Description | Type | Default value |
| ----- | ----------- | ---- | ------------- |
| justify | justify the content inside the section | Any value of the CSS syntax justify-content | center |


### NavbarSection

| Param | Description | Type | Default value |
| ----- | ----------- | ---- | ------------- |
| duration | justify the content inside the section |  Any value of the CSS Syntax Justify content | center |
| ease | ClassName | string |  |
| activeColor | ClassName | string |  |
| titleColor | ClassName | string |  |
| dropdownBackground | ClassName | string |  |

### NavbarItem

| Param | Description | Type | Default value |
| ----- | ----------- | ---- | ------------- |
| children | sub menus or sub menu items | ReactNode |  |
| title | title of the sub menu | string |  |
| onClick | callback executed when the sub menu title is clicked | function({ key, domEvent }) |  |
| linkTo | | | |
| className | | | |
| active | condition to check if the link is active or not | boolean | false |
`;

const Api = () => (
  <MarkdownContainer>
    <ReactMarkdown
      source={initialSource}
      escapeHtml={false}
      className="markdown"
    />
  </MarkdownContainer>
);

export default Api;
