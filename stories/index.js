// @flow

import React from 'react';
import { StyleSheet, View, Text, Image } from '../src';

const { storiesOf, action } = Storybook;
const { withKnobs, text } = Storybook.addons.Knobs;

const styles = StyleSheet.create({
  view: {
    height: 100,
    width: '100%',
    backgroundColor: 'tomato',
    transition: 'all 200ms linear',
    ':hover': {
      backgroundColor: 'gold',
    },
  },
});

storiesOf('View', module)
  .add('Hover', () =>
    <View
      pointerEvents="box-only"
      style={[
        styles.view,
        {
          backgroundColor: 'turquoise',
          marginVertical: 25,
          marginHorizontal: 25,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
    >
      <Text accessibilityRole="link">HELLO</Text>
      <Text onPress={action('clicked')}>😀 😎 👍 💯</Text>
    </View>
  );

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('With text', () => (
    <Text onPress={action('clicked')}>{text('Text', 'Hello Text')}</Text>
  ))
  .add('With some emoji', () => (
    <Text onPress={action('clicked')}>😀 😎 👍 💯</Text>
  ));

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .add('Plain', () =>
    <View>
      <Image
        source={{
          uri: 'http://facebook.github.io/origami/public/images/birds.jpg',
          width: 50,
          height: 50,
        }}
      />
      <Image
        source={{
          uri: 'http://facebook.github.io/origami/public/images/birds.jpg',
          width: 50,
          height: 50,
        }}
        style={{
          borderRadius: 9999,
        }}
      />
    </View>
  )
  .add('With text', () =>
    <Image
      accessibilityLabel="an image"
      source={{
        uri: 'http://facebook.github.io/origami/public/images/birds.jpg',
        width: 200,
        height: 200,
      }}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: '#fff' }}>HELLO</Text>
    </Image>
  )
  .add('With height', () =>
    <Image
      accessibilityLabel="an image"
      source={{
        uri: 'http://facebook.github.io/origami/public/images/birds.jpg',
      }}
      style={{
        height: '65vh',
      }}
    />
  )
  .add('With aspect ratio and no dimensions', () =>
    <div
      style={{
        maxWidth: 500,
      }}
    >
      <Image
        accessibilityLabel="an image"
        source={{
          uri: 'http://facebook.github.io/origami/public/images/birds.jpg',
        }}
        style={{
          paddingBottom: '60%',
        }}
      />
    </div>
  );
