/** @type {import('next').NextConfig} */
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://noop/",

  },
  rules: [

    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
          options: {
            sourcemap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    },
    {
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      ],
    },
  ],
}

module.exports = nextConfig



