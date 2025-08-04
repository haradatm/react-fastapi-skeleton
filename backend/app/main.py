# backend/app/main.py
# FastAPIアプリケーションのエントリーポイントです。

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# FastAPIインスタンスを作成
app = FastAPI()

# CORS (Cross-Origin Resource Sharing) ミドルウェアの設定
# フロントエンドからのリクエストを許可します。
origins = [
    "http://localhost",
    "http://localhost:5173",  # Vite開発サーバーのデフォルトポート
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # 許可するオリジン
    allow_credentials=True,  # クレデンシャルを許可
    allow_methods=["*"],  # すべてのHTTPメソッドを許可
    allow_headers=["*"],  # すべてのHTTPヘッダーを許可
)


# ルートエンドポイント
@app.get("/")
def read_root():
    return {"Hello": "World from FastAPI"}


# サンプルAPIエンドポイント
@app.get("/api/message")
def get_message():
    return {"message": "これはFastAPIバックエンドからのメッセージです！"}
