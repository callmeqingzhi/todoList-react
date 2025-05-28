import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center text-gray-600 mt-20 space-y-4">
      <h2 className="text-3xl font-bold text-red-500">
        404 - ページが見つかりません
      </h2>
      <p>お探しのページは存在しないか、すでに削除されました。</p>
      <Link
        to="/"
        className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ホームに戻る
      </Link>
    </div>
  );
}

export default NotFound;
