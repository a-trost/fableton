import { Bounded } from "../../components/Bounded";
import YouTubeLazyLoad from "../../components/YouTubeLazyLoad";

const YouTubeEmbed = ({ slice }) => {
  const { youtubeID, title, thumbnailOverride, caption } = slice.primary;

  return (
    <Bounded as="section">
      <YouTubeLazyLoad
        youtubeID={youtubeID}
        title={title}
        thumbnailOverride={thumbnailOverride}
        caption={caption}
      />
    </Bounded>
  );
};

export default YouTubeEmbed;
