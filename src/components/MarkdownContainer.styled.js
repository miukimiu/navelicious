import styled from "styled-components";

const MarkdownContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  .markdown {
    color: ${props => props.theme.siteTextColor};
    font-size: ${props => props.theme.fontSizeBase};
    line-height: 2;
  }

  .highlight {
    line-height: 1.5;
  }

  .markdown p > img {
    margin: 34px 0;
    box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
  }

  .markdown h1 {
    color: ${props => props.theme.siteHeadingColor};
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 8px;
    font-size: 30px;
    font-variant: tabular-nums;
    line-height: 38px;

    .subtitle {
      margin-left: 12px;
    }
  }

  .markdown h2 {
    font-size: 24px;
    line-height: 32px;
  }

  .markdown h2,
  .markdown h3,
  .markdown h4,
  .markdown h5,
  .markdown h6 {
    color: ${props => props.theme.siteHeadingColor};
    font-variant: tabular-nums;
    margin: 1.6em 0 0.6em;
    font-weight: 600;
    clear: both;
  }

  .markdown h3 {
    font-size: 18px;
  }
  .markdown h4 {
    font-size: 16px;
  }
  .markdown h5 {
    font-size: 14px;
  }
  .markdown h6 {
    font-size: 12px;
  }

  .markdown hr {
    height: 1px;
    border: 0;
    background: ${props => props.theme.siteBorderColorSplit};
    margin: 56px 0;
    clear: both;
  }

  .markdown p,
  .markdown pre {
    margin: 1em 0;
  }

  .markdown ul > li {
    list-style-type: circle;
    margin-left: 20px;
    padding-left: 4px;
    &:empty {
      display: none;
    }
  }

  .markdown ol > li {
    list-style-type: decimal;
    margin-left: 20px;
    padding-left: 4px;
  }

  .markdown ul > li > p,
  .markdown ol > li > p {
    margin: 0.2em 0;
  }

  .markdown code {
    margin: 0 1px;
    background: #f2f4f5;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
    border: 1px solid #eee;
  }

  .markdown pre {
    border-radius: ${props => props.theme.borderRadiusSm};
    background: #f2f4f5;
  }

  .markdown pre code {
    border: none;
    background: #f2f4f5;
    margin: 0;
    padding: 0;
    font-size: ${props => props.theme.fontSizeBase};
    color: ${props => props.theme.siteTextColor};
    overflow: auto;
  }

  .markdown strong,
  .markdown b {
    font-weight: 500;
  }

  .markdown > table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid ${props => props.theme.siteBorderColorSplit};
    width: 100%;
    margin: 8px 0 16px;
  }

  .markdown > table th {
    white-space: nowrap;
    color: #5c6b77;
    font-weight: 500;
    background: rgba(0, 0, 0, 0.02);
  }

  .markdown > table th,
  .markdown > table td {
    border: 1px solid ${props => props.theme.siteBorderColorSplit};
    padding: 16px 24px;
    text-align: left;
  }

  .markdown blockquote {
    font-size: 90%;
    color: ${props => props.theme.siteTextColorSecondary};
    border-left: 4px solid ${props => props.theme.siteBorderColorSplit};
    padding-left: 0.8em;
    margin: 1em 0;
  }

  .markdown blockquote p {
    margin: 0;
  }

  .markdown > br,
  .markdown > p > br {
    clear: both;
  }

  .markdown table {
    font-size: ${props => props.theme.fontSizeBase};
    line-height: ${props => props.theme.lineHeightBase};
    border-width: 0;
    margin: 2em 0;
    th,
    td {
      padding: 14px 16px;
      border-width: 1px 0;
      border-color: ${props => props.theme.borderColorSplit};
    }
    th {
      border-width: 0 0 2px 0;
    }
    td:first-child {
      font-weight: 600;
      width: 20%;
      color: ${props => props.theme.secondary};
    }
    td:nth-child(3) {
      width: 22%;
      font-size: ${props => props.theme.fontSizeBase};
      color: ${props => props.theme.secondary};
      word-break: break-all;
    }
    td:last-child {
      width: 13%;
      font-size: ${props => props.theme.fontSizeBase};
    }
  }
`;

export default MarkdownContainer;
