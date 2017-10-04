# TodoAppの作成

### 使用した技術要素

 * JavaScript(ECMAScript6)
    * React 15.6.2
    * Express 4.15.4
    * Mongoose 4.11.13


### 全体の設計・構成についての説明

* フロントエンドはReact/Reduxで構成し，バックエンドはExpressで作成した。


### 開発環境のセットアップ

1. このプロジェクトを```git clone```する
2. ```mongod```コマンドでMongoDBを起動する
3. ```TodoApp/client```ディレクトリで```npm install```を実行したあと，```npm run build```を行う
4. ```TodoApp```ディレクトリで```npm install```を行い，```npm run start```でサーバーを起動する
5. 起動後に```localhost:3001```でページに移動する

### 画面ごとの内容

### Top画面
Todoリスト一覧を表示する

### Todo詳細画面
Todoの表示をする
