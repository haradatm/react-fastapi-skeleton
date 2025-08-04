// frontend/src/App.jsx
// Reactアプリケーションのメインコンポーネントです。

import { useState, useEffect } from 'react';
import './App.css'; // 簡単なスタイリング用

function App() {
  // バックエンドからのメッセージを格納するstate
  const [message, setMessage] = useState('');
  // ローディング状態を管理するstate
  const [loading, setLoading] = useState(true);
  // エラーメッセージを格納するstate
  const [error, setError] = useState(null);

  // コンポーネントのマウント時にAPIからデータをフェッチ
  useEffect(() => {
    // FastAPIのエンドポイントURL
    const apiUrl = 'http://localhost:8000/api/message';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('ネットワークの応答がありませんでした');
        }
        return response.json();
      })
      .then(data => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error('フェッチ操作で問題が発生しました:', error);
        setError('データの取得に失敗しました。バックエンドサーバーが起動しているか確認してください。');
        setLoading(false);
      });
  }, []); // 空の依存配列は、このeffectがマウント時に一度だけ実行されることを意味します

  return (
    <>
      <h1>React + FastAPI</h1>
      <div className="card">
        <h2>バックエンドからのメッセージ:</h2>
        {loading && <p>読み込み中...</p>}
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
      </div>
    </>
  );
}

export default App;