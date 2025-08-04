# frontend/Dockerfile
# ReactフロントエンドサービスのDockerイメージを定義します。

# ベースイメージとして公式のNode.js 20-alpineを使用
FROM node:20-alpine

# 作業ディレクトリを作成し、設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
# (lockファイルが存在すればそれもコピーすることで、ビルドの再現性を高めます)
COPY package.json ./
# COPY package-lock.json ./

# 依存関係をインストール
# npm ci を使うとpackage-lock.jsonに基づいてクリーンインストールします
# RUN npm ci
RUN npm install

# アプリケーションコードをコピー
COPY . .

# Viteの開発サーバーが使用するポートを公開
EXPOSE 5173

# コンテナ起動時のデフォルトコマンド
# Viteの開発サーバーを起動し、すべてのホストからのアクセスを許可
CMD ["npm", "run", "dev", "--", "--host"]