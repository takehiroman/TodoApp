# TodoAppの作成

* 提出課題用のリポジトリです。

### 使用した技術要素


 * React 15.6.2
 * Redux: 3.7.2 
 * Express 4.15.4
 * Mongoose 4.11.13
 * Material-UI 0.19.4


### 全体の設計・構成についての説明

* フロントエンドはReact/Reduxで構成し，バックエンドはExpressで作成した。データベースはMongoDBを使用している。

* 画面構成は
1. リストを追加するトップ画面
2. Todoリストの詳細画面
3. Todo,Todoリストの検索画面

の３種類で構成されている

### 開発環境のセットアップ

1. このプロジェクトを```git clone```する
2. ```mongod```コマンドでMongoDBを起動する
3. ```TodoApp/client```ディレクトリで```npm install```を実行したあと，```npm run build```を行う
4. ```TodoApp```ディレクトリで```npm install```を行い，```npm run start```でサーバーを起動する
5. 起動後に```localhost:3001```でページに移動する

### 画面ごとの内容

### Top画面
Todoリスト一覧を表示する。フォームにリスト名を入力し追加ボタンを押すことで，リストが追加される。リストをクリックすると，Todo詳細画面に移動する。

### Todo詳細画面
クリックされたリストのTodo一覧を表示する。フォームにTodoの内容とTodoの期限を入力することで，追加することができる。終了したTodoはボタンで完了か未完了か切り替えることができる。

### 検索画面
ヘッダーの左上のメニューの検索で表示することができる。キーワードを入力し一致したTodo,Todoリストの検索結果を表示する。表示される検索結果は，キーワードの部分一致で表示される。



