export type User = { name: string; username: string }
export type UserList = Array<User & { password: string }>

// will be replace later with JWT
export async function login(username: string, password: string) {
  const request = await fetch('public/users.json')
  console.log(request)
  const userJson: UserList = await request.json()
  return userJson.find(s => s.password === password && s.username === username)
}

export async function getUser() {
  const request = await fetch('public/current.json')
  console.log(request)
  const user: User = await request.json()
  return user;
}