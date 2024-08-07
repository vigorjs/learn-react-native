import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

const ImageViewer = ({ placeholderImageSource, selectedImage }: any) => {
const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;
  return (
    <Image source={imageSource} style={styles.image} />
  );
}

export default ImageViewer;
