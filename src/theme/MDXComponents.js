import MDXComponents from '@theme-original/MDXComponents';
import Box from '@site/src/components/Box';
import TutorialsFeatured from '@site/src/components/TutorialsFeatured';
import tabs from '@theme/Tabs';
import tabItem from '@theme/TabItem';
import Card from '@site/src/components/Card/Card';
import FeatureCard from '@site/src/components/Card/FeatureCard';
import CardContainer from '@site/src/components/Card/CardContainer';
import Button from '@site/src/components/Button';
// import outlineCard from '@site/src/components/Card/outlineCard';


export default {
  ...MDXComponents,
  box: Box,
  tutorialsFeatured: TutorialsFeatured,
  Tabs: tabs,
  TabItem: tabItem,
  Card,
  CardContainer,
  FeatureCard,
  Button,
};