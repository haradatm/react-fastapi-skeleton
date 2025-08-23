from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from pydantic import BaseModel

# アプリケーションの状態を保持するシンプルなインメモリ変数
# 本番環境ではデータベースなどを使用します
app_state = {"count": 0}

app = FastAPI()

allowed_origins = os.environ.get("ALLOWED_ORIGINS", "http://localhost:3000").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CountResponse(BaseModel):
    count: int

@app.get("/api/count", response_model=CountResponse)
def get_count():
    """
    現在のカウント数を取得するエンドポイント
    """
    return {"count": app_state["count"]}

@app.post("/api/count/increment", response_model=CountResponse)
def increment_count():
    """
    カウントを1増やすエンドポイント
    """
    app_state["count"] += 1
    return {"count": app_state["count"]}
