import React from 'react';
import tokens from '@contentful/forma-36-tokens';
import { navigate } from 'gatsby';
import { css } from '@emotion/core';
import {
  Subheading,
  Paragraph,
  Card,
} from '@contentful/forma-36-react-components';

const styles = {
  wrapper: css`
    width: 960px;
    margin: 0 auto;
    padding: 0 ${tokens.spacingL} ${tokens.spacingL};
    display: grid;
    grid-column-gap: ${tokens.spacingM};
    grid-row-gap: ${tokens.spacingM};
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `,

  icon: css`
    height: 100px;
    margin-bottom: ${tokens.spacingM};
    width: 100%;
    background: #eee;
  `,
};

const handleClick = path => {
  navigate(path);
};

const ChildSections = ({ items }) => (
  <div css={styles.wrapper}>
    {items.map((item, index) => {
      return (
        <Card onClick={() => handleClick(item.path)} key={index}>
          <div css={styles.icon} />
          <Subheading>{item.title}</Subheading>
          {item.desc && <Paragraph>{item.desc}</Paragraph>}
        </Card>
      );
    })}
  </div>
);

export default ChildSections;