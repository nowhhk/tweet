export default class TweetService {
  //   tweets = [
  //     {
  //       id: 1,
  //       text: '안녕하세요 텍스트에요!',
  //       createdAt: '2021-05-09T04:20:57.000Z',
  //       name: '마이네임',
  //       username: 'nowhhk',
  //       url: 'https://image.msscdn.net/images/goods_img/20210512/1946985/1946985_9_500.jpg?t=20220531145931',
  //     },
  //   ];

  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async getTweets(username) {
    const query = username ? `?username=${username}` : '';
    return this.http.fetch(`/tweets${query}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
  }

  async postTweet(text) {
    return this.http.fetch(`/tweets`, {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: this.getHeaders(),
    });
  }

  async deleteTweet(tweetId) {
    return this.http.fetch(`/tweets/${tweetId}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });
  }

  async updateTweet(tweetId, text) {
    return this.http.fetch(`/tweets/${tweetId}`, {
      method: 'PUT',
      body: JSON.stringify({ text }),
      headers: this.getHeaders(),
    });
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
