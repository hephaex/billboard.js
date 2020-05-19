import pkg from './package.json';
import babel from '@rollup/plugin-babel';
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import {terser} from "rollup-plugin-terser";

// import banner from "./config/banner.js";

const terserOptions = {
    output: {
        comments: false
    }
};

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/billboard.js",
            format: "umd",
            name: "bb",
            globals: {
                d3: "d3"
            }
        },
        {
            file: "dist/billboard.min.js",
            format: "umd",
            name: "bb",
            plugins: [
                terser(terserOptions)
            ]
        },
        {
            file: "dist/billboard.esm.js",
            format: "es"
        }
    ],
    //external: ["d3"],
    plugins: [
        resolve(),
        babel({
            babelHelpers: "runtime"
        }),
        typescript()
    ]
  };