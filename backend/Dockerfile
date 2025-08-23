# ステージ1: ベースイメージ
FROM python:3.12-slim

# 環境変数設定
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# 作業ディレクトリ設定
WORKDIR /app

# 最新のpipとuvをインストール
RUN pip install --no-cache-dir --upgrade pip uv

# 依存関係ファイルをコピー
COPY pyproject.toml ./

# uvを使って依存関係をインストール
# --systemオプションで仮想環境を作成せず、システムのPythonにインストールします
RUN uv pip install --system --no-cache --requirement pyproject.toml

# アプリケーションコードをコピー
COPY ./app /app/app

# ポート8000番を公開
EXPOSE 8000

# アプリケーションの起動コマンド
# 開発中は --reload をつけるとホットリロードが有効になります
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
