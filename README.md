# 開発環境について

このリポジトリでは、devcontainerを用いて開発環境を構築しています。<br>
（vscodeの使用を推奨）<br>
<br>
devcontainerはNodeやPythonなどの各開発環境に応じて、サブモジュールで管理しています。<br>
cloneする際は、下記のコマンドでサブモジュールも一緒にcloneしてください。<br>
<br>
```
git clone --recursive https://github.com/arcplg/rev-frontend.git
```
vscodeを使用している場合は、通知センターに「devcontainerでの起動」などの通知が出てく流かと思うので、そちらをクリックしコンテナ内で開発を進めてください。<br>
clone後は、`yarn install`などを実行し、依存関係のインストールを行なってください。<br>
