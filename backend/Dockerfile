# backend/Dockerfile
# FastAPIバックエンドサービスのDockerイメージを定義します。

# ベースイメージとして公式のPython 3.12-slimを使用
FROM python:3.12-slim

# 環境変数: Pythonの出力をバッファリングしないように設定
ENV PYTHONUNBUFFERED=1
# 環境変数: uvが仮想環境を作成しないように設定
ENV UV_NO_VENV=1

# 作業ディレクトリを作成し、設定
WORKDIR /app

# 最新のpipとuvをインストール
RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir uv

# pyproject.tomlをコピー
COPY pyproject.toml .

# uvを使って依存関係をインストール
# --systemオプションでグローバル環境にインストール
RUN uv pip install --system -r pyproject.toml --no-cache

# アプリケーションコードをコピー
COPY ./app /app/app

# コンテナがリッスンするポートを公開
EXPOSE 8000

# コンテナ起動時のデフォルトコマンド
# uvicornを使い、すべてのIPアドレスからのアクセスを許可し、
# --reloadオプションでコード変更時に自動リロード
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]