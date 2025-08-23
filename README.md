# React + FastAPI + Docker 雛形プロジェクト

React (Vite), FastAPI, uv, Docker を使用したモダンなWebアプリケーション開発のためのシンプルな雛形です。

## ✨ 特徴

- **モダンな技術スタック**: フロントエンドに **React (Vite)**, バックエンドに **FastAPI** を採用。
- **高速なパッケージ管理**: Pythonのパッケージ管理に高速な **uv** を使用。
- **コンテナ化**: **Docker** と **Docker Compose** により、環境構築が容易で再現性が高い。
- **本番に近い構成**: 本番環境を想定し、フロントエンドは **Nginx** で静的ファイルを配信し、バックエンドへのリバースプロキシとしても機能。
- **開発効率**: バックエンドはホットリロードに対応しており、コードの変更が即座に反映されます。

## 🚀 使用技術

- **フロントエンド**: React 18, TypeScript, Vite, Axios
- **バックエンド**: FastAPI, Python 3.12, Uvicorn
- **パッケージ管理**: npm (Frontend), uv (Backend)
- **Webサーバー**: Nginx
- **コンテナ**: Docker, Docker Compose

## 📂 ディレクトリ構造

```
.
├── backend/
│   ├── app/
│   │   └── main.py      # FastAPIアプリケーション
│   ├── pyproject.toml   # Python依存関係 (uv)
│   └── Dockerfile       # バックエンド用Dockerfile
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   └── App.tsx      # Reactコンポーネント
│   ├── nginx.conf       # Nginxリバースプロキシ設定
│   ├── package.json     # Node.js依存関係
│   └── Dockerfile       # フロントエンド用Dockerfile
│
└── docker-compose.yml     # Docker Compose設定
```

## 🛠️ セットアップと実行方法

### 1. 前提条件

- Docker
- Docker Compose
- Git

### 2. プロジェクトのセットアップ手順

1.  **リポジトリをクローン**:
    まず、このリポジトリをローカルマシンにクローンし、ディレクトリに移動します。
    ```bash
    git clone https://github.com/haradatm/react-fastapi-skeleton
    cd react-fastapi-skeleton
    ```

2.  **フロントエンドプロジェクトの初期化**:
    `frontend` ディレクトリに移動し、Vite (React) プロジェクトのセットアップと依存関係のインストールを行います。
    ```bash
    cd frontend
    npm create vite@latest . -- --template react-ts
    ```
    > **⚠️ 重要**: 上記のコマンドは、`Dockerfile` や `src` ディレクトリを含む、`frontend` ディレクトリ内の既存ファイルを上書きします。次のステップで、これらのファイルを元の状態に戻します。

3.  **上書きされたファイルを復元**:
    `npm create vite` によって変更されたファイルを、`git` を使ってリポジトリの元の状態に復元します。
    ```bash
    # frontend ディレクトリ内で実行
    git restore .
    ```

4.  **依存関係をインストール**:
    必要なnpmパッケージをインストールします。
    ```bash
    # frontend ディレクトリ内で実行
    npm install
    npm install axios
    ```

5.  **プロジェクトルートに戻る**:
    ```bash
    cd ..
    ```

### 3. アプリケーションの起動

プロジェクトのルートディレクトリで、以下のコマンドを実行してコンテナをビルドし、起動します。

```bash
docker-compose up --build
```

### 4. アプリケーションへのアクセス

ブラウザで以下のURLを開きます。

- **`http://localhost:3000`**

画面にバックエンドで管理されているカウンターが表示されれば成功です。

### 5. アプリケーションの停止

コンテナを停止するには、ターミナルで `Ctrl + C` を押し、以下のコマンドを実行します。

```bash
docker-compose down
```

## 🔌 APIエンドポイント

- **GET `/api/count`**
  - サーバーに保存されている現在のカウント数を取得します。

- **POST `/api/count/increment`**
  - サーバーのカウント数を1増やします。
