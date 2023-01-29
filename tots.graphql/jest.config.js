module.exports = {
    "testEnvironment": "node",
    "transform": {
        "^.+\\.ts?$": "ts-jest"
    },
    "testRegex": "(\\.|)(test|spec)\\.[jt]sx?$",
    "moduleFileExtensions": [
        "ts",
        "js"
    ],
    "moduleDirectories": [
        "node_modules",
        "src"
    ],
}