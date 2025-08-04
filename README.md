# React (Vite) + FastAPI Docker開発環境

このリポジトリは、フロントエンドにReact (Vite)、バックエンドにFastAPIを使用したモダンなWebアプリケーション開発のためのDocker環境を提供します。

## 特徴

- **Docker Compose**: フロントエンドとバックエンドのサービスを定義・連携
- **VSCode Dev Containers**: ワンクリックでコンテナベースの開発環境を起動
- **FastAPI**: 高速なPythonバックエンドフレームワーク
- **React (Vite)**: 高速なビルドツールViteを使用したフロントエンド
- **uv**: 高速なPythonパッケージインストーラー

## ディレクトリ構成

```
.
├── .devcontainer/
│   └── devcontainer.json   # Dev Containerの設定ファイル
├── backend/
│   ├── Dockerfile          # バックエンド用のDockerfile
│   ├── pyproject.toml      # Pythonプロジェクトと依存関係の定義
│   └── app/
│       └── main.py         # FastAPIアプリケーション本体
├── frontend/
│   ├── Dockerfile          # フロントエンド用のDockerfile
│   ├── package.json        # Node.jsプロジェクトと依存関係の定義
│   └── src/
│       └── App.jsx         # Reactコンポーネントのサンプル
├── .gitignore              # Gitの追跡対象外ファイルを指定
└── docker-compose.yml      # Dockerサービスの構成ファイル
```

---

## 始め方 (VSCode Dev Container)

### 前提条件

- [Docker](https://www.docker.com/products/trusted-content/open-source/)
- [Visual Studio Code](https://code.visualstudio.com/)
- VSCode拡張機能: [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### 手順

1.  このリポジトリ（またはこれらのファイル）をローカルにクローンまたはダウンロードします。
2.  VSCodeでプロジェクトフォルダを開きます。
3.  左下に表示されるポップアップで「**Reopen in Container**」をクリックします。
4.  Dev Containerのビルドが完了するのを待ちます。
5.  ビルドが完了すると、VSCodeがコンテナに接続された状態で再起動します。
    - **バックエンド**: ターミナルで `cd /app` し、 `uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload` を実行します。
    - **フロントエンド**: 別のターミナルを開き、 `cd /app` してから `docker-compose exec frontend bash` でフロントエンドコンテナに入り、`npm install && npm run dev` を実行します。
6.  開発サーバーが起動します。
    - **フロントエンド**: [http://localhost:5173](http://localhost:5173)
    - **バックエンドAPI**: [http://localhost:8000/api/message](http://localhost:8000/api/message)
    - **バックエンドDocs**: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## コマンドラインからの操作

Dev Containerを使用せず、コマンドラインから直接Docker環境を操作することも可能です。プロジェクトのルートディレクトリで以下のコマンドを実行してください。

### 1. Dockerイメージのビルド

```bash
docker-compose build
```

### 2. コンテナの起動

コンテナをバックグラウンドで起動します。

```bash
docker-compose up -d
```

### 3. 動作確認

コンテナが起動したら、以下のURLにアクセスして動作を確認できます。

- **フロントエンド**: [http://localhost:5173](http://localhost:5173)
- **バックエンドAPI**: [http://localhost:8000/api/message](http://localhost:8000/api/message)
- **バックエンドDocs**: [http://localhost:8000/docs](http://localhost:8000/docs)

起動中のコンテナのログを確認するには、以下のコマンドを使用します。

```bash
# すべてのサービスのログをリアルタイムで表示
docker-compose logs -f

# バックエンドのログのみ表示
docker-compose logs -f backend
```

### 4. コンテナの停止

開発を終了する際は、以下のコマンドでコンテナを停止・削除します。

```bash
docker-compose down
```