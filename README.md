# react + styled components + storybook

## styled-components を利用した開発をしやすくする（VS Code）

### 拡張を追加する

- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components): styled-components をシンタックスハイライトする拡張

### `settings.json`を更新

Emmet を利用できるようにするために`settings.json`を以下のように更新。

```json
"emmet.includeLanguages": {
  "typescriptreact": "css",
  "javascriptreact": "css"
}
```
