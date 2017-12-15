import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import ShowOnBases from '../app/components/ShowOnBases/OnBases';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}><span role="img" aria-label="emoticons">😀 😎 👍 💯</span></Button>);

storiesOf('OnBases', module)
  .add('clean bases', () => <ShowOnBases bases={[false, false, false]}></ShowOnBases>)
  .add('first base', () => <ShowOnBases bases={[true, false, false]}></ShowOnBases>)
  .add('second base', () => <ShowOnBases bases={[false, true, false]}></ShowOnBases>)
  .add('third base', () => <ShowOnBases bases={[false, false, true]}></ShowOnBases>)
  .add('first and second onbase', () => <ShowOnBases bases={[true, true, false]}></ShowOnBases>)
  .add('first and third onbase', () => <ShowOnBases bases={[true, false, true]}></ShowOnBases>)
  .add('second and third onbase', () => <ShowOnBases bases={[false, true, true]}></ShowOnBases>)
  .add('full onbase', () => <ShowOnBases bases={[true, true, true]}></ShowOnBases>);
