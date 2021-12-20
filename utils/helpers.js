let isLocalHost;
let hostName;
if (typeof window !== 'undefined') {

   isLocalHost = window.location.hostname === "localhost";
  hostName = window.location.hostname;
}
export const host = isLocalHost
  ? "http://localhost:3000/api/youtube"
  : `https://${hostName}/api/youtube`;

export const getDownloadUrl = (videoId, format = "mp4") =>
  `${host}/watch?v=${videoId}&format=${format}`;

export const secondsToMinutes = (time) => {
  return Math.floor(time / 60) + ":" + Math.floor(time % 60);
};

export const isYtUrl = (url) => {
  const ytRegex = new RegExp(
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\?\S*)?$/
  );
  return ytRegex.test(url);
};

export const getRandomEmoji = () => {
  const emojis = ["🎵", "🎼", "🎶", "🎻", "🎹", "🎺", "🎧", "🎤", "🎤"];
  const nr = Math.floor(Math.random() * (emojis.length - 1));
  return emojis[nr];
};

export const changeFormatStorage = (format) => {
  localStorage.setItem("format", format);
};

export const isDarkMode = () => {
  return localStorage.getItem("dark") === "true";
};
