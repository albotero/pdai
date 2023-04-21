module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./"],
                alias: {
                    "@root": "./",
                    "@common": "./src/common",
                    "@components": "./src/components",
                    "@localization": "./src/localization",
                    "@screens": "./src/screens",
                    "@svg": "./src/svg",
                },
            },
        ],
        [
            "react-native-reanimated/plugin",
            {
                relativeSourceLocation: true,
            },
        ],
    ],
}
