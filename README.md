# React アプリケーションに単体テストを実施する

## 技術スタック

Jest によるテストに焦点を当てるため、技術スタックは以下のようにシンプルなものにしています。

- CLI: [Create React App](https://create-react-app.dev/) - テスト環境がセットアップされている状態で始められます。
- Library: [React](https://react.dev/) - create react app のデフォルトの設定を使用し、.js を使用します。
- Test: [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- API: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## テストケース

- [x] "hello world"が表示されているかを確認する。
- [x] ボタンをクリックした時に正常にカウントアップがされるかを確認する。
- [x] インプットの内容が反映されているかを確認する
- [x] api からデータを取得し、表示されていることを確認する
- [x] スナップショットテストを実践する
