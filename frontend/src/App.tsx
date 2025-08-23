import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  // バックエンドから取得したカウントを保持するstate
  // 初期値はnullにして、データ取得中かどうかを判定できるようにする
  const [count, setCount] = useState<number | null>(null)

  // コンポーネントがマウントされた時に、現在のカウント数を取得
  useEffect(() => {
    axios.get('/api/count')
      .then(response => {
        setCount(response.data.count);
      })
      .catch(error => {
        console.error('Error fetching initial count:', error);
        setCount(0); // エラー時は0に設定
      });
  }, []); // 空の依存配列なので、初回レンダリング時に一度だけ実行される

  // ボタンがクリックされた時の処理
  const handleIncrement = () => {
    axios.post('/api/count/increment')
      .then(response => {
        // バックエンドから返された最新のカウントでstateを更新
        setCount(response.data.count);
      })
      .catch(error => {
        console.error('Error incrementing count:', error);
      });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + FastAPI</h1>
      <div className="card">
        {/* countがnullの場合はロード中、そうでなければカウント数を表示 */}
        <p>
          Server Count: {count === null ? 'Loading...' : count}
        </p>
        <button onClick={handleIncrement}>
          Increment Count on Server
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
