import React from "react";

type Props = {
  link: string;
};

export default function YoutubeTemplate({ link }: Props) {
  return (
    <iframe
      width="100%"
      height="500px"
      src={`${link}?autoplay=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
    
  );
}
