export default (error) => {
    // 網絡錯誤（無網絡、DNS 解析失敗等）
    if (!error.response) {
        if (error.code === 'ECONNABORTED' || error.code === 'ETIMEDOUT') {
            throw new Error('請求超時，請檢查網絡連線');
        }
        if (error.message === 'Network Error') {
            throw new Error('網絡錯誤，請檢查網絡連線');
        }
        throw new Error('無法連接伺服器，請檢查網絡連線');
    }
    // HTTP 狀態碼錯誤
    const status = error.response.status;
    switch (status) {
        case 400:
            throw new Error('請求參數錯誤');
        case 401:
            throw new Error('未授權，請重新登入');
        case 403:
            throw new Error('沒有權限訪問');
        case 404:
            throw new Error('請求的資源不存在');
        case 429:
            throw new Error('請求過於頻繁，請稍後再試');
        case 500:
        case 502:
        case 503:
        case 504:
            throw new Error('伺服器錯誤，請稍後再試');
        default:
            throw new Error(`請求失敗 (${status})`);
    }
};
