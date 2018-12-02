import HttpClient from "app/components/HttpClient"
import UserModel from "app/models/UserModel"
import axios from "axios"

export default class UserService {
  static get(searchName) {
    return HttpClient.get (
      `search/users?q=${searchName}`,
    ).then((res) => {
      const result = res.data;
      return result.items.map(item => (
        new UserModel({
          name: item.login,
          url: item.html_url,
          avatarUrl: item.avatar_url,
          score: item.score,
        })
      ))
    })
  }
}