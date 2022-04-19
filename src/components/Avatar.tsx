import {Image} from 'react-native';
import React from 'react';

type AvatarProps = {
  url: string;
  size?: number;
};

const Avatar = ({url, size = 64}: AvatarProps) => {
  const avatarStyle = {width: size, height: size, borderRadius: size / 2};
  return (
    <Image
      source={{
        uri: url,
      }}
      resizeMode="cover"
      style={avatarStyle}
    />
  );
};

export default Avatar;
