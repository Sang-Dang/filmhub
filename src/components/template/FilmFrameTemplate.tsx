import React from "react";

type Props = {
  link: string;
};

export default function FilmFrameTemplate({ link }: Props) {
  return (
    <iframe
      title="Main"
      width="100%"
      height="100%"
      frameBorder={0}
      allowTransparency
      allowFullScreen
      scrolling="no"
      src={link}
    />
  );
}
