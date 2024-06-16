import {
  compressJpg,
  compressPng,
  // compressWebp,
} from "@assetpack/plugin-compress"

export default {
  entry: "./raw-assets",
  output: "./public/images/",
  plugins: {
    compressJpg: compressJpg(),
    compressPng: compressPng(),
    // compressWebp: compressWebp(),
  },
}
