## PROXY の設定

browser-sync のホットリロードを使用するため、PROXY の設定が必要です。

開発環境として local by flywheel を使用する場合の設定手順は次のとおりです。

### サイトドメインの設定
- デフォルトだと「wp-test.local」となっているはずなので、「wp-test.wp」などlocal以外にしておく
![スクリーンショット 2023-03-06 12 49 32](https://user-images.githubusercontent.com/59102541/223015860-a1a3d90e-8a15-4688-b4ae-31188605624b.png)

- テーマフォルダ（app/public/wp-content/theme）に移動してクローンする

ターミナル等で該当フォルダに移動して
```
git clone git@github.com:kondo-tomonori1001/wp-starter.git
```

## コマンド一覧

### node_modules のインストール

```
npm i
```

### 開発用

```
npm run dev
```

### 公開用ファイル作成

```
npm run build
```
